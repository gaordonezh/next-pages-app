import Image from 'next/image';
import { useRouter } from 'next/router';
import Typography from '@/components/atoms/Typography';
import LazyComponent from '@/components/molecules/LazyComponent';
import Layout from '@/components/templates/Layout';

const spacingClassnames = 'flex flex-col items-start justify-start gap-4';

const OptimizationPage = () => {
  const { query } = useRouter();

  const components = {
    '6': (
      <div>
        <Typography is="h3" className="text-primary">
          {'<Image />'}
        </Typography>

        <Image
          src="https://www.axelerant.com/hubfs/Imported_Blog_Media/nextjs_image1.jpg"
          alt="NEXT JS Image"
          width={1000}
          height={571}
          className="border border-gray-800 rounded-xl max-w-xl w-full mt-4"
        />

        <Typography is="p" className="mt-4">
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
          → <b>Priority:</b> Prioridad de carga
        </Typography>
        <Typography is="p">
          → <b>Quality</b> Calidad de carga
        </Typography>
        <Typography is="p">
          → <b>Sizes:</b> Medidas custom
        </Typography>
        <Typography is="p">
          → <b>Loading:</b> lazy | eager
        </Typography>
        <Typography is="p">
          → <b>Style:</b> Estilos css
        </Typography>
      </div>
    ),
    '7': (
      <div>
        <Typography is="h3" className="text-primary">
          Fonts
        </Typography>
        <Image
          src="/images/nextFont.png"
          alt="NEXT JS Image"
          width={650}
          height={442}
          className="border border-gray-800 rounded-lg max-w-xl w-full mt-4"
        />
      </div>
    ),
    '8': (
      <div className="w-full">
        <Typography is="h3" className="text-primary mb-4">
          Lazy Loading
        </Typography>

        <LazyComponent />
      </div>
    ),
  };

  return (
    <Layout title="Optimización - Next JS">
      <div className="flex flex-col gap-24 mb-10">
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

export default OptimizationPage;
