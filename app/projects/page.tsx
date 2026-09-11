import React from "react";



export default async function ProjectsPage() {
  const response = await fetch("http://localhost:3000/api/projects");
  const projects = await response.json();

  return (
    <main>
      <h1>Projects Overview</h1>

      {projects.map((project: { id: number; name: string; description: string; type: string }) => (
        <article key={project.id}>
          <h2>{project.id}: {project.name}</h2>
          <p>{project.description}</p>
        </article>
      ))}
    </main>
  );
}