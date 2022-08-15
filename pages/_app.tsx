import type { AppProps } from 'next/app';

import Header from './src/component/Header';
import Footer from './src/component/Footer';

import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
