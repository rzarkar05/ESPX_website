"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import NeuralNetwork from "@/components/NeuralNetwork";
import { PulsingIcon } from "@/components/AnimatedIcon";
import EnergySlider from "@/components/EnergySlider";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
});

const features = [
  {
    title: "Energy Storage",
    description:
      "Advanced battery storage solutions powering the next generation of energy markets with unmatched reliability.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    stat: "70 GW",
    statLabel: "Projected 2026 Capacity",
  },
  {
    title: "AI & Data Analytics",
    description:
      "Leveraging artificial intelligence and machine learning to optimize energy trading and risk management.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    stat: "40%",
    statLabel: "Efficiency Gain",
  },
  {
    title: "Blockchain Security",
    description:
      "Elevating energy markets from traditional marketplaces to a secure energy blockchain ecosystem.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    stat: "99.9%",
    statLabel: "Transaction Security",
  },
  {
    title: "Renewable Integration",
    description:
      "Seamlessly connecting renewable energy sources with advanced storage and grid modernization technology.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    stat: "100%",
    statLabel: "Clean Energy Goal",
  },
];

const storySteps = [
  {
    label: "The Challenge",
    title: "Energy Markets Are Evolving",
    description:
      "Traditional energy markets face unprecedented challenges. Growing demand for renewables, grid instability, and outdated trading infrastructure require a bold new approach.",
  },
  {
    label: "The Opportunity",
    title: "Storage Changes Everything",
    description:
      "Energy storage is the missing link between intermittent renewable generation and reliable power delivery. It enables a fully decarbonized, resilient grid.",
  },
  {
    label: "The Solution",
    title: "ESPX Bridges the Gap",
    description:
      "We combine deep energy market expertise with cutting-edge blockchain, AI, and analytics to create the next-generation energy storage exchange.",
  },
];

function ScrollStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={containerRef} className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-sm font-semibold text-espx-cyan uppercase tracking-[0.2em] mb-4">
            Our Story
          </h2>
          <p className="text-3xl md:text-5xl font-bold text-white">
            The Future of Energy
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-espx-cyan/30 to-transparent hidden lg:block" />

          {storySteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 mb-24 ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div
                  className={`glass-card rounded-2xl p-10 ${
                    i % 2 === 0 ? "lg:mr-16" : "lg:ml-16"
                  }`}
                >
                  <span className="text-xs font-semibold text-espx-cyan uppercase tracking-[0.2em]">
                    {step.label}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="hidden lg:flex items-center justify-center absolute left-[50%] -translate-x-1/2">
                <motion.div
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="w-4 h-4 rounded-full bg-espx-cyan"
                  style={{ boxShadow: "0 0 20px rgba(0,229,255,0.6)" }}
                />
              </div>

              {/* Spacer for layout */}
              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ value, suffix = "" }: { value: string; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="text-3xl font-bold text-espx-cyan font-mono"
    >
      {value}
      {suffix}
    </motion.span>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-b from-espx-navy/50 via-transparent to-espx-navy z-[1]" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 mt-12 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
              <span className="text-white">ESPX</span>
            </h1>
            <p className="text-4xl md:text-6xl font-bold text-white mb-6">
              Energy Storage <span className="text-espx-cyan">Power Exchange</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            ESPX Global is a technology startup developing a centralized platform to evaluate financial and operational
            trade-offs and opportunities to integrate battery energy storage into the evolving electric power market. We collect, curate and standardize energy storage asset data, deploying data science methodologies to enhance our client&apos;s decision making with insights on how energy storage impacts electricity grids and markets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <MagneticButton href="/about">
              <span className="inline-block px-8 py-4 bg-espx-cyan/10 border border-espx-cyan/40 text-espx-cyan rounded-lg hover:bg-espx-cyan/20 hover:border-espx-cyan/60 transition-all duration-300 font-medium tracking-wide">
                Explore Our Vision
              </span>
            </MagneticButton>
            <MagneticButton href="/contact">
              <span className="inline-block px-8 py-4 bg-espx-teal text-white rounded-lg hover:bg-espx-teal-light transition-all duration-300 font-medium tracking-wide">
                Get In Touch
              </span>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-espx-cyan/30 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-2 rounded-full bg-espx-cyan"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Vision Statement */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-espx-teal-dark/30 via-transparent to-espx-teal-dark/30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-espx-cyan/5 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm font-semibold text-espx-cyan uppercase tracking-[0.2em] mb-8">
              Our Vision
            </h2>
            <blockquote className="text-2xl md:text-4xl font-light text-gray-200 leading-relaxed">
              &ldquo;To elevate energy markets from the traditional marketplace
              to an energy blockchain providing increased{" "}
              <motion.span
                className="text-espx-cyan font-medium inline-block"
                whileInView={{ textShadow: "0 0 30px rgba(0,229,255,0.5)" }}
                viewport={{ once: true }}
              >
                security
              </motion.span>
              ,{" "}
              <motion.span
                className="text-espx-cyan font-medium inline-block"
                whileInView={{ textShadow: "0 0 30px rgba(0,229,255,0.5)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                reliability
              </motion.span>{" "}
              and{" "}
              <motion.span
                className="text-espx-cyan font-medium inline-block"
                whileInView={{ textShadow: "0 0 30px rgba(0,229,255,0.5)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                technology-driven innovation
              </motion.span>
              .&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Neural Network Section */}
      <section className="relative py-32 overflow-hidden">
        <NeuralNetwork className="z-0 pointer-events-auto" />
        <div className="absolute inset-0 bg-gradient-to-b from-espx-navy via-espx-navy/90 to-espx-navy z-[1] pointer-events-none" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-semibold text-espx-cyan uppercase tracking-[0.2em] mb-4">
              What We Do
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-white">
              Powering the Future of Energy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: "easeOut" as const,
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass-card gradient-border rounded-2xl p-8 group cursor-default"
              >
                <div className="flex items-start justify-between mb-6">
                  <PulsingIcon className="w-14 h-14 bg-espx-cyan/10 flex items-center justify-center text-espx-cyan group-hover:bg-espx-cyan/20 transition-colors">
                    {feature.icon}
                  </PulsingIcon>
                  <div className="text-right">
                    <CountUp value={feature.stat} />
                    <p className="text-xs text-gray-500 mt-1">
                      {feature.statLabel}
                    </p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-espx-cyan transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-Driven Storytelling */}
      <ScrollStory />

      {/* Interactive Data Section */}
      <section className="relative py-32 bg-grid">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-semibold text-espx-cyan uppercase tracking-[0.2em] mb-4">
                Market Intelligence
              </h2>
              <p className="text-3xl md:text-4xl font-bold text-white mb-6">
                Energy Growth at a Glance
              </p>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                Explore how U.S. energy storage capacity has grown alongside
                solar and wind. Drag the slider to see the trajectory from early
                adoption to grid-scale deployment.
              </p>
              <div className="flex gap-8">
                <div>
                  <p className="text-3xl font-bold text-espx-cyan font-mono">23x</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Storage growth since 2020
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-espx-cyan font-mono">$50B+</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Market opportunity
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <EnergySlider />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="mx-auto max-w-3xl px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform
              <br />
              <span className="text-espx-cyan glow-text">Energy Markets?</span>
            </h2>
            <p className="text-gray-400 mb-12 text-lg max-w-xl mx-auto">
              Connect with our team of industry veterans and discover how ESPX
              is shaping the future of energy storage and power exchange.
            </p>
            <MagneticButton href="/contact" strength={0.4}>
              <span className="inline-block px-12 py-5 bg-espx-teal text-white rounded-xl hover:bg-espx-teal-light transition-all duration-300 font-medium tracking-wide text-lg">
                Get In Touch
              </span>
            </MagneticButton>
          </motion.div>
        </div>
      </section>
    </>
  );
}
