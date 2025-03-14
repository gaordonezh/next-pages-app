import Head from 'next/head';
import React, { ReactNode } from 'react';
import Header from '@/components/organisms/Header';
import { classNames } from '@/utils/functions';
import { useRouter } from 'next/router';
import { AppTitle } from '@/utils/constants';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  image?: string;
  description?: string;
}

const containerClassnames = 'max-w-6xl mx-auto px-10 ';

const Layout = ({ children, ...rest }: LayoutProps) => {
  const router = useRouter();

  const realURL = `https://drivee.aldo.codes${router.pathname}`;
  const title = rest.title ?? 'Next JS';
  const description = rest.description ?? AppTitle;
  const image = rest.image ?? 'https://logowik.com/content/uploads/images/nextjs2106.logowik.com.webp';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content="next, next app, pages router" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link data-default-icon={image} rel="icon" sizes="192x192" href={image} />
        <link rel="canonical" href={realURL} />
        <meta charSet="utf-8" />

        {/* TWITTER TAGS - START */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@drivee" />
        <meta name="twitter:maxage" content="86400" />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {/* TWITTER TAGS - END */}

        {/* OG TAGS - START */}
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:type" content="page" />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={realURL} />
        <meta property="og:description" content={description} />
        {/* OG TAGS - END */}
      </Head>

      <Header className={classNames(containerClassnames, 'py-7')} />

      <main className={containerClassnames}>{children}</main>
    </>
  );
};

export default Layout;
