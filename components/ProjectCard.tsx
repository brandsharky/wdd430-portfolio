interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}



export default function ProjectCard({title, description, technologies, link}: ProjectCardProps) {
  return (
    <article className="flex flex-col gap-4 border-[color:var(--border)] p-6 rounded-3xl border-2 border-solid bg-[color:var(--surface)]">
      <h2 className="text-2xl font-bold mb-2 text-[color:var(--text)]">{title}</h2>

      <p className="text-[color:var(--text-muted)] mb-3">{description}</p>

      <p className="text-sm text-[color:var(--text-muted)]">
        <strong>Technologies:</strong> {technologies.join(', ')}
      </p>

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className=" no-underline text-[color:var(--blue)] block py-2 hover:underline">View Project</a>
      )}
    </article>
  );
}