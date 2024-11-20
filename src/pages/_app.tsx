import type { AppProps } from 'next/app'
import '@/styles/global.css'
import Nav from '@/components/nav'
import Head from 'next/head'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Glowshelfie" />
        <meta name="author" content="Glowshelfie" />
        <meta name="theme-color" content="#F0E5DE" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
