import { sql } from "@vercel/postgres";
import { SearchParams } from "@/types/search";

export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'opensource' | 'school';
  technologies: string[];
  link?: string;
}



export async function getProjects(type?: string | null): Promise<Project[]> {
  if (type) {
    const { rows } = await sql<Project>`
      SELECT * FROM projects
      WHERE type = ${type}
      ORDER BY id
    `;
    return rows;
  }
  const { rows } = await sql<Project>`
    SELECT * FROM projects
    ORDER BY id`;
  return rows;
}


export async function getProjectById(id: number): Promise<Project | null> {
  const { rows } = await sql<Project>`
    SELECT * FROM projects
    WHERE id = ${id}
  `;
  return rows[0] ?? null;
}


const ITEMS_PER_PAGE = 6; // change to 2 to see pagination
export async function fetchFilteredProjects({ query = "", type = "", page = 1 }: SearchParams): Promise<Project[]> {
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const { rows } = await sql<Project>`
    SELECT * FROM projects
    WHERE
      (${type === ""} OR type = ${type})
      AND (
        title ILIKE ${`%${query}%`}
        OR description ILIKE ${`%${query}%`}
        OR EXISTS (
          SELECT 1
          FROM unnest(technologies) AS technology
          WHERE technology ILIKE ${`%${query}%`}
        )
      )
    ORDER BY id
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset}
  `;

  return rows;
}


export async function fetchProjectsPages({ query = "", type = "" }: SearchParams): Promise<number> {
  const { rows } = await sql<{ count: string }>`
    SELECT COUNT(*) AS count
    FROM projects
    WHERE
      (${type === ""} OR type = ${type})
      AND (
        title ILIKE ${`%${query}%`}
        OR description ILIKE ${`%${query}%`}
        OR EXISTS (
          SELECT 1
          FROM unnest(technologies) AS technology
          WHERE technology ILIKE ${`%${query}%`}
        )
      )
  `;

  const count = Number(rows[0]?.count ?? 0);

  return Math.ceil(count / ITEMS_PER_PAGE);
}