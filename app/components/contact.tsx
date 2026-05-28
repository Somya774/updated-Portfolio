"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="fade-mask min-h-screen bg-black text-white flex flex-col justify-center items-center px-10 text-center relative overflow-hidden">

      {/* GLOW */}

      <div className="absolute w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />

      {/* CONTENT */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >

        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
          CONTACT
        </p>

        <h2 className="text-5xl md:text-8xl font-extralight leading-tight max-w-5xl">
          Let’s build something meaningful together.
        </h2>

        <p className="mt-10 text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
          Open to AI engineering, automation systems,
          product engineering, and creative technology opportunities.
        </p>

        {/* LINKS */}

        <div className="mt-20 flex flex-col md:flex-row gap-8 items-center justify-center">

          <a
            href="mailto:agrawalsomya@gmail.com"
            className="group text-zinc-300 text-lg"
          >
            Email
            <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500 mt-2" />
          </a>

          <a
            href="https://www.linkedin.com/in/somya-agarwal03/"
            className="group text-zinc-300 text-lg"
          >
            LinkedIn
            <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500 mt-2" />
          </a>

          <a
            href="https://github.com/Somya774"
            className="group text-zinc-300 text-lg"
          >
            GitHub
            <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500 mt-2" />
          </a>

        </div>

      </motion.div>

    </section>
  );
}