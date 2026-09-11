import Link from 'next/link';
import NavLinks from "@/components/NavLinks";



export default function Header() {
  return (
    <header className="flex gap-8 flex-wrap justify-between items-center border-b-[color:var(--border)] p-8 border-b-2 border-solid">
      <h1 id="header-title" className="text-center text-2xl">Brandon Arroyo</h1>

      <NavLinks />
    </header>
  );
}