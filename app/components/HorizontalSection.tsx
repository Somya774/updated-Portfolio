"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".panel");

      gsap.to(sections, {
        x: () =>
          -(containerRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
          snap: 1 / (sections.length - 1),
          end: "+=3000",
        },
      });
    }, containerRef);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: "AI Lead Qualification System",
      description:
        "AI-powered lead scoring and outreach automation with webhook pipelines, FastAPI, Docker, and LLM integrations.",
    },
    {
      title: "AI Conversation Intelligence",
      description:
        "Transcript summarization and automated insight generation platform with scalable FastAPI backend architecture.",
    },
    {
      title: "AI Health Report Generator",
      description:
        "LLM-powered personalized health reporting system with modular backend pipelines and automated recommendations.",
    },
    {
      title: "AgriVoice AI Assistant",
      description:
        "End-to-end AI voice assistant using STT, NLP, LLM inference, and TTS optimized for low-bandwidth environments.",
    },
    {
      title: "Hospitality Revenue Analytics",
      description:
        "Interactive Power BI analytics dashboard tracking ADR, revenue insights, and hotel performance metrics.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-black"
    >
      <div
        className="flex h-screen"
        style={{
          width: `${projects.length * 100}vw`,
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="panel w-screen flex-shrink-0 h-screen flex items-center justify-center px-20"
          >
            <div className="group w-full h-[78vh] rounded-[48px] bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-zinc-800/60 p-20 flex flex-col justify-end relative overflow-hidden shadow-2xl transition-all duration-700 hover:scale-[0.98] hover:border-zinc-700">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

              <p className="text-zinc-500 mb-4 relative z-10 text-lg">
                0{index + 1}
              </p>

              <h2 className="text-6xl md:text-7xl font-semibold mb-6 relative z-10 transition-transform duration-700 group-hover:translate-y-[-8px]">
                {project.title}
              </h2>

              <p className="text-zinc-400 max-w-lg text-xl relative z-10 transition-all duration-700 group-hover:text-zinc-300">
                {project.description}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}