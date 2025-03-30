/* This file displays the tab info (Title and Icon) for the whole website */

import Head from 'next/head';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import
import Home from './Home/home'; // Adjust the import path based on your file structure


function EonEnglish({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eon English</title>
        <link rel="icon" href="/images/eonEnglishIcon.svg" />
      </Head>
      <Component {...pageProps} />
 
       {/* This would get /home to render the home page, but it does not work as it causes a document is not defined error 
       For now, we are redirected to /Home/home with /home is in use
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
      */}

    </>
  );
}

export default EonEnglish;
