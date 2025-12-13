import { notFound } from "next/navigation";
import { projects } from "@/src/data/project-detail";
import ProjectDetailClient from "./ProjectDetailClient";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(p => p.slug === slug);
  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}