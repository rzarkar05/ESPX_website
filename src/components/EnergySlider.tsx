"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const dataPoints = [
  { year: 2020, storage: 3, solar: 15, wind: 12, label: "Early Adoption" },
  { year: 2021, storage: 5, solar: 22, wind: 18, label: "Growth Phase" },
  { year: 2022, storage: 9, solar: 35, wind: 27, label: "Acceleration" },
  { year: 2023, storage: 16, solar: 52, wind: 38, label: "Scaling Up" },
  { year: 2024, storage: 28, solar: 75, wind: 52, label: "Mass Deployment" },
  { year: 2025, storage: 45, solar: 105, wind: 68, label: "Grid Integration" },
  { year: 2026, storage: 70, solar: 140, wind: 88, label: "Market Maturity" },
];

export default function EnergySlider() {
  const [index, setIndex] = useState(6);
  const data = dataPoints[index];
  const maxVal = 140;

  return (
    <div className="glass-card rounded-2xl p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">
          U.S. Energy Capacity Growth (GW)
        </h3>
        <span className="text-espx-cyan font-mono text-2xl font-bold">
          {data.year}
        </span>
      </div>

      <p className="text-sm text-gray-400 mb-8">{data.label}</p>

      {/* Bars */}
      <div className="space-y-6 mb-8">
        {[
          { label: "Energy Storage", value: data.storage, color: "bg-espx-cyan", glow: "shadow-[0_0_15px_rgba(0,229,255,0.4)]" },
          { label: "Solar", value: data.solar, color: "bg-amber-400", glow: "shadow-[0_0_15px_rgba(251,191,36,0.4)]" },
          { label: "Wind", value: data.wind, color: "bg-emerald-400", glow: "shadow-[0_0_15px_rgba(52,211,153,0.4)]" },
        ].map((item) => (
          <div key={item.label}>
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-gray-300">{item.label}</span>
              <span className="text-white font-mono font-medium">
                {item.value} GW
              </span>
            </div>
            <div className="h-3 rounded-full bg-espx-navy-light overflow-hidden">
              <motion.div
                animate={{ width: `${(item.value / maxVal) * 100}%` }}
                transition={{ duration: 0.8, ease: "easeOut" as const }}
                className={`h-full rounded-full ${item.color} ${item.glow}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min={0}
          max={dataPoints.length - 1}
          value={index}
          onChange={(e) => setIndex(Number(e.target.value))}
          className="w-full h-1 rounded-full appearance-none cursor-pointer bg-espx-navy-light
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-espx-cyan [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(0,229,255,0.6)] [&::-webkit-slider-thumb]:cursor-pointer
            [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-espx-cyan [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-[0_0_15px_rgba(0,229,255,0.6)] [&::-moz-range-thumb]:cursor-pointer"
        />
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          {dataPoints.map((d) => (
            <span key={d.year}>{d.year}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
