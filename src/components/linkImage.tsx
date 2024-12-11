import React, { useState, useEffect, useMemo } from 'react'
import axios, { AxiosError } from 'axios'
import Image from 'next/image'

interface LinkImageProps {
  children: string
  className?: string
  width?: number
  height?: number
}

interface ApiResponse {
  data?: {
    image?: {
      url?: string
    }
  }
  openGraph?: {
    image?: string
  }
  image?: string
}

const LinkImage: React.FC<LinkImageProps> = ({
  children,
  className,
  width = 300,
  height = 300,
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const isValidUrl = (url: string): boolean => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  const apiList = useMemo<((url: string) => string)[]>(
    () => [
      (url: string) =>
        `https://api.microlink.io/?url=${encodeURIComponent(url)}`,
      (url: string) =>
        `https://opengraph.io/api/1.1/site/${encodeURIComponent(url)}?app_id=${process.env.OPENGRAPH_KEY}`,
      (url: string) =>
        `https://api.linkpreview.net/?key=${process.env.LINKPREVIEW_KEY}&q=${encodeURIComponent(url)}`,
    ],
    []
  )

  useEffect(() => {
    const fetchMetaImage = async () => {
      if (!isValidUrl(children)) {
        setImageUrl('/images/Loading_img.png')
        setLoading(false)
        return
      }

      for (const getApiUrl of apiList) {
        try {
          const apiUrl = getApiUrl(children)
          const response = await axios.get<ApiResponse>(apiUrl)

          const image =
            response.data?.data?.image?.url ||
            response.data?.openGraph?.image ||
            response.data?.image ||
            null

          if (image) {
            setImageUrl(image)
            return
          }
        } catch (error) {
          const axiosError = error as AxiosError
          console.error('API Error:', axiosError.message)
        }
      }

      setImageUrl('/images/OOPS.png')
    }

    fetchMetaImage().finally(() => setLoading(false))
  }, [children, apiList])

  const handleImageError = () => {
    setImageUrl('/images/OOPS.png')
  }

  return (
    <div className={className}>
      {loading ? (
        <Image
          src="/images/Loading_img.png"
          alt="Loading"
          width={width}
          height={height}
          priority={true}
          className="animate-pulse rounded-[1.5rem]"
        />
      ) : (
        <Image
          src={imageUrl!}
          alt="Preview"
          width={width}
          height={height}
          className="rounded-[1.5rem]"
          priority={true}
          quality={90}
          onError={handleImageError}
        />
      )}
    </div>
  )
}

export default LinkImage
