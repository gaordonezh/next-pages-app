import React from 'react';
import type { GetStaticPropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { BlogProps } from '@/interfaces/global';
import Layout from '@/components/templates/Layout';
import Typography from '@/components/atoms/Typography';

interface BlogDetailsPageProps {
  blog: BlogProps;
}

const BlogDetailsPage = ({ blog }: BlogDetailsPageProps) => {
  return (
    <Layout title={blog.title} description={blog.body}>
      <div className="mt-24 max-w-96 text-center mx-auto">
        <Typography is="h4" className="capitalize">
          {blog.title}
        </Typography>
        <Typography is="p" className="mt-8">
          {blog.body}
        </Typography>
      </div>
    </Layout>
  );
};

export default BlogDetailsPage;

export const getStaticPaths = async () => {
  const res: Array<BlogProps> = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

  const paths = res.map((item) => ({
    params: {
      uniqueid: String(item.id),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
  const id = context.params?.uniqueid;
  const data: BlogProps = await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();

  return {
    props: {
      blog: data,
    },
    revalidate: 60,
  };
};
