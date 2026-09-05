export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 text-[0.9rem] text-center text-[color:var(--text-muted)] border-t-[color:var(--border)] px-8 py-12 border-t-2 border-solid">
      <p>&copy; <span className="text-[color:var(--blue)]">{new Date().getFullYear()}</span> Brandon Arroyo</p>

      <p>Built with <span className="text-[color:var(--blue)]">Next.js</span>, <span className="text-[color:var(--blue)]">React.js</span>, and <span className="text-[color:var(--blue)]">Tailwind CSS</span></p>
    </footer>
  );
}