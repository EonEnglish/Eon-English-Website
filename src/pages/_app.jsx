/* This file displays the tab info (Title and Icon) for the whole website */

import Head from 'next/head';
import '@styles/globals.css';

function EonEnglish({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eon English</title>
        <link rel="icon" href="/images/eonEnglishIcon.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default EonEnglish;
