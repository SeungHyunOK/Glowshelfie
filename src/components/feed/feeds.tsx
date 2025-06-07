import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Modal from '@/components/feed/feedModal'
import { FeedType } from '@/type/feed'
import LinkImage from '@/components/linkImage'
import { List } from '@/store/feedProductsList'
import Button from '@/components/button'
import { SocialLink } from '@/components/nav'
import { CustomPrevArrow, CustomNextArrow } from '@/components/feed/feedArrow'
import Link from 'next/link'

interface ProductType {
  name: string
  link: string
}

type FeedProductsListType = {
  [key: string]: ProductType[]
}

export default function Feeds() {
  const [feeds, setFeeds] = useState<FeedType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFeed, setSelectedFeed] = useState<FeedType | null>(null)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isModalOpen])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch('/api/instagram')
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram feeds.')
        }
        const data = await response.json()
        setFeeds(data)
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError(String(error))
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const openModal = (feed: FeedType) => {
    setSelectedFeed(feed)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedFeed(null)
  }

  if (loading) {
    return (
      <div className="flex gap-4 overflow-x-auto p-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="relative aspect-square w-full max-w-xs animate-pulse rounded-lg bg-gradient-to-r from-gray-300 to-gray-100 shadow-md"
          ></div>
        ))}
      </div>
    )
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }

  return (
    <div className="max-w-screen relative flex w-10/12 flex-col justify-center gap-2 overflow-visible text-center ph:w-full">
      <h1 className="animate-fadeInTranslate text-xl font-bold leading-tight text-gray-800 ph:text-base tab:text-lg">
        💖 Check out all the products’ links from your
        <span className="text-pink-600"> favorite reels </span>💫
      </h1>

      <Slider {...sliderSettings}>
        {feeds.map((feed) => (
          <div
            key={feed.id}
            className="relative aspect-[9/16] cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80"
            onClick={() => openModal(feed)}
          >
            {feed.media_type === 'VIDEO' ? (
              <video
                src={feed.media_url}
                autoPlay
                muted
                loop
                playsInline
                className="absolute left-0 top-0 h-full w-full object-cover"
              />
            ) : (
              <Image
                src={feed.media_url}
                alt={feed.caption || 'Instagram post'}
                layout="fill"
                className="object-cover"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </Slider>

      {isModalOpen && selectedFeed && (
        <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <div className="flex items-start justify-center gap-5 p-4 ph:flex-col ph:items-center tab:flex-col tab:items-center">
            <div className="flex w-full flex-col items-center justify-center gap-3 tab:w-1/2 pc:w-1/3">
              <div
                className="relative aspect-[9/16] w-full max-w-5xl overflow-hidden rounded-lg shadow-md"
                onClick={() => {
                  const videoElement = document.getElementById(
                    'custom-video'
                  ) as HTMLVideoElement
                  if (videoElement) {
                    if (videoElement.paused) {
                      videoElement.play()
                    } else {
                      videoElement.pause()
                    }
                  }
                }}
              >
                {selectedFeed.media_type === 'VIDEO' ? (
                  <video
                    id="custom-video"
                    src={selectedFeed.media_url}
                    controls
                    muted
                    autoPlay
                    loop
                    playsInline
                    onContextMenu={(e) => e.preventDefault()}
                    controlsList="nodownload"
                    preload="auto"
                    className="absolute left-0 top-0 h-full w-full object-cover"
                  />
                ) : (
                  <div className="relative h-full w-full">
                    <Image
                      src={selectedFeed.media_url}
                      alt={selectedFeed.caption || 'Selected Instagram post'}
                      className="absolute left-0 top-0 object-cover"
                      layout="fill"
                    />
                  </div>
                )}
              </div>
              <ul className="flex gap-3 ph:gap-2">
                <SocialLink
                  href="https://www.instagram.com/glowshelfie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  imgSrc="/icons/Instagram_icon.svg"
                  altText="Instagram Icon"
                  ariaLabel="Visit Glowshelfie's Instagram"
                />
                <SocialLink
                  href="https://www.tiktok.com/@glowshelfie?is_from_webapp=1&sender_device=pc"
                  imgSrc="/icons/Tiktok_icon.svg"
                  altText="TikTok Icon"
                  ariaLabel="Visit Glowshelfie's TikTok"
                />
                <SocialLink
                  href="https://youtube.com/@glowshelfie?feature=shared"
                  imgSrc="/icons/Youtube_icon.svg"
                  altText="YouTube Icon"
                  ariaLabel="Visit Glowshelfie's YouTube channel"
                />
              </ul>
              <h1 className="animate-fadeInTranslate bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-xl font-extrabold text-transparent ph:text-base tab:text-lg">
                ✨ Take your skincare Quiz ✨
              </h1>
              <Link href="/quiz">
                <Button
                  className="rounded-lg bg-[#F7DFDE] p-3 text-xl font-bold shadow-md transition-transform duration-200 hover:scale-105 hover:bg-amber-200 ph:text-base tab:text-lg"
                  aria-label="Start your personalized quiz"
                  style={{
                    animation: 'pulseGrow 2s infinite',
                  }}
                >
                  Let&apos;t Start!
                </Button>
              </Link>
            </div>
            <div className="w-full pc:w-2/3">
              {(List as FeedProductsListType)[selectedFeed.id]?.length > 0 ? (
                <div className="grid grid-cols-2 gap-4 ph:grid-cols-1">
                  {(List as FeedProductsListType)[selectedFeed.id].map(
                    (product, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4 text-center shadow-sm"
                      >
                        <h3 className="text-base font-bold">{product.name}</h3>
                        <a
                          href={product.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 flex flex-col justify-center gap-2 hover:underline"
                        >
                          <LinkImage>{product.link}</LinkImage>
                          <Button className="rounded-lg bg-[#F7DFDE] p-3 text-xl font-bold shadow-md transition-transform duration-200 hover:scale-105 hover:bg-amber-200 ph:text-base tab:text-lg">
                            Buy
                          </Button>
                        </a>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
