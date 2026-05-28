"use client";

export default function Navbar() {
  return (
    <nav className="fade-mask fixed top-0 left-0 w-full z-50 px-10 py-8 flex justify-between items-center">
      
      <h1 className="text-sm uppercase tracking-[0.4em] text-zinc-300">
        SOMYA AGRAWAL
      </h1>

      <div className="flex items-center gap-10 text-sm text-zinc-500">
        <a
          href="#"
          className="hover:text-white transition-all duration-300"
        >
          Projects
        </a>

        <a
          href="#"
          className="hover:text-white transition-all duration-300"
        >
          About
        </a>

        <a
          href="#"
          className="hover:text-white transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}