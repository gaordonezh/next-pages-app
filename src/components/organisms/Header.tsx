import React, { HTMLAttributes, useEffect, useState } from 'react';
import Link from 'next/link';
import { classNames } from '@/utils/functions';

const links = [
  { label: 'Enrutamiento', path: '/routing' },
  { label: 'Renderizado', path: '/rendering' },
  { label: 'Obtención de datos', path: '/data-fetching' },
  { label: 'Optimizaciones', path: '/optimization' },
];

const Header = ({ className, ...rest }: HTMLAttributes<HTMLHeadElement>) => {
  const [current, setCurrent] = useState<string>('');

  useEffect(() => {
    setCurrent(window.location.pathname);
  }, [typeof window !== 'undefined' && window.location.href]);

  return (
    <header className={classNames('flex justify-between items-center', className)} {...rest}>
      <Link href="/" className={classNames('text-3xl font-bold hover:text-primary', current === '/' && ' text-primary')}>
        NEXT JS
      </Link>

      <nav>
        <ul className="flex gap-5">
          {links.map(({ label, path }) => (
            <li key={path}>
              <Link className={classNames('hover:text-primary', current === path && 'text-primary')} href={path}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
