import React, { useEffect } from 'react';
import { initGA, logPageView } from '../analytics';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initGA(); // Inicializa o Google Analytics
    logPageView(); // Registra a exibição da página inicial

    // Você também pode registrar outros eventos ou exceções usando as funções logEvent() e logException()
  }, []);

  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
