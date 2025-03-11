import React from 'react';
import type { GetStaticPropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Repo } from '../routing';

const StaticPathsPage = ({ repo }: { repo: Repo }) => {
  console.log('repo', repo);
  return (
    <div className={`items-center justify-items-center py-10`}>
      <h1>
        data with <code>getStaticPaths</code>
      </h1>
      <p>Name: {repo?.name ?? 'OTHER'}</p>
      <p>Name: {repo?.stargazers_count ?? 'OTHER'}</p>
    </div>
  );
};

export default StaticPathsPage;

export const getStaticPaths = async () => {
  const paths = Array.from(Array(2).keys()).map((item) => ({
    params: {
      code: `next${item + 1}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return {
    props: {
      repo,
    },
  };
};
