"use client";

import {
  BrainCircuit,
  Workflow,
  BarChart3,
  Target,
} from "lucide-react";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

import { useRef } from "react";

const skills = [
  {
    title: "AI Engineering",
    description:
      "Designing AI-powered systems using LLMs, FastAPI, voice assistants, and intelligent backend workflows.",
    icon: BrainCircuit,
  },
  {
    title: "Automation",
    description:
      "Building scalable automation pipelines, webhook architectures, and workflow orchestration systems.",
    icon: Workflow,
  },
  {
    title: "Analytics",
    description:
      "Creating dashboards, ETL pipelines, and business intelligence systems using SQL and Power BI.",
    icon: BarChart3,
  },
  {
    title: "GTM Systems",
    description:
      "Engineering lead scoring, CRM enrichment, outbound workflows, and growth-focused operational systems.",
    icon: Target,
  },
];

export default function Skills() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={ref}
      className="fade-mask min-h-screen bg-black text-white px-10 md:px-24 py-40"
    >

      {/* HEADER */}

      <div className="mb-32">

        <p className="uppercase tracking-[0.25em] text-zinc-500 text-sm mb-8">
          SKILLS
        </p>

        <h2 className="text-6xl md:text-8xl font-bold leading-tight">
          Skills
        </h2>

        <p className="mt-8 text-zinc-500 text-lg md:text-xl max-w-3xl leading-relaxed">
          A blend of technical systems, automation thinking,
          analytics, and modern AI workflows.
        </p>

      </div>

      {/* TIMELINE */}

      <div className="relative max-w-5xl mx-auto">

        {/* LINE */}

        <div className="absolute left-8 top-0 w-[2px] h-full bg-zinc-900 overflow-hidden">

          <motion.div
            style={{ scaleY }}
            className="origin-top absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-zinc-400 to-transparent"
          />

        </div>

        {/* ITEMS */}

        <div className="space-y-28 pb-10">

          {skills.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex gap-10 group"
              >

                {/* ICON */}

                <div className="relative z-10 w-16 h-16 rounded-full border border-zinc-700 bg-black flex items-center justify-center group-hover:border-white transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.08)] animate-pulse">

                  <Icon
                    size={24}
                    className="text-zinc-300"
                  />

                </div>

                {/* CARD */}

                <div className="flex-1 border border-zinc-900 bg-zinc-950/30 backdrop-blur-xl rounded-[32px] p-10 hover:border-zinc-700 hover:bg-zinc-900/40 transition-all duration-500">

                  <h3 className="text-3xl font-light mb-5 text-zinc-100">
                    {item.title}
                  </h3>

                  <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>

    </section>
  );
}