"use client";
import { motion } from "framer-motion";

export default function Education() {
  const items = [
    {
      school: "George Brown College, Toronto",
      program:
        "Postgraduate Certificate – Digital Product Management (2025–2026)",
      details:
        "Focused on product strategy, design thinking, research, prototyping, agile workflows, and digital product delivery.",
    },
    {
      school: "George Brown College, Toronto",
      program: "Postgraduate Certificate – Construction Management (2024–2025)",
      details:
        "Studied project delivery, budgeting, scheduling, contract admin, and construction processes in the Canadian industry.",
    },
    {
      school: "MBS School of Planning and Architecture, India",
      program: "Bachelor of Architecture (2017–2022)",
      details:
        "Licensed Architect (Council of Architecture, India). Completed academic thesis, studio projects, and internships across residential and commercial design.",
    },
  ];

  return (
    <section id="education" className="px-6 md:px-20 py-20 bg-slate-50">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12"
      >
        Education
      </motion.h2>

      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold">{item.school}</h3>
            <p className="text-lg text-slate-700 mt-1">{item.program}</p>
            <p className="text-slate-600 mt-3 text-sm">{item.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
