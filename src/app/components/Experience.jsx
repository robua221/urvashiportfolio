"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "May 2025 — December 2025",
    title: "Construction Project Management Intern • PortsToronto (Toronto Port Authority) Toronto, Canada",
    desc: "Managing project documentation, contractor coordination, schedules, procurement workflows, and digital project tools.",
  },
  {
    year: "2022 — 2023",
    title: "Architect & Project Coordinator • India",
    desc: "Worked on commercial complexes, township masterplans, and luxury interior projects. Handled client presentations, design development, and execution drawings.",
  },
  {
    year: "2017 — 2022",
    title: "Bachelor of Architecture",
    desc: "Developed academic projects across housing, cultural centers, institutional design, and urban analysis.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-20 py-20 bg-slate-50">
      <h2 className="text-4xl font-bold mb-12">Experience</h2>

      <div className="relative border-l border-slate-300 ml-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="mb-12 ml-6"
          >
            <div className="absolute -left-4 top-1 w-3 h-3 rounded-full bg-black"></div>

            <p className="text-sm text-slate-500">{exp.year}</p>
            <h3 className="text-xl font-semibold mt-1">{exp.title}</h3>
            <p className="text-slate-700 mt-1 max-w-2xl">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
