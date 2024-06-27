import React from 'react';
import NextNProgress from 'nextjs-progressbar';
import '../styles/globals.css'; // Your global CSS file

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#FFD700" // Adjust color to match your diamond.gif appearance
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;