import CreateProjectForm from './create-project-form';
import type { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Create',
};


export default function CreateProjectPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Create Project</h1>

      <CreateProjectForm />
    </section>
  );
}