import { LinksProps } from '@/interfaces/global';

export const storageKey = 'nextjs@list';

export const AppTitle = 'Next.js: Arquitectura, Renderizado y Optimización en Aplicaciones Web';

export const links: LinksProps = [
  {
    label: 'Enrutamiento',
    path: '/routing',
    items: [
      { label: 'Páginas y Navegación', seen: false, id: 1 },
      { label: 'Rutas dinámicas', seen: false, id: 2 },
      { label: 'Rutas API', seen: false, id: 3 },
    ],
  },
  {
    label: 'Renderizado',
    path: '/rendering',
    items: [
      { label: 'Client-side rendering', seen: false, id: 4 },
      { label: 'Server-side rendering', seen: false, id: 5 },
    ],
  },
  {
    label: 'Optimizaciones',
    path: '/optimization',
    items: [
      { label: 'Image', seen: false, id: 6 },
      { label: 'Fonts', seen: false, id: 7 },
      { label: 'Lazy loading', seen: false, id: 8 },
    ],
  },
];

export const renderingList = [
  {
    path: '/rendering/blog',
    title: 'getStaticProps',
    description:
      'Se usa para obtener datos en tiempo de compilación. Next.js pre-renderiza la página con los datos devueltos, lo que hace que las páginas sean súper rápidas y se puedan servir desde un CDN. Ideal para contenido que no cambia con frecuencia. Como por ejemplo, un blog con contenido estático.',
  },
  {
    path: '/rendering/blog/1',
    title: 'getStaticPaths',
    description:
      'Se usa junto con getStaticProps en rutas dinámicas. Define qué rutas dinámicas se generan en la compilación. Por ejemplo para generar páginas estáticas para cada publicación de un blog.',
  },
  {
    path: '/routing/3',
    title: 'getServerSideProps',
    description:
      'Obtiene datos en cada solicitud del servidor. La página se renderiza en tiempo real, útil para contenido que cambia constantemente o necesita datos de sesión. Por ejemplo se puede usar en un panel de usuario con datos actualizados en cada carga.',
  },
];
