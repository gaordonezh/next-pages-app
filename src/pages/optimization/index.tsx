import Typography from '@/components/atoms/Typography';
import Layout from '@/components/templates/Layout';
import Image from 'next/image';
import React from 'react';

const OptimizationPage = () => {
  return (
    <Layout title="Optimización - Next JS">
      <div>
        <Typography is="h3" className="text-primary">
          {'<Image />'}
        </Typography>

        <Image
          src="https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg"
          alt="NEXT JS Image"
          width={1000}
          height={571}
          className="border border-gray-800 rounded-lg max-w-xl"
        />

        <Typography is="p" className="mt-2">
          → <b>Src:</b> url de la imagen
        </Typography>
        <Typography is="p">
          → <b>Alt:</b> Descripción de la imagen
        </Typography>
        <Typography is="p">
          → <b>Width & Height:</b> Especifica el tamaño máximo con el que se cargará la imagen y que ocupará en la
          pantalla.
        </Typography>
        <Typography is="p">
          → <b>Layout:</b> intrinsic | fixed | fill | responsive
        </Typography>
        <Typography is="p">
          → <b>Priority:</b>
        </Typography>
        <Typography is="p">
          → <b>Quality</b>
        </Typography>
        <Typography is="p">
          → <b>Sizes:</b>
        </Typography>
        <Typography is="p">
          → <b>Loading:</b> lazy | eager
        </Typography>
        <Typography is="p">
          → <b>Style:</b> Estilos css
        </Typography>
      </div>
      <div className="mt-20">
        <Typography is="h3" className="text-primary">
          Fonts
        </Typography>
      </div>
    </Layout>
  );
};

export default OptimizationPage;
