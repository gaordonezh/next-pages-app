import Layout from '@/components/templates/Layout';
import DinamicRoutes from '@/components/molecules/DinamicRoutes';
import ServerSideRendering from '@/components/molecules/ServerSideRendering';
import { useRouter } from 'next/router';

const spacingClassnames = 'flex flex-col items-start justify-start gap-4';

const RenderingPage = () => {
  const { query } = useRouter();

  const components = {
    '4': (
      <div className="flex flex-col gap-4">
        <DinamicRoutes title="Client-side Rendering" />
      </div>
    ),
    '5': <ServerSideRendering />,
  };

  return (
    <Layout title="Renderizado - Next JS">
      <div className="flex flex-col gap-20">
        {query.part ? (
          <div className={spacingClassnames}>{components[query.part as keyof typeof components]}</div>
        ) : (
          Object.values(components).map((component, index) => (
            <div key={index} className={spacingClassnames}>
              {component}
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default RenderingPage;
