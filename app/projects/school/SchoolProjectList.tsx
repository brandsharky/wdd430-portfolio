export default async function SchoolProjectList() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects?type=school`);
  // await new Promise((res) => setTimeout(res, 2000)); // add a 2 second delay so skeleton is visible
  const projects = await response.json();

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