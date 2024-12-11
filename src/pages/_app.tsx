import type { AppProps } from 'next/app'
import '@/styles/global.css'
import Nav from '@/components/nav'
import Head from 'next/head'
import Footer from '@/components/footer'
import Script from 'next/script'
import { useEffect } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const App = ({ Component, pageProps }: AppProps) => {
  const GA_TRACKING_ID = process.env.GA_ID
  const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: 'v21.0',
      })
    }

    const script = document.createElement('script')
    script.src = 'https://connect.facebook.net/en_US/sdk.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }, [FACEBOOK_APP_ID])

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
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
