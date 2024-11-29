import Head from 'next/head'
import Link from 'next/link'
import Button from '@/components/button'
import { brands } from '@/store/brands'

type Brand = {
  name: string
  url: string
}

type BrandCardProps = {
  name: string
  url: string
}

const BrandCard: React.FC<BrandCardProps> = ({ name, url }) => (
  <div
    key={`${name}-${url}`}
    className="flex flex-col items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-md hover:shadow-lg"
  >
    <h3 className="mb-4 break-words text-2xl ph:text-sm tab:text-lg">{name}</h3>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full bg-pink-500 px-4 text-2xl font-bold text-white shadow-md hover:bg-pink-600 ph:px-2 ph:text-sm tab:text-lg"
      aria-label={`Visit ${name}`}
    >
      Visit✨
    </a>
  </div>
)

export default function Home() {
  const Brands: Brand[] = brands.slice(0, 6)

  return (
    <>
      <Head>
        <title>Glowshelfie - Your Personalized Skincare Journey</title>
        <meta
          name="description"
          content="Create your perfect skincare routine with Glowshelfie. Take our personalized quiz to discover the best products for your unique skin type and concerns."
        />
        <link rel="canonical" href="https://glowshelfie.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://glowshelfie.vercel.app/" />
        <meta
          property="og:image"
          content="https://glowshelfie.vercel.app/images/Glowshelfie_logo.png"
        />
      </Head>
      <div className="min-w-screen m-10 flex flex-wrap items-center justify-around gap-10 ph:flex-col ph:justify-center ph:gap-5 tab:flex-col tab:justify-center">
        <section className="w-5/12 rounded-2xl bg-[#D9D9D9] p-10 text-center shadow-lg shadow-gray-500 ph:w-full ph:p-4 tab:w-11/12 tab:p-6">
          <div className="mb-10 flex flex-col gap-12 text-center font-bold ph:mb-4 ph:gap-6 tab:mb-6">
            <h1 className="text-6xl leading-tight text-gray-800 ph:text-2xl tab:text-4xl">
              🐰 Let&apos;s build your personalized Korean{' '}
              <span className="text-pink-600">Skincare Routine</span> 💓✨
            </h1>
            <p className="text-4xl ph:text-lg tab:text-2xl">
              ✨ Take this quiz to find out which routine is perfect for your
              skin 👸✨
            </p>
          </div>
          <Link href="/quiz">
            <Button
              className="rounded-lg bg-[#F7DFDE] p-3 text-4xl font-bold shadow-md transition-transform duration-200 hover:scale-105 hover:bg-amber-200 ph:text-lg tab:text-2xl"
              aria-label="Start your personalized quiz"
            >
              Let&apos;s Start! 🐰💓✨
            </Button>
          </Link>
        </section>

        <section className="w-5/12 rounded-2xl bg-[#D9D9D9] p-10 text-center font-bold shadow-lg shadow-gray-400 ph:w-full ph:p-4 tab:w-11/12 tab:p-6">
          <div className="flex flex-col gap-8">
            <h2 className="text-6xl leading-tight text-gray-800 ph:text-2xl tab:text-4xl">
              💖 Already know your{' '}
              <span className="text-pink-600">favorites</span>? 🛍️✨
            </h2>
            <p className="text-4xl ph:text-lg tab:text-2xl">
              Browse and shop from the brands you love below!
            </p>

            <div className="m-6 grid grid-cols-2 gap-8 p-2 ph:m-2 ph:gap-4 tab:m-4 tab:gap-6">
              {Brands.map((brand) => (
                <BrandCard
                  key={`${brand.name}-${brand.url}`}
                  name={brand.name}
                  url={brand.url}
                />
              ))}
            </div>

            <Link
              href="/shop"
              className="rounded-full bg-pink-500 px-8 py-3 text-lg font-bold text-white shadow-md hover:bg-pink-600 ph:w-full"
              aria-label="Show more brands"
            >
              Show More 💕
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
