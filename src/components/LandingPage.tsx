// src/components/LandingPage.tsx
"use client";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Button from "./ui/button";
import ThemeToggle from "./ThemeToggle";
import ContactForm from "./ContactForm";
import {projects} from "../data/projects"

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
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </motion.header>


      <main className="pt-28">
        {/* HERO */}
        <section
  id="about"
  className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center py-24 
             bg-gradient-to-b from-white via-slate-50 to-white"
>
  {/* Left: text */}
  <motion.div
    initial="hidden"
    animate="show"
    variants={container}
    className="space-y-7"
  >
    <motion.h1
      variants={item}
      className="text-4xl md:text-5xl font-bold leading-tight tracking-tight"
    >
      Rasdi Abdulrohman{" "}
      <span className="text-blue-600 bg-blue-50 px-2 py-1 rounded-xl">
        Software Developer
      </span>
    </motion.h1>

    <motion.p variants={item} className="text-slate-600 text-lg leading-relaxed">
      Software Developer with strong experience in designing, developing, and
      maintaining web applications. Skilled in backend engineering, API
      integration, and system optimization with expertise in PHP frameworks,
      Spring Boot, and modern frontend stacks like React.
    </motion.p>

    <motion.div variants={item} className="flex gap-4">
      <Button as="a" href="#projects">View Projects</Button>
      <a
  href="https://wa.me/6285717059061?text=Halo%20saya%20mau%20bertanya"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="ghost">Contact</Button>
</a>

    </motion.div>

    <motion.div
      variants={item}
      className="flex items-center gap-4 text-sm text-slate-500"
    >
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
    <div
      className="w-full max-w-sm rounded-3xl p-8 
                 bg-white/70 backdrop-blur-xl 
                 shadow-lg ring-1 ring-slate-200/50
                 hover:shadow-2xl transition-all duration-500"
    >
      <div className="flex flex-col items-center">
              <div
          className="w-56 h-56 rounded-full overflow-hidden 
                    shadow-lg ring-4 ring-white/70 transition-all duration-500"
        >
          <img
            src="/profile.jpeg"
            alt="Rasdi profile"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="mt-5 text-center">
          <h3 className="font-bold text-xl tracking-tight">Rasdi Abdulrohman</h3>
          <p className="text-slate-500 text-sm mt-1">
            Frontend & Backend Developer
          </p>
        </div>

        <div className="mt-6 w-full text-center">
          <p className="text-sm text-slate-600">Tech highlights</p>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {["Next.js", "TypeScript", "Tailwind", "Java"].map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full
                           bg-gradient-to-br from-slate-100 to-white
                           ring-1 ring-slate-200 shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
</section>


        {/* PROJECTS (scroll reveal staggered) */}
          <section id="projects" className="py-20 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-2xl font-semibold mb-6">Projects</h2>

              <div className="grid md:grid-cols-3 gap-6">
                {projects.map((p, i) => (
                  <motion.article
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.04, y: -4 }}
                    className="
                      bg-white/70 backdrop-blur-md 
                      border border-slate-200 
                      rounded-2xl p-6 
                      shadow-[0_3px_10px_rgb(0,0,0,0.05)] 
                      hover:shadow-lg 
                      hover:bg-white 
                      transition-all duration-300
                    "
                  >
                    <h3 className="font-semibold text-lg text-slate-800">
                      {p.title}
                    </h3>

                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {p.desc}
                    </p>

                    {/* Accent bar */}
                    <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

        {/* SKILLS */}
            <section id="skills" className="py-24 bg-gradient-to-b from-white via-slate-50/40 to-white">
              <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-10 tracking-tight text-slate-800">
                  Skills
                </h2>

                <div className="flex flex-wrap gap-4">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Java",
                    "PHP",
                    "MySQL",
                    "Docker",
                  ].map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      className="
                        px-6 py-2 
                        rounded-full 
                        bg-white/30 
                        backdrop-blur-xl 
                        border border-white/40 
                        shadow-sm hover:shadow-md 
                        hover:bg-white/40 
                        text-slate-700 font-medium 
                        transition-all duration-300 
                      "
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
