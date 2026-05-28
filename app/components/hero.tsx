"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pb-10">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_40%)]" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="relative z-10 text-center -mt-24"
      >
        <p className="uppercase tracking-[0.4em] text-zinc-500 mb-6 text-sm">
          AI ENGINEER • AUTOMATION • DATA SYSTEMS
        </p>

        <h1 className="text-7xl md:text-[10rem] font-semibold tracking-tight leading-none">
          SOMYA AGRAWAL
        </h1>

        <p className="mt-8 text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
          Building intelligent systems, cinematic interfaces, and AI-powered experiences.
        </p>
      </motion.div>

      <div className="absolute bottom-10 text-zinc-600 animate-bounce text-sm tracking-widest">
        SCROLL
      </div>

    </section>
  );
}