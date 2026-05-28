"use client";

import { motion } from "framer-motion";

const experiences = [
    {
      year: "Feb – May 2025",
      title: "GTM Engineer Intern · Zintellix",
      description:
        "Built GTM data pipelines and lead-scoring systems improving outbound targeting accuracy and conversion. Automated CRM enrichment workflows and designed KPI dashboards enabling faster GTM strategy iteration.",
    },
    {
      year: "Feb – Aug 2025",
      title: "Product Operations Intern · DemandLane",
      description:
        "Automated end-to-end reporting workflows in Python eliminating repetitive manual reporting. Built dashboards for product usage and engagement KPIs while standardizing reporting systems.",
    },
    {
      year: "Jun 2024 – Jan 2025",
      title: "Data Analyst & Python Dev Intern · Attain",
      description:
        "Developed Power BI dashboards for business reviews and automated ETL workflows in Python. Engineered SQL and Excel MIS systems achieving high reporting accuracy and faster decision cycles.",
    },
  ];

export default function Experience() {
  return (
    <section className="fade-mask min-h-screen bg-black text-white px-10 md:px-24 py-32">
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="uppercase tracking-[0.15em] text-white font-bold text-6xl md:text-7xl mb-28"
      >
        Experience
      </motion.p>

      <div className="space-y-24">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="border-b border-zinc-800 pb-16"
          >
            <p className="text-zinc-500 text-sm mb-6">
              {exp.year}
            </p>

            <h2 className="text-2xl md:text-3xl font-medium mb-4 leading-tight text-zinc-100">
              {exp.title}
            </h2>

            <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}