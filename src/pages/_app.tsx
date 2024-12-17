import type { AppProps } from 'next/app'
import '@/styles/global.css'
import Nav from '@/components/nav'
import Head from 'next/head'
import Footer from '@/components/footer'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Discountcode from '@/components/discountcode'
import Button from '@/components/button'

const App = ({ Component, pageProps }: AppProps) => {
  const [isOpenDiscount, setIsOpenDiscount] = useState(false)
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

  useEffect(() => {
    const hasClosedDiscount =
      localStorage.getItem('hasClosedDiscount') === 'true'
    if (!hasClosedDiscount) {
      setIsOpenDiscount(true)
    }
  }, [])

  const openDiscount = () => {
    setIsOpenDiscount(true)
  }
  const closeDiscount = () => {
    setIsOpenDiscount(false)
    localStorage.setItem('hasClosedDiscount', 'true')
  }

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
        src="https://www.googletagmanager.com/gtag/js?id=G-4NPXWYY71B"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4NPXWYY71B');
          `,
        }}
      />
      <Nav />
      {!isOpenDiscount && (
        <Button
          onClick={openDiscount}
          className="fixed left-0 top-1/2 z-30 origin-top-left -translate-y-1/2 rotate-[-90deg] transform rounded-b-2xl bg-[#F7DFDE] px-4 py-2 font-bold shadow-lg hover:bg-pink-500"
        >
          Get Discount
        </Button>
      )}
      <Discountcode isOpen={isOpenDiscount} closeDiscount={closeDiscount} />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
