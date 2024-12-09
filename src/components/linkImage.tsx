import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

interface LinkImageProps {
  children: string
  className?: string
  width?: number
  height?: number
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

  useEffect(() => {
    const fetchMetaImage = async () => {
      if (!isValidUrl(children)) {
        setImageUrl('/images/Loading_img.png')
        setLoading(false)
        return
      }

      try {
        const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(children)}`
        const response = await axios.get(apiUrl)
        const image = response.data.data.image?.url || '/images/Loading_img.png'
        setImageUrl(image)
      } catch {
        setImageUrl('/images/OOPS.png')
      } finally {
        setLoading(false)
      }
    }

    fetchMetaImage()
  }, [children])

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
