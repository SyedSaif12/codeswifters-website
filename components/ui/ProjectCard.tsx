'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import type { Project } from '@/lib/projects';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/our-work/${project.slug}`}
      className='group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-glow'
    >
      <Card className='flex h-full flex-col overflow-hidden'>
        <div className='relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-violet/10 via-card to-card'>
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes='(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw'
            className='object-contain p-3 transition-transform duration-500 group-hover:scale-105'
          />
        </div>
        <div className='flex flex-1 flex-col p-6'>
          <div className='flex items-center justify-between gap-3'>
            <Badge tone='violet'>{project.category}</Badge>
            <ArrowUpRight className='h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent' />
          </div>
          <h3 className='mt-4 text-xl font-semibold text-foreground'>
            {project.name}
          </h3>
          <p className='mt-2 flex-1 text-sm leading-relaxed text-muted'>
            {project.summary}
          </p>
          <div className='mt-5 flex flex-wrap gap-2'>
            {project.tags.slice(0, 3).map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
