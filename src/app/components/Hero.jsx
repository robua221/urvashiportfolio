"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 bg-gradient-to-br from-white to-slate-100 pt-28 md:pt-32">
      {/* LEFT SIDE – TEXT */}
      <div className="flex-1">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm uppercase tracking-widest text-slate-500"
        >
          Construction Project Management • Digital Product Management • Project
          Coordination • Architecture
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-bold mt-3"
        >
          Urvashi Sharma
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-lg text-slate-600 mt-5"
        >
          Licensed Architect and Project Coordinator with experience in
          commercial complexes, luxury residences, and township design.
          Currently expanding expertise in Construction Management and Digital
          Product workflows in Toronto.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex gap-4 mt-10"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-slate-800 transition"
          >
            View Projects
          </a>

          <a
            href="/Urvashi_Sharma_Resume.pdf"
            download
            className="px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* RIGHT SIDE – PROFILE PHOTO */}
      <motion.img
        src="/profile.png" // Make sure this file is in public/profile.jpg
        alt="Urvashi Sharma"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl shadow-xl border border-slate-200 mt-10 md:mt-0"
      />
    </section>
  );
}
