import type { AppProps } from 'next/app'
import '@/styles/global.css'
import Nav from '@/components/nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}
