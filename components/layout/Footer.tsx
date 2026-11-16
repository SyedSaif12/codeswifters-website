'use client';

import { ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useSyncExternalStore } from 'react';
import { Logo } from '@/components/ui/Logo';
import { navLinks, serviceLinks, site } from '@/lib/site';

const noopSubscribe = () => () => {};

const col = 'font-mono text-xs uppercase tracking-widest text-muted';
const link =
  'block border-b border-line py-2.5 text-sm text-foreground transition-colors hover:bg-brand-purple hover:px-3 hover:text-white';

/**
 * Site footer: permanently dark (the `dark` class re-scopes the theme tokens, so it ignores the light toggle), hairline rules, mono labels, hover-flood links and
 * an edge-to-edge wordmark in the hairline tone. Matches the header.
 */
export function Footer() {
  // Server snapshot keeps the static prerender clock-free; the client
  // snapshot returns the live year after hydration.
  const year = useSyncExternalStore(
    noopSubscribe,
    () => new Date().getFullYear(),
    () => 2026,
  );

  return (
    <footer className='dark overflow-hidden border-t border-line bg-card text-foreground [--muted:#cbd5e1]'>
      <div className='px-4 sm:px-6 lg:px-10'>
        <div className='grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10'>
          <div className='sm:col-span-2 lg:col-span-5'>
            <Link
              href='/'
              aria-label='CodeSwifters home'
              className='inline-block'
            >
              <Logo onDark />
            </Link>
            <p className='mt-6 max-w-sm text-sm leading-relaxed text-muted'>
              Custom software, web platforms, mobile apps and AI features, built
              by 25+ senior engineers in Milton, CA and Karachi, PK.
            </p>
            <a
              href={`mailto:${site.email}`}
              className='mt-8 block break-words text-3xl font-semibold tracking-tighter hover:text-brand-violet sm:text-4xl'
            >
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className='mt-2 block text-sm text-muted hover:text-brand-violet'
            >
              {site.phone}
            </a>
          </div>

          <div className='lg:col-span-3 lg:col-start-7'>
            <h3 className={col}>Services</h3>
            <ul className='mt-4 border-t border-line'>
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={link}>
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href='/services' className={link}>
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div className='lg:col-span-3'>
            <h3 className={col}>Company</h3>
            <ul className='mt-4 border-t border-line'>
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className={`${col} mt-8`}>Offices</h3>
            <ul className='mt-4 space-y-3 border-t border-line pt-3 text-sm text-muted'>
              {site.offices.map((o) => (
                <li key={o.country}>
                  <span className='block font-medium text-foreground'>
                    {o.country === 'Canada' ? 'Milton, CA' : 'Karachi, PK'}
                  </span>
                  {o.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='flex flex-col justify-between gap-4 border-t border-line py-6 font-mono text-xs text-muted sm:flex-row sm:items-center'>
          <p>© {year} CodeSwifters. All rights reserved.</p>
          <div className='flex flex-wrap items-center gap-x-6 gap-y-3'>
            <ul className='flex gap-6'>
              {site.socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noreferrer'
                    className='underline-offset-4 hover:text-brand-violet hover:underline'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type='button'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='inline-flex items-center gap-2 border border-line px-3 py-2 font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background'
            >
              Back to top <ArrowUp className='h-3.5 w-3.5' />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge wordmark in the hairline tone, cropped by the page edge */}
      <p
        aria-hidden
        className='select-none whitespace-nowrap text-center text-[14.5vw] font-semibold leading-[0.78] tracking-tighter text-line'
      >
        CodeSwifters
      </p>
    </footer>
  );
}
