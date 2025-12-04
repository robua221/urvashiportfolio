"use client";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-20 py-5 border-b border-slate-200 bg-white backdrop-blur-md fixed top-0 left-0 z-50">
      <span className="font-semibold text-xl tracking-wide">
        Urvashi Sharma
      </span>

      <div className="flex gap-6 text-sm text-slate-600">
        <a href="#projects" className="hover:text-black transition">
          Projects
        </a>
        <a
          href="/Urvashi_Sharma_Resume.pdf"
          download
          className="hover:text-black transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
