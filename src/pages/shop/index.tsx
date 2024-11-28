import { brands } from '@/store/brands'
import Head from 'next/head'
import Link from 'next/link'
import { FC } from 'react'

interface Brand {
  name: string
  url: string
}

const Shop: FC = () => {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MQXJ72SJ"
          height="0"
          width="0"
          className="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      <Head>
        <title>Shop Your Favorite Brands 💖✨ | Glowshelfie</title>
        <meta
          name="description"
          content="Already know your favorites? 🛍️✨ Browse and shop from the brands you love. Discover great deals and explore your favorite products today!"
        />
        <meta
          name="keywords"
          content="shopping, brands, favorites, online shopping, best brands, shop now, Glowshelfie"
        />
        <meta
          property="og:title"
          content="Shop Your Favorite Brands 💖✨ | Glowshelfie"
        />
        <meta
          property="og:description"
          content="Already know your favorites? 🛍️✨ Browse and shop from the brands you love. Discover great deals and explore your favorite products today!"
        />
        <meta
          property="og:image"
          content="https://glowshelfie.vercel.app/images/shop_ogImg.png"
        />
        <meta property="og:url" content="https://glowshelfie.vercel.app/shop" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Glowshelfie" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Shop Your Favorite Brands 💖✨ | Glowshelfie"
        />
        <meta
          name="twitter:description"
          content="Already know your favorites? 🛍️✨ Browse and shop from the brands you love. Discover great deals and explore your favorite products today!"
        />
        <meta
          name="twitter:image"
          content="https://glowshelfie.vercel.app/images/shop_ogImg.png"
        />
        <link rel="canonical" href="https://glowshelfie.vercel.app/shop" />
      </Head>
      <div className="m-6 flex items-center justify-center p-6 ph:m-2 ph:p-2 tab:m-4 tab:p-4">
        <section className="flex w-11/12 flex-col rounded-2xl bg-[#D9D9D9] p-10 text-center font-bold shadow-lg shadow-gray-400 ph:w-full ph:p-2 tab:w-11/12 tab:p-6">
          <div className="flex flex-col">
            <h1 className="text-6xl leading-tight text-gray-800 ph:text-2xl tab:text-4xl">
              💖 Already know your{' '}
              <span className="text-pink-600">favorites</span>? 🛍️✨
            </h1>
            <h2 className="text-4xl ph:text-lg tab:text-2xl">
              Browse and shop from the brands you love below!
            </h2>
            <div className="m-6 grid grid-cols-3 gap-8 p-2 ph:m-2 ph:grid-cols-2 ph:gap-4 tab:m-4 tab:grid-cols-2 tab:gap-6">
              {brands && brands.length > 0 ? (
                brands.map((brand: Brand) => (
                  <div
                    key={brand.name}
                    className="flex w-full flex-col items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 text-center shadow-md hover:shadow-lg"
                  >
                    <h3 className="mb-4 break-words text-2xl ph:text-sm tab:text-lg">
                      {brand.name}
                    </h3>
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-pink-500 px-4 text-2xl font-bold text-white shadow-md hover:bg-pink-600 ph:px-2 ph:text-sm tab:text-lg"
                      aria-label={`Visit ${brand.name}`}
                    >
                      Visit✨
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-xl ph:text-sm tab:text-lg">
                  Unable to retrieve brand information.
                </p>
              )}
            </div>
          </div>
          <Link
            href="/"
            className="m-6 rounded-full bg-pink-500 px-8 py-3 text-4xl font-bold text-white shadow-md hover:bg-pink-600 ph:m-2 ph:text-lg tab:m-4 tab:text-2xl"
            aria-label="Go back to homepage"
          >
            Back
          </Link>
        </section>
      </div>
    </>
  )
}

export default Shop
