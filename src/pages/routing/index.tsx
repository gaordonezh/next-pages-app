import React from 'react';
import type { GetStaticPropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';

export type Repo = {
  name: string;
  stargazers_count: number;
};

const RoutingPage = ({ repo }: { repo: Repo }) => {
  console.log(repo);
  return <div>RoutingPage</div>;
};

export default RoutingPage;

export async function getStaticProps(context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return {
    props: {
      repo,
    },
  };
}
