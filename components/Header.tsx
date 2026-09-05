import Link from 'next/link';



export default function Header() {
  return (
    <header className="flex gap-8 flex-wrap justify-between items-center border-b-[color:var(--border)] p-8 border-b-2 border-solid">
      <h1 id="header-title" className="text-center text-2xl">Brandon Arroyo</h1>

      <nav>
        <ul className="flex flex-row flex-wrap gap-8">
          <li><Link href="/" className="block border-[color:var(--border)] px-6 py-3 rounded-3xl border-2 border-solid">Home</Link></li>
          <li><Link href="/about" className="block border-[color:var(--border)] px-6 py-3 rounded-3xl border-2 border-solid">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}