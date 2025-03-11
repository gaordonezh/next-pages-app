import { GetServerSidePropsContext, PreviewData } from 'next';
import { Repo } from '../routing';
import { ParsedUrlQuery } from 'querystring';
import Typography from '@/components/atoms/Typography';

const RenderingPage = ({ repo }: { repo: Repo }) => {
  console.log('repo');

  return (
    <div>
      <Typography is="h1">{repo.name.toUpperCase()}</Typography>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, cum harum! Harum libero neque illo tempora. Asperiores vero iusto dolorem
      velit, iure repudiandae magnam molestias, harum est, voluptatibus beatae id!
    </div>
  );
};

export default RenderingPage;

export const getServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  // Fetch data from external API
  context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
  console.log('context');
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo: Repo = await res.json();
  // Pass data to the page via props
  return { props: { repo } };
};

// export async function getServerSideProps(context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) {
//   context.res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
//   console.log('context');
//   return {
//     props: {},
//   };
// }

// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
