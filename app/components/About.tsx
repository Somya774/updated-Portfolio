"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="fade-mask min-h-screen bg-black text-white overflow-hidden relative flex items-center px-10 md:px-24 pt-0 pb-32 -mt-32">

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_35%)]" />

      {/* FLOWERS BACK */}

      {/* BABY FLOWERS */}



<motion.div
  animate={{ y: [0, 16, 0] }}
  transition={{ duration: 11, repeat: Infinity }}
  className="absolute left-[10%] bottom-[12%] opacity-60"
>
  <Image
    src="/flowers/Baby.png"
    alt=""
    width={220}
    height={220}
    className="object-contain mix-blend-screen brightness-75"
  />
</motion.div>

      {/* CONTENT */}

      <div className="grid md:grid-cols-2 gap-6 items-center w-full relative z-10">

        {/* IMAGE */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-end"
        >
          <Image
            src="/profile.png"
            alt="Soumya"
            width={620}
            height={820}
            className="grayscale object-cover relative z-10"
          />
        </motion.div>

        {/* TEXT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
            ABOUT
          </p>

          <div className="w-16 h-[1px] bg-zinc-700 mb-10" />

          <h2 className="text-5xl md:text-7xl font-extralight leading-[1.15] tracking-tight text-zinc-100">
            Hi, I’m Soumya.
          </h2>

          <p className="mt-8 text-zinc-300 text-2xl font-light leading-relaxed">
            I’m an AI engineer and automation builder who loves turning ideas into intelligent systems and meaningful digital experiences.
          </p>

          <div className="w-16 h-[1px] bg-zinc-700 my-10" />

          <p className="text-zinc-500 text-lg leading-[2]">
            I work on AI-powered automation systems, conversation intelligence platforms, voice assistants, and data-driven products. I enjoy blending strong backend engineering with modern storytelling and interactive user experiences.
          </p>

        </motion.div>

      </div>

    </section>
  );
}