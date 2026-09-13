export const dynamic = "force-dynamic";
import React from "react";



export default async function SchoolPage() {
  // const response = await fetch("http://localhost:3000/api/projects?type=school");
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects?type=school`);
  const projects = await response.json();

  return (
    <main>
      <h1>School Projects</h1>

      {projects.map((project: { id: number; title: string; description: string; type: string }) => (
        <article key={project.id}>
          <h2>{project.id}: {project.title}</h2>
          <p>{project.description}</p>
        </article>
      ))}
    </main>
  );
}