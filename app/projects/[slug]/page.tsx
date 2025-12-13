"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [
  "/project/project1/1.png",
  "/project/project1/2.png",
  "/project/project1/3.png",
];

export default function ProjectDetailPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-14"
      >
        <h1 className="text-4xl font-bold mb-4">Qurban Online Platform</h1>
        <p className="text-muted-foreground max-w-2xl">
          Platform digital untuk pengelolaan qurban secara online mulai dari
          pendaftaran, pembayaran, hingga laporan distribusi.
        </p>
      </motion.div>

      {/* Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="cursor-zoom-in overflow-hidden rounded-2xl shadow"
            onClick={() => setActiveImage(img)}
          >
            <Image
              src={img}
              alt={`Project image ${i + 1}`}
              width={600}
              height={400}
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-3 gap-10">
        {/* Description */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold">Tentang Project</h2>
          <p className="text-muted-foreground leading-relaxed">
            Project ini dibuat untuk mempermudah masyarakat dalam melakukan
            ibadah qurban secara transparan dan terintegrasi. Sistem mendukung
            manajemen data peserta, hewan qurban, proses pembayaran, hingga
            laporan realisasi.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Fokus utama pengembangan adalah kemudahan penggunaan (UX), keamanan
            data, dan skalabilitas sistem agar dapat digunakan oleh banyak
            pengguna secara bersamaan.
          </p>
        </div>

        {/* Tech Stack */}
        <Card className="rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Tech Stack</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Next.js (App Router)</li>
              <li>• React + TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Framer Motion</li>
              <li>• REST API (Backend Integration)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl w-full px-6"
            >
              <Button
                size="icon"
                variant="secondary"
                className="absolute top-4 right-4 z-50"
              >
                <X />
              </Button>
              <Image
                src={activeImage}
                alt="Zoomed project image"
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
