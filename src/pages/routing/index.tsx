import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/templates/Layout';
import PagesAndNavigation from '@/components/molecules/PagesAndNavigation';
import DinamicRoutes from '@/components/molecules/DinamicRoutes';
import ApiRoutes from '@/components/molecules/ApiRoutes';

const spacingClassnames = 'flex flex-col items-start justify-start gap-4';

const RoutingPage = () => {
  const { query } = useRouter();

  const components = {
    '1': <PagesAndNavigation />,
    '2': <DinamicRoutes title="Rutas dinámicas" />,
    '3': <ApiRoutes />,
  };

  return (
    <Layout title="Arquitectura - Next JS">
      <div className="flex flex-col gap-20">
        {query.part ? (
          <div className={spacingClassnames}>{components[query.part as keyof typeof components]}</div>
        ) : (
          Object.entries(components).map(([key, component]) => (
            <div key={key} className={spacingClassnames}>
              {component}
            </div>
          ))
        )}
      </div>
    </Layout>
  );
};

export default RoutingPage;
