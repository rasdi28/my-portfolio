export type Project = {
    slug: string;
    title: string;
    desc: string;
    longDesc: string[];
    images: string[];
    tech: string[];
  };
  
  export const projects: Project[] = [
    {
      slug: "qurban-online",
      title: "Qurban Online Platform",
      desc: "Platform digital pengelolaan qurban secara online.",
      longDesc: [
        "Platform ini dibuat untuk mempermudah masyarakat dalam melakukan ibadah qurban secara transparan dan terintegrasi.",
        "Sistem mendukung manajemen data peserta, hewan qurban, pembayaran, hingga laporan realisasi."
      ],
      images: [
        "/project/project1/1.png",
        "/project/project1/2.png",
        "/project/project1/3.png"
      ],
      tech: [
        "Next.js (App Router)",
        "React + TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "REST API"
      ]
    },
  
    {
      slug: "portfolio-website",
      title: "Personal Portfolio Website",
      desc: "Website portfolio modern & responsive.",
      longDesc: [
        "Website portfolio untuk menampilkan profil, project, dan kontak.",
        "Dibangun dengan fokus pada performa, UX, dan animasi halus."
      ],
      images: [
        "/project/project2/1.png",
        "/project/project2/2.png"
      ],
      tech: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion"
      ]
    }
  ];
  