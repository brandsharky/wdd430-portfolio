export const dynamic = "force-dynamic";

import ProjectSearch from "./ProjectSearch";
import {
  fetchFilteredProjects,
  fetchProjectsPages
} from "@/lib/projects-db";
import Pagination from "./Pagination";



export default async function ProjectsPage(props: { searchParams?: Promise<{ query?: string; page?: string }>; }) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query || "";
  const requestedPage = Number(searchParams?.page) || 1;
  const currentPage = Math.max(1, requestedPage);
  const projects = await fetchFilteredProjects(query, currentPage);
  const totalPages = await fetchProjectsPages(query);

  return (
    <main>
      <h1>Projects Overview</h1>

      <ProjectSearch />

      {projects.map((project: { id: number; title: string; description: string; type: string }) => (
        <article key={project.id}>
          <h2>{project.id}: {project.title}</h2>
          <p>{project.description}</p>
        </article>
      ))}

      <Pagination totalPages={totalPages}/>
    </main>
  );
}