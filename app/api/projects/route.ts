import { NextRequest, NextResponse } from 'next/server';
import { projects } from '@/lib/projects-db';



export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  if (type === 'opensource' || type === 'school') {
    return NextResponse.json(projects.filter((project) => project.type === type));
  }

  return NextResponse.json(projects);
}