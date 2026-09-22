import { fetchFilteredProjects } from "@/lib/projects-db";



export default async function SchoolProjectList() {
  const projects = await fetchFilteredProjects({
    query: "",
    type: "school",
    page: 1,
  });

  return (
    <>
      {projects.map(
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
      )}
    </>
  );
}