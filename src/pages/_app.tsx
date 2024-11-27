import type { AppProps } from 'next/app'
import '@/styles/global.css'
import Nav from '@/components/nav'
import Head from 'next/head'
import Footer from '@/components/footer'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Glowshelfie" />
        <meta property="og:site_name" content="Glowshelfie" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#F0E5DE" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4NPXWYY71B"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-4NPXWYY71B');
  `}
      </Script>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MQXJ72SJ');
          `,
        }}
      />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
