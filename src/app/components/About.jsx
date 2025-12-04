"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-20 py-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10"
      >
        About
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg leading-relaxed text-slate-700 max-w-3xl"
      >
        Currently pursuing a Postgraduate Certificate in Digital Product
        Management and recently completed my Postgraduate Certificate in
        Construction Management at George Brown College. I contributed to
        infrastructure capital projects as a Project Management Intern at
        PortsToronto, supporting planning, budgeting, and scheduling across all
        phases of project delivery. I am a licensed architect with Council of
        Architecture, India holding a Bachelor degree in Architecture from MBS
        School of Planning and Architecture India. With experience across
        residential, commercial, and interior projects , I’m passionate about
        applying my academic foundation and hands-on project experience to
        deliver innovative, practical solutions within Canada’s construction
        industry.
      </motion.p>
    </section>
  );
}
