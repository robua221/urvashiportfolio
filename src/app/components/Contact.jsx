"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-20 py-20 bg-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg text-slate-700 max-w-2xl"
      >
        Feel free to reach out for collaborations, project inquiries, or
        professional opportunities.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6"
      >
        <p className="text-lg font-medium">📧 Email</p>
        <a
          href="mailto:urvashisharma7781@gmail.com"
          className="text-blue-600 underline hover:opacity-70"
        >
          urvashisharma.ca@gmail.com
        </a>

        <p className="text-lg font-medium mt-6">📍 Location</p>
        <p className="text-slate-700">Toronto, Ontario</p>
      </motion.div>
    </section>
  );
}
