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
    label: 'Renderizado y Obtención de datos',
    path: '/data-fetching',
    items: [
      { label: 'getStaticProps', seen: false, id: 6 },
      { label: 'getStaticPaths', seen: false, id: 7 },
      { label: 'getServerSideProps', seen: false, id: 8 },
      { label: 'Incremental Static Regeneration', seen: false, id: 9 },
      { label: 'Client-side Fetching', seen: false, id: 10 },
    ],
  },
  {
    label: 'Optimizaciones',
    path: '/optimization',
    items: [
      { label: 'Image', seen: false, id: 11 },
      { label: 'Fonts', seen: false, id: 12 },
      { label: 'Script', seen: false, id: 13 },
      { label: 'Lazy loading', seen: false, id: 14 },
      { label: 'Analythics', seen: false, id: 15 },
    ],
  },
];
