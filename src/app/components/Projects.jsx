"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Magnum Maya Garden",
    desc: "A luxury commercial complex inspired by European classical architecture using Corinthian columns & refined façade elements.",
    image: "/projects/project1.png",
    tag: "Commercial",
  },
  {
    title: "Cascade House",
    desc: "A modern residence blending contemporary and traditional design, crafted for nature-connected living.",
    image: "/projects/project2.png",
    tag: "Residential",
  },
  {
    title: "Riverdale Aerovista",
    desc: "Interior design + visualization for a large township offering Modern & Classical interior options.",
    image: "/projects/project3.png",
    tag: "Township",
  },
  {
    title: "Elysian Cove – Juhu Apartment",
    desc: "High-end residential interiors featuring sculptural forms and refined material detailing.",
    image: "/projects/project4.png",
    tag: "Interior",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-20 bg-white">
      <h2 className="text-4xl font-bold mb-12">Selected Works</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden bg-white"
          >
            <div
              className="h-52 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${p.image})` }}
            />

            <div className="p-5">
              <span className="text-xs bg-black text-white px-3 py-1 rounded-full">
                {p.tag}
              </span>

              <h3 className="text-xl font-semibold mt-4">{p.title}</h3>

              <p className="text-slate-600 text-sm mt-2">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
