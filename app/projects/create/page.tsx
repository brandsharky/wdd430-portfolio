import { createProject } from '@/lib/actions';



export default function CreateProjectPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Create Project</h1>

      <form action={createProject} className="mt-6 space-y-4">
        <div>
          <label htmlFor="title" className="block font-semibold">
            Title
          </label>
          <input
            id="title"
            name="title"
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
            required
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded-lg border px-4 py-2 font-semibold"
        >
          Save Project
        </button>
      </form>
    </section>
  );
}