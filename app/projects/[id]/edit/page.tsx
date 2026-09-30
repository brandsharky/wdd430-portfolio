import { getProjectById } from '@/lib/projects-db';
import { updateProject } from '@/lib/actions';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';



export async function generateMetadata({params,}: {params: Promise<{ id: string }>;}): Promise<Metadata> {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  if (!project) {
    return {
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
    };
  }

  return {
    title: `Edit ${project.title}`,
    description: `Edit the ${project.title} project.`,
  };
}


export default async function EditProjectPage({params,}: {params: Promise<{ id: string }>;}) {
  const { id } = await params;
  const project = await getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <section>
      <h1 className="text-3xl font-bold">Edit Project</h1>

      <form
        action={updateProject.bind(null, id)}
        className="mt-6 space-y-4"
      >
        <div>
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            id="title"
            name="title"
            defaultValue={project.title}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-semibold">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={project.description}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
          />
        </div>

        <div>
          <label htmlFor="technologies" className="block font-semibold">
            Technologies (comma-separated)
          </label>
          <input
            id="technologies"
            name="technologies"
            defaultValue={project.technologies.join(', ')}
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg border px-4 py-2 font-semibold"
        >
          Save Changes
        </button>
      </form>
    </section>
  );
}