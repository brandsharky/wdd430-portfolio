"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  isLoggedIn: boolean;
};



export default function NavLinks({ isLoggedIn }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="flex flex-row flex-wrap gap-8">
      <Link
        href="/"
        className={
          pathname === "/"
            ? "active"
            : "block border-(--border) px-6 py-3 rounded-3xl border-2 border-solid"
        }
        aria-current={pathname === "/" ? "page" : undefined}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={
          pathname === "/about"
            ? "active"
            : "block border-(--border) px-6 py-3 rounded-3xl border-2 border-solid"
        }
        aria-current={pathname === "/about" ? "page" : undefined}
      >
        About
      </Link>

      <Link
        href="/projects"
        className={
          pathname === "/projects"
            ? "active"
            : "block border-(--border) px-6 py-3 rounded-3xl border-2 border-solid"
        }
        aria-current={pathname === "/projects" ? "page" : undefined}
      >
        Projects
      </Link>

      <Link
        href="/contact"
        className={
          pathname === "/contact"
            ? "active"
            : "block border-(--border) px-6 py-3 rounded-3xl border-2 border-solid"
        }
        aria-current={pathname === "/contact" ? "page" : undefined}
      >
        Contact
      </Link>

      {isLoggedIn ? (
        <Link
          href="/dashboard"
          className={
            pathname.startsWith("/dashboard")
              ? "active"
              : "block border-(--border) px-6 py-3 rounded-3xl border-2 border-solid"
          }
          aria-current={
            pathname.startsWith("/dashboard") ? "page" : undefined
          }
        >
          Dashboard
        </Link>
      ) : (
        <Link
          href="/login"
          className={
            pathname === "/login"
              ? "active"
              : "block border-(--border) px-6 py-3 rounded-3xl border-2 border-solid"
          }
          aria-current={pathname === "/login" ? "page" : undefined}
        >
          Login
        </Link>
      )}
    </nav>
  );
}