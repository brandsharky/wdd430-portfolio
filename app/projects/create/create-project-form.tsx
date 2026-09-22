'use client';

import { useActionState } from 'react';
import { createProject, type State } from '@/lib/actions';

const initialState: State = {
  message: null,
  errors: {},
};



export default function CreateProjectForm() {
  const [state, formAction, isPending] = useActionState(
    createProject,
    initialState
  );

  return (
    <form action={formAction} className="mt-6 space-y-4">
      <div>
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>

        <input
          id="title"
          name="title"
          type="text"
          required
          aria-describedby="title-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div id="title-error" aria-live="polite" aria-atomic="true">
          {state.errors?.title?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>

        <textarea
          id="description"
          name="description"
          required
          aria-describedby="description-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div id="description-error" aria-live="polite" aria-atomic="true">
          {state.errors?.description?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="technologies" className="block font-semibold">
          Technologies (comma-separated)
        </label>

        <input
          id="technologies"
          name="technologies"
          type="text"
          required
          aria-describedby="technologies-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div id="technologies-error" aria-live="polite" aria-atomic="true">
          {state.errors?.technologies?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="yearCompleted" className="block font-semibold">
          Year Completed
        </label>

        <input
          id="yearCompleted"
          name="yearCompleted"
          type="number"
          required
          aria-describedby="yearCompleted-error"
          className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div id="yearCompleted-error" aria-live="polite" aria-atomic="true">
          {state.errors?.yearCompleted?.map((error) => (
            <p key={error} className="mt-1 text-sm text-red-600">
              {error}
            </p>
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="rounded-lg border px-4 py-2 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? 'Saving...' : 'Save Project'}
      </button>

      {state.message && (
        <p className="text-sm text-red-600" aria-live="polite">
          {state.message}
        </p>
      )}
    </form>
  );
}


