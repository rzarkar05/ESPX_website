"use client";

import { motion } from "framer-motion";

interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedIcon({ children, className = "" }: AnimatedIconProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PulsingIcon({ children, className = "" }: AnimatedIconProps) {
  return (
    <motion.div
      animate={{
        boxShadow: [
          "0 0 0px rgba(0,229,255,0)",
          "0 0 20px rgba(0,229,255,0.3)",
          "0 0 0px rgba(0,229,255,0)",
        ],
      }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      className={`rounded-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
