"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project } from "@/src/data/project-detail";

export default function ProjectDetailClient({
  project,
}: {
  project: Project;
}) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-muted-foreground max-w-2xl mb-14">
        {project.desc}
      </p>

      {/* Gallery */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {project.images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="cursor-zoom-in rounded-2xl overflow-hidden shadow"
            onClick={() => setActiveImage(img)}
          >
            <Image src={img} alt={project.title} width={600} height={400} />
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold">Tentang Project</h2>
          {project.longDesc.map((t, i) => (
            <p key={i} className="text-muted-foreground">{t}</p>
          ))}
        </div>

        <Card className="rounded-2xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {project.tech.map((t, i) => (
                <li key={i}>• {t}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Zoom */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setActiveImage(null)}
          >
            <motion.div className="relative max-w-5xl w-full px-6">
              <Button
                size="icon"
                variant="secondary"
                className="absolute top-4 right-4"
                onClick={() => setActiveImage(null)}
              >
                <X />
              </Button>
              <Image
                src={activeImage}
                alt="Zoom"
                width={1200}
                height={800}
                className="rounded-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
