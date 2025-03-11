import React from 'react';
import { useRouter } from 'next/router';

import Button from '@/components/atoms/Button';
import Typography from '@/components/atoms/Typography';

const Page404 = () => {
  const { replace, back } = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-16 h-[calc(100vh-100px)]">
      <Typography is="h1">404</Typography>

      <div className="text-center max-w-lg">
        <Typography is="h3" className="text-primary">
          Página no encontrada
        </Typography>
        <Typography is="p" className="mt-2">
          Lo sentimos, la página que buscas no existe o no se encuentra disponible. Verifica la dirección y vuelve a intentarlo.
        </Typography>
      </div>

      <div className="flex flex-row gap-5">
        <Button variant="contained" onClick={() => replace('/')}>
          Ir al inicio
        </Button>
        <Button variant="outlined" onClick={() => back()}>
          Atrás
        </Button>
      </div>
    </div>
  );
};

export default Page404;
