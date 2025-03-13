import { GetServerSidePropsContext, PreviewData } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Typography from '@/components/atoms/Typography';
import { Repo } from '@/interfaces/global';
import Layout from '@/components/templates/Layout';

const RenderingPage = () => {
  return (
    <Layout>
      <div>
        <Typography is="h1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate libero quaerat ex dignissimos
          doloribus id, nostrum porro, nemo totam quo quae corporis eius dolorem ut minus, ducimus beatae error.
        </Typography>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, cum harum! Harum libero neque illo tempora.
        Asperiores vero iusto dolorem velit, iure repudiandae magnam molestias, harum est, voluptatibus beatae id!
      </div>
    </Layout>
  );
};

export default RenderingPage;
