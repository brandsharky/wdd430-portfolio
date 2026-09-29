import { neon } from '@neondatabase/serverless';



const sql = neon(process.env.POSTGRES_URL!);

export type User = {
  id: string;
  email: string;
  passwordHash: string;
  name: string;
};

export async function getUserByEmail(email: string): Promise<User | null> {
  const rows = await sql`
    SELECT
      id::text AS id,
      email,
      password_hash AS "passwordHash",
      name
    FROM users
    WHERE email = ${email}
    LIMIT 1
  `;

  return (rows[0] as unknown as User) ?? null;
}