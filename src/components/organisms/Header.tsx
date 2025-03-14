import React, { HTMLAttributes, useEffect, useState } from 'react';
import Link from 'next/link';
import { classNames } from '@/utils/functions';
import { links } from '@/utils/constants';

const Header = ({ className, ...rest }: HTMLAttributes<HTMLHeadElement>) => {
  const [current, setCurrent] = useState<string>('');

  useEffect(() => {
    setCurrent(window.location.pathname);
    // eslint-disable-next-line
  }, [typeof window !== 'undefined' && window.location.href]);

  return (
    <header className={classNames('flex justify-between items-center', className)} {...rest}>
      <Link
        href="/"
        className={classNames('text-3xl font-bold hover:text-primary', current === '/' && ' text-primary')}
      >
        NEXT JS
      </Link>

      <nav>
        <ul className="flex flex-col gap-0 sm:flex-row sm:gap-5">
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
