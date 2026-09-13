export const dynamic = "force-dynamic";
import React from "react";



export default async function ProjectsPage() {
  // const response = await fetch("http://localhost:3000/api/projects");
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`);
  const projects = await response.json();

  return (
    <main>
      <h1>Projects Overview</h1>

      {projects.map((project: { id: number; title: string; description: string; type: string }) => (
        <article key={project.id}>
          <h2>{project.id}: {project.title}</h2>
          <p>{project.description}</p>
        </article>
      ))}
    </main>
  );
}