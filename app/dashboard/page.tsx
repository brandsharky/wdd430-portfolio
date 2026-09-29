import { auth } from '@/auth';
import { signOutAction } from '@/lib/actions';



export default async function DashboardPage() {
  const session = await auth();

  return (
    <main>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.name}!</p>
      <p>You are signed in.</p>

      <form action={signOutAction}>
        <button type="submit">
          Sign Out
        </button>
      </form>
    </main>
  );
}