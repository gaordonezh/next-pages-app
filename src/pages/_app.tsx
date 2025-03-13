import type { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import '@/styles/globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  style: 'normal',
  weight: '400',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={roboto.className}>
      <Component {...pageProps} />
    </div>
  );
}
