"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.9)"
          : "rgba(255,255,255,0)",
        boxShadow: scrolled
          ? "0 2px 20px rgba(0,0,0,0.1)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
      className="w-full fixed top-0 z-50 backdrop-blur-xl transition-all"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-semibold text-black">
          Rasdi.dev
        </Link>

        <ul className="flex gap-8 text-sm text-black/80">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/#skills">Skills</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
      </nav>
    </motion.header>
  );
}
