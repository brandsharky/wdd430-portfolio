import ProjectList from "@/components/ProjectList";
const projects = [
  {
    title: 'Telematrix',
    description: 'A modern web application that allows users to explore recommended shows without any modern-day clutter.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSON', 'API'],
    link: 'https://brandsharky.github.io/telematrix/'
  },
  {
    title: 'Flappy Bird Remake',
    description: 'A Python-based Flappy Bird clone built to practice game logic, physics, and input handling.',
    technologies: ['Python', 'Pygame'],
    link: 'https://github.com/brandsharky/FlappyBird'
  }
];



export default function Home() {
  return (
    <main className="flex-1 container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>

        <p className="text-lg text-blue-300">
          I'm a full-stack developer learning Next.js, React, and Tailwind CSS. Here are some of my recent projects.
        </p>
      </section>

      <ProjectList projects={projects} />
    </main>
  );
}