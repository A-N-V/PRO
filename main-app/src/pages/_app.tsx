import '../../styles/globals.css'
import React from 'react';
import type { AppProps } from 'next/app'
import '@module-federation/nextjs-mf/src/include-defaults';
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
