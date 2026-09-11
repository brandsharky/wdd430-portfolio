export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}


export const projects: Project[] = [
  {
    id: 1,
    title: 'Telematrix',
    description: 'A modern web application that allows users to explore recommended shows without any modern-day clutter.',
    type: 'opensource',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSON', 'API'],
    link: 'https://brandsharky.github.io/telematrix/'
  },
  {
    id: 2,
    title: 'Flappy Bird Remake',
    description: 'A Python-based Flappy Bird clone built to practice game logic, physics, and input handling.',
    type: 'opensource',
    technologies: ['Python', 'Pygame'],
    link: 'https://github.com/brandsharky/FlappyBird'
  }
];


export function getProjects(type?: string | null): Project[] {
  if (type) return projects.filter((p) => p.type === type);
  return projects;
}


export function getProjectById(id: number): Project | null {
  return projects.find((p) => p.id === id) ?? null;
}