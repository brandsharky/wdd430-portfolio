// export const dynamic = "force-dynamic";
// import React from "react";
import { Suspense } from "react";
import SchoolProjectList from './SchoolProjectList';



export default function SchoolPage() {
  return (
    <main>
      <h1>School Projects</h1>

      <Suspense
        fallback={
          <div className="animate-pulse space-y-4">
            <div className="h-32 rounded-xl bg-slate-200" />
          </div>
        }
      >
        <SchoolProjectList />
      </Suspense>
    </main>
  );
}