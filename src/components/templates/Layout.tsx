import Head from 'next/head';
import React, { ReactNode } from 'react';
import Header from '@/components/organisms/Header';
import { classNames } from '@/utils/functions';

interface LayoutProps {
  children: ReactNode;
}

const containerClassnames = 'max-w-7xl mx-auto px-10 ';

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>NEXT APP WITH PAGES ROUTER</title>
        <meta name="title" content="NEXT APP WITH PAGES ROUTER" />
        <meta name="description" content="Next app with pages router description" />
        <meta name="keywords" content="next, next app, pages router" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* <link data-default-icon={imagePath} rel="icon" sizes="192x192" href={imagePath} /> */}
        {/* <link rel="canonical" href={realURL} /> */}
        <meta charSet="utf-8" />

        {/* TWITTER TAGS - START */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@drivee" />
        <meta name="twitter:maxage" content="86400" />
        {/* <meta name="twitter:image" content={imagePath} /> */}
        <meta name="twitter:title" content="NEXT APP WITH PAGES ROUTER" />
        <meta name="twitter:description" content="Next app with pages router description" />
        {/* TWITTER TAGS - END */}

        {/* OG TAGS - START */}
        <meta property="og:title" content="NEXT APP WITH PAGES ROUTER" />
        <meta property="og:site_name" content="Biomedical HT" />
        <meta property="og:type" content="page" />
        {/* <meta property="og:image" content={imagePath} /> */}
        {/* <meta property="og:url" content={realURL} /> */}
        <meta property="og:description" content="Next app with pages router description" />
        {/* OG TAGS - END */}
      </Head>

      <Header className={classNames(containerClassnames, 'py-7')} />

      <main className={containerClassnames}>{children}</main>
    </>
  );
};

export default Layout;
