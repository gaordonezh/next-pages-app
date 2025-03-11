import React from 'react';
import { useRouter } from 'next/router';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';

const Page500 = () => {
  const { replace } = useRouter();

  return (
    <div className="flex flex-col justify-center items-center gap-16 h-[calc(100vh-100px)]">
      <Typography is="h1">500</Typography>

      <div className="text-center max-w-lg">
        <Typography is="h3" className="text-primary">
          Ha ocurrido un error
        </Typography>
        <Typography is="p" className="mt-2">
          Lo sentimos, estamos presentando problemas que impiden que se muestre el sitio.
        </Typography>
        <Typography is="p" className="mt-1">
          Puedes refrescar la página o intentar en unos minutos.
        </Typography>
      </div>

      <Button variant="contained" onClick={() => replace('/')}>
        Ir al inicio
      </Button>
    </div>
  );
};

export default Page500;
