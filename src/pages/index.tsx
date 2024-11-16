import Head from 'next/head'
import Quizz from './quizz'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://glowshelfi.vercel.app/" />
        <meta property="og:url" content="https://glowshelfi.vercel.app/" />
      </Head>
      <Quizz />
    </>
  )
}
