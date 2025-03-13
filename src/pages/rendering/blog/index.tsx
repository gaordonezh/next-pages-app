import React from 'react';
import { GetStaticPropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Layout from '@/components/templates/Layout';
import { BlogProps } from '@/interfaces/global';
import Link from 'next/link';

interface BlogPageProps {
  blogList: Array<BlogProps>;
}

const BlogPage = ({ blogList }: BlogPageProps) => {
  return (
    <Layout title="Blog - Next JS">
      <div className="overflow-auto max-h-[calc(100vh-150px)] pr-2">
        <div className="p-8 bg-white rounded-lg border shadow-md dark:bg-gray-900 dark:border-gray-800">
          <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-4">Blog</h3>

          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {blogList.map((item) => (
              <li key={item.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-base font-medium truncate text-gray-900 dark:text-white capitalize">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">{item.body}</p>
                  </div>
                  <Link className="text-primary font-bold text-sm" href={`/rendering/blog/${item.id}`}>
                    Ver →
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export const getStaticProps = async (context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
  const res: Array<BlogProps> = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();

  return {
    props: {
      blogList: res,
    },
  };
};
