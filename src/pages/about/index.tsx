import Head from 'next/head'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
        <title>About Glowshelfie</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover the story of Glowshelfie, a K-beauty journey designed to help sensitive skin find the perfect glow."
        />
      </Head>
      <div className="m-4 flex items-center gap-6 ph:flex-col ph:gap-2 tab:flex-col">
        <div className="intrinsic flex w-2/3 animate-fadeInTranslate justify-center pc:w-1/3">
          <Image
            src="/images/About_img.webp"
            alt="About image"
            width={800}
            height={600}
            priority
          />
        </div>
        <div className="m-6 flex gap-6 ph:flex-col pc:w-2/3 pc:flex-col">
          <section className="flex animate-fadeInScale flex-col gap-6 tab:w-1/2">
            <h1 className="text-4xl font-bold ph:text-xl tab:text-2xl">
              Introduction
            </h1>
            <h2 className="text-2xl text-gray-700 ph:text-lg tab:text-lg">
              Hi Beautiful Souls~
            </h2>
            <p className="text-xl leading-relaxed ph:text-base tab:text-lg">
              Your girl here, live from Seoul, bringing you the best of K-Beauty
              to make your skin glow! Join the Beautiful Souls community to
              discover not just the secrets of K-Beauty but also ways to embrace
              and celebrate your unique beauty.
            </p>
          </section>

          <section className="flex animate-fadeInScale flex-col gap-6 tab:w-1/2">
            <h1 className="text-4xl font-bold ph:text-xl tab:text-2xl">
              Glowshelfie&apos;s Story
            </h1>
            <p className="text-xl leading-relaxed ph:text-base tab:text-lg">
              Having sensitive skin and being allergic to many common
              ingredients, it was always a challenge for me to find suitable
              skincare and makeup products. Growing up in Europe, I tried
              countless &quot;safe&quot; options but never discovered the
              perfect routine. Glowshelfie is our K-Beauty haven, created to
              accompany you through every step of your skincare journey.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
