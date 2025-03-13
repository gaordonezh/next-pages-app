import React from 'react';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Typography from '@/components/atoms/Typography';
import { UserProps } from '@/interfaces/global';
import Layout from '@/components/templates/Layout';
import Image from 'next/image';

const DinamicRoutePage = ({ id, avatar, email, first_name, last_name }: UserProps) => {
  return (
    <Layout image={avatar} title={first_name} description={`${first_name} ${last_name} — ${email}`} key={id}>
      <div className="flex flex-col justify-center items-center mt-24">
        <Image alt={first_name} src={avatar} width={150} height={150} className="rounded-lg border-4 border-white" />
        <Typography is="h3" className="mt-8">
          {first_name} {last_name}
        </Typography>
        <Typography is="p">{email}</Typography>
      </div>
    </Layout>
  );
};

export default DinamicRoutePage;

export const getServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>) => {
  try {
    const userId = context.query.id;
    if (!userId) throw new Error('USER_ID_NOT_PROVIDED');

    const userData = await (await fetch(`https://reqres.in/api/users/${userId}`)).json();
    if (!userData) throw new Error('USER_NOT_FOUND');

    return { props: userData.data };
    // eslint-disable-next-line
  } catch (error) {
    return { redirect: { permanent: false, destination: '/' } };
  }
};
