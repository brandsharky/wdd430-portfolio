"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";



export default function ProjectFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleFilter(type: string) {
    const params = new URLSearchParams(searchParams);

    params.set("page", "1");

    if (type) {
      params.set("type", type);
    } else {
      params.delete("type");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <select
      defaultValue={searchParams.get("type") || ""}
      onChange={(e) => handleFilter(e.target.value)}
    >
      <option value="">All Projects</option>
      <option value="school">School Projects</option>
      <option value="opensource">Open Source Projects</option>
    </select>
  );
}