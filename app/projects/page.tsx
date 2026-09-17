export const dynamic = "force-dynamic";

import ProjectSearch from "./ProjectSearch";
import {
  fetchFilteredProjects,
  fetchProjectsPages
} from "@/lib/projects-db";
import Pagination from "./Pagination";
import ProjectFilter from "./ProjectFilter";
// import { SearchParams } from "@/types/search";



export default async function ProjectsPage(props: { searchParams?: Promise<{ query?: string; type?: string; page?: string }>; }) {
  const searchParams = await props.searchParams;

  const query = searchParams?.query || "";
  const type = searchParams?.type || "";
  const requestedPage = Number(searchParams?.page) || 1;
  const currentPage = Math.max(1, requestedPage);
  const projects = await fetchFilteredProjects({query,type,page: currentPage,});
  const totalPages = await fetchProjectsPages({query,type,});

  return (
    <main>
      <h1>Projects Overview</h1>

      <ProjectSearch />
      <ProjectFilter />

      {projects.length === 0 ? (
        <div>
          <h2>No projects found</h2>
          <p>
            We couldn't find any projects matching "{query}".
            Try using a different search term.
          </p>
        </div>
      ) : (
        projects.map(
          (project: {
            id: number;
            title: string;
            description: string;
            type: string;
          }) => (
            <article key={project.id}>
              <h2>
                {project.id}: {project.title}
              </h2>
              <p>{project.description}</p>
            </article>
          )
        )
      )}

      <Pagination totalPages={totalPages}/>
    </main>
  );
}