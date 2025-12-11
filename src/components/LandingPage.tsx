// src/components/LandingPage.tsx
"use client";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import ContactForm from "./ContactForm";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};


export default function LandingPage() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handler = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handler);
      return () => window.removeEventListener("scroll", handler);
    }, []);

    
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* NAV */}
      <motion.header
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "0 0 0 rgba(0,0,0,0)",
      }}
      className="w-full fixed top-0 z-50 backdrop-blur-xl transition-all"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-semibold text-black">Rasdi.dev</span>

        <ul className="flex gap-8 text-sm text-black/80">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </motion.header>


      <main className="pt-28">
        {/* HERO */}
        <section id="about" className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center py-20 bg-white">
          {/* Left: text */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="space-y-6"
          >
            <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m Rasdi — <span className="text-blue-600">Software Developer</span>
            </motion.h1>

            <motion.p variants={item} className="text-slate-700 max-w-xl">
              I build clean, fast, and accessible web applications using Next.js,
              TypeScript, and modern backend stacks. I enjoy turning complex ideas
              into simple, reliable products.
            </motion.p>

            <motion.div variants={item} className="flex gap-4">
              <Button as="a" href="#work">View Projects</Button>
              <Button as="a" href="#contact" variant="ghost">Contact</Button>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4 text-sm text-slate-600">
              <div>Based in Jakarta, Indonesia</div>
              <div>·</div>
              <div>Open to freelance & full-time</div>
            </motion.div>
          </motion.div>

          {/* Right: profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:justify-end"
          >
            <div className="w-full max-w-sm bg-white border rounded-2xl shadow-sm p-6 flex flex-col items-center">
              <div className="w-36 h-36 rounded-full overflow-hidden ring-1 ring-slate-100">
                <img
                  src="/profile.jpg"
                  alt="Rasdi profile"
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="mt-4 text-center">
                <div className="font-semibold text-lg">Rasdi</div>
                <div className="text-slate-500 text-sm mt-1">Frontend & Backend Developer</div>
              </div>

              <div className="mt-5 w-full text-center">
                <div className="text-sm text-slate-600">Tech highlights</div>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {["Next.js", "TypeScript", "Tailwind", "Java"].map((t) => (
                    <span key={t} className="text-xs px-3 py-1 bg-slate-100 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* PROJECTS (scroll reveal staggered) */}
        <section id="projects" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-6">Selected Projects</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "HR Portal", desc: "Employee portal, reports, and payroll." },
                { title: "E-commerce Qurban", desc: "Full ecommerce flow with payments." },
                { title: "Admin Dashboard", desc: "KPI dashboards and ETL." },
              ].map((p, i) => (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.45 }}
                  className="bg-white border rounded-lg p-5 shadow-sm"
                >
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {["Next.js","React","TypeScript","Tailwind","Java","PHP","MySQL","Docker"].map((s) => (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35 }}
                  className="p-3 rounded-lg border bg-white text-center text-sm"
                >
                  {s}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-slate-100">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Get in touch</h2>
              <p className="text-slate-700 mb-6">Available for freelance and full-time roles. Drop a message and I’ll reply shortly.</p>
              <ContactForm />
            </div>

            <aside className="text-sm text-slate-600">
              <div className="mb-4"><strong>Location</strong><div>Jakarta, Indonesia</div></div>
              <div className="mb-4"><strong>Email</strong><div>hello@rasdi.dev</div></div>
              <div><strong>Availability</strong><div>Remote / Hybrid</div></div>
            </aside>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-slate-600 bg-white">
        © {new Date().getFullYear()} Rasdi — All rights reserved.
      </footer>
    </div>
  );
}
