import React from "react";
import { motion } from "motion/react";

export default function HighlightBlock() {
  return (
    <motion.div
      id="highlight-sabor-apaixona"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      className="relative inline-flex items-center justify-center p-0.5 rounded-2xl overflow-hidden shadow-xl"
    >
      {/* Dynamic gradient-glow backing behind glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E1AD01]/20 to-[#4B3621]/15 blur-sm" />

      {/* The frosted glass (glassmorphism) rectangle container */}
      <div
        className="relative px-8 py-3.5 rounded-[14px] bg-[#FFFFFF]/25 backdrop-blur-md border border-[#FFFFFF]/40 flex items-center justify-center"
        style={{ boxShadow: "inset 0 1px 1px rgba(255, 255, 255, 0.4)" }}
      >
        <span
          className="text-2xl md:text-3xl font-bold tracking-wide select-none text-[#4B3621]"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Sabor que apaixona
        </span>
      </div>
    </motion.div>
  );
}
