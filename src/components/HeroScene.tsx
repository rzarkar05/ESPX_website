"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function fibonacciSphere(count: number, radius: number) {
  const points: [number, number, number][] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;
    points.push([
      Math.cos(theta) * r * radius,
      y * radius,
      Math.sin(theta) * r * radius,
    ]);
  }
  return points;
}

function latLngToVec3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

const HOTSPOTS = [
  { lat: 37, lng: -122 },
  { lat: 40, lng: -74 },
  { lat: 29, lng: -95 },
  { lat: 51, lng: 0 },
  { lat: 35, lng: 139 },
  { lat: -33, lng: 151 },
  { lat: 25, lng: 55 },
  { lat: 1, lng: 103 },
  { lat: 48, lng: 2 },
  { lat: 55, lng: 37 },
  { lat: 19, lng: 72 },
  { lat: -23, lng: -46 },
];

// Connections between hotspots (pairs of indices)
const CONNECTIONS: [number, number][] = [
  [0, 1], [1, 2], [3, 4], [4, 5], [6, 7],
  [7, 4], [3, 8], [8, 9], [0, 5], [6, 10],
  [2, 11], [11, 5], [10, 4], [1, 3], [9, 6],
];

// Globe dot grid — tiny dots
function GlobeDots({ radius }: { radius: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const count = 350;
  const dotPositions = useMemo(() => fibonacciSphere(count, radius), [radius]);

  useFrame(() => {
    if (!meshRef.current) return;
    for (let i = 0; i < count; i++) {
      const [x, y, z] = dotPositions[i];
      dummy.position.set(x, y, z);
      dummy.scale.setScalar(0.012);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 4, 4]} />
      <meshBasicMaterial
        color="#00e5ff"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}

function GlobeWireframe({ radius }: { radius: number }) {
  return (
    <mesh>
      <sphereGeometry args={[radius * 0.995, 32, 20]} />
      <meshBasicMaterial color="#1a5f6b" wireframe transparent opacity={0.04} />
    </mesh>
  );
}

// Hotspot dots — slightly brighter, with subtle pulse
function Hotspots({ radius }: { radius: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const positions = useMemo(
    () => HOTSPOTS.map((h) => latLngToVec3(h.lat, h.lng, radius)),
    [radius]
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      const s = 1 + Math.sin(t * 1.5 + i * 1.2) * 0.25;
      child.scale.setScalar(s);
    });
  });

  return (
    <group ref={groupRef}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.025, 8, 8]} />
          <meshBasicMaterial
            color="#00e5ff"
            transparent
            opacity={0.7}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Static connection lines between hotspots
function ConnectionLines({ radius }: { radius: number }) {
  const positions = useMemo(
    () => HOTSPOTS.map((h) => latLngToVec3(h.lat, h.lng, radius)),
    [radius]
  );

  const lines = useMemo(() => {
    return CONNECTIONS.map(([a, b]) => {
      const start = positions[a];
      const end = positions[b];
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);
      mid.normalize().multiplyScalar(radius + dist * 0.18);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const pts = curve.getPoints(30);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({
        color: "#2a7f8e",
        transparent: true,
        opacity: 0.15,
        blending: THREE.AdditiveBlending,
      });
      return new THREE.Line(geo, mat);
    });
  }, [positions, radius]);

  return (
    <group>
      {lines.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
    </group>
  );
}

// Animated energy pulses traveling along connections
function FlowPulses({ radius }: { radius: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(
    () => HOTSPOTS.map((h) => latLngToVec3(h.lat, h.lng, radius)),
    [radius]
  );

  // 2 pulses per connection, staggered
  const pulseCount = CONNECTIONS.length * 2;

  const pulseData = useMemo(() => {
    return CONNECTIONS.flatMap(([a, b], ci) => {
      const start = positions[a];
      const end = positions[b];
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);
      mid.normalize().multiplyScalar(radius + dist * 0.18);
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      // Some go forward, some go reverse
      return [
        { curve, speed: 0.12 + Math.random() * 0.15, offset: 0, reverse: false },
        { curve, speed: 0.1 + Math.random() * 0.12, offset: 0.5, reverse: true },
      ];
    });
  }, [positions, radius]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < pulseCount; i++) {
      const p = pulseData[i];
      let progress = (t * p.speed + p.offset) % 1;
      if (p.reverse) progress = 1 - progress;
      const pos = p.curve.getPoint(progress);
      dummy.position.copy(pos);
      dummy.scale.setScalar(0.018 + Math.sin(t * 4 + i) * 0.005);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, pulseCount]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial
        color="#00e5ff"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
  );
}

// A few sparse ambient particles
function AmbientParticles() {
  const meshRef = useRef<THREE.Points>(null);
  const count = 80;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 3.5 + Math.random() * 3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.008;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#2a7f8e"
        transparent
        opacity={0.3}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function EnergyGlobe() {
  const groupRef = useRef<THREE.Group>(null);
  const globeRadius = 2.2;

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <group ref={groupRef}>
      <GlobeWireframe radius={globeRadius} />
      <GlobeDots radius={globeRadius} />
      <Hotspots radius={globeRadius} />
      <ConnectionLines radius={globeRadius} />
      <FlowPulses radius={globeRadius} />
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0.5, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.08} />
        <pointLight position={[6, 6, 6]} intensity={0.2} color="#00e5ff" />
        <pointLight position={[-6, -4, -6]} intensity={0.1} color="#2a7f8e" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.4}
          dampingFactor={0.1}
          enableDamping
        />
        <EnergyGlobe />
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
