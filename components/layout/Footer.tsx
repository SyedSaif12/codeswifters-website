'use client';

import { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { Reveal } from '@/components/ui/Reveal';
import { serviceLinks, site } from '@/lib/site';

const company = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Contact Us', href: '/contact-us' },
];

const noopSubscribe = () => () => {};

/** Footer link: arrow slides in from the left on hover. */
function FootLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className='group inline-flex items-center gap-2 py-1 text-base text-white/80 hover:text-white'
    >
      <ArrowUpRight
        aria-hidden
        className='-ml-6 h-4 w-4 opacity-0 transition-all duration-200 group-hover:ml-0 group-hover:opacity-100'
      />
      <span className='-ml-0 transition-transform duration-200'>
        {children}
      </span>
    </Link>
  );
}

/**
 * Solid midnight footer: oversized call to action, a 4 / 3 / 2 / 3 link grid
 * with raw dividers, and an edge-to-edge wordmark cropped at the bottom.
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
    <footer className='overflow-hidden bg-brand-midnight text-white'>
      <div className='px-4 sm:px-6 lg:px-10'>
        {/* Call to action */}
        {/* <Reveal className="grid gap-12 border-b border-white/25 pb-16 pt-24 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-32">
          <div className="lg:col-span-8">
            <p className="text-xs font-medium uppercase tracking-widest text-white/70">
              Have a product to build?
            </p>
            <h2 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl">
              Let&rsquo;s build it together.
            </h2>
          </div>
          <div className="flex flex-col items-start justify-end gap-6 lg:col-span-4">
            <ButtonLink
              href="/contact-us"
              variant="light"
              size="lg"
              className="bg-white text-brand-midnight hover:bg-brand-purple hover:text-white"
            >
              Book a free strategy call <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
            <a
              href={`mailto:${site.email}`}
              className="break-all text-xl font-medium tracking-tight underline decoration-2 underline-offset-8 hover:decoration-white/50 sm:text-2xl"
            >
              {site.email}
            </a>
          </div>
        </Reveal> */}

        {/* Link grid */}
        <div className='grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16'>
          <div className='sm:col-span-2 lg:col-span-4'>
            <Link
              href='/'
              aria-label='CodeSwifters home'
              className='inline-block'
            >
              <Logo onDark />
            </Link>
            <p className='mt-5 max-w-xs text-sm leading-relaxed text-white/75'>
              Custom software, web platforms, mobile apps and AI features, built
              by a senior team in Milton and Karachi.
            </p>
            <a
              href={site.phoneHref}
              className='mt-6 inline-block text-lg font-medium hover:text-white/70'
            >
              {site.phone}
            </a>
          </div>

          <div className='lg:col-span-3'>
            <h3 className='text-xs font-medium uppercase tracking-widest text-white/60'>
              Services
            </h3>
            <ul className='mt-4'>
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <FootLink href={l.href}>{l.label}</FootLink>
                </li>
              ))}
              <li>
                <FootLink href='/services'>All Services</FootLink>
              </li>
            </ul>
          </div>

          <div className='lg:col-span-2'>
            <h3 className='text-xs font-medium uppercase tracking-widest text-white/60'>
              Company
            </h3>
            <ul className='mt-4'>
              {company.map((l) => (
                <li key={l.href}>
                  <FootLink href={l.href}>{l.label}</FootLink>
                </li>
              ))}
            </ul>
          </div>

          <div className='sm:col-span-2 lg:col-span-3'>
            <h3 className='text-xs font-medium uppercase tracking-widest text-white/60'>
              Offices
            </h3>
            <ul className='mt-4 space-y-5 text-sm leading-relaxed text-white/80'>
              {site.offices.map((o) => (
                <li key={o.country}>
                  <span className='block text-base font-medium text-white'>
                    {o.country}
                  </span>
                  {o.address}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className='flex flex-col justify-between gap-5 border-t border-white/25 py-6 text-xs text-white/70 sm:flex-row sm:items-center'>
          <p>© {year} CodeSwifters. All rights reserved.</p>
          <div className='flex flex-wrap items-center gap-x-6 gap-y-3'>
            <ul className='flex gap-6'>
              {site.socials.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noreferrer'
                    className='underline-offset-4 hover:text-white hover:underline'
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type='button'
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className='inline-flex items-center gap-2 border border-white/30 px-3 py-2 font-medium hover:border-white hover:bg-white hover:text-brand-midnight'
            >
              Back to top <ArrowUp className='h-3.5 w-3.5' />
            </button>
          </div>
        </div>
      </div>

      {/* Edge-to-edge wordmark, solid brand purple, cropped by the page edge */}
      <p
        aria-hidden
        className='mt-4 select-none whitespace-nowrap text-center text-[14.5vw] font-semibold leading-[0.78] tracking-tighter text-brand-purple'
      >
        CodeSwifters
      </p>
    </footer>
  );
}
