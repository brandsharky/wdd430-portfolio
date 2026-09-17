export const dynamic = "force-dynamic";
import React from "react";



export default async function OpenSourcePage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects?type=opensource`);
  // await new Promise(res => setTimeout(res, 2000)); // add a 2 second delay so skeleton is visible
  const projects = await response.json();

  return (
    <main>
      <h1>Open Source Projects</h1>

      {projects.map((project: { id: number; title: string; description: string; type: string }) => (
        <article key={project.id}>
          <h2>{project.id}: {project.title}</h2>
          <p>{project.description}</p>
        </article>
      ))}
    </main>
  );
}