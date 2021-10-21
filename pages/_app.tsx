import React from "react";
import App from "next/app";
import Head from 'next/head'

import type { AppProps , AppContext } from 'next/app'

import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'
import './../styles/global.css'

const Main =  ({Component, pageProps}: AppProps) => {
  return (<>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

      </Head>
     <Component {...pageProps} />
    </>
  );
};

// SSR injection
Main.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
    
  return { ...appProps }
}

export default React.memo(Main);
