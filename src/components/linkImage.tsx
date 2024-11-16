import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

interface LinkImageProps {
  children: string
}

const LinkImage: React.FC<LinkImageProps> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMetaImage = async () => {
      if (!children || !children.startsWith('http')) {
        setError('Invalid URL')
        setLoading(false)
        setImageUrl('/images/Loading_img.png') // 기본 로딩 이미지
        return
      }

      try {
        const apiUrl = `https://api.microlink.io/?url=${encodeURIComponent(children)}`
        const response = await axios.get(apiUrl)
        const image = response.data.data.image?.url || '/images/Loading_img.png' // 기본 이미지
        setImageUrl(image)
      } catch (error) {
        setError('Failed to fetch image.')
        console.error('Error fetching image:', error)
        setImageUrl('/images/Loading_img.png') // 기본 로딩 이미지
      } finally {
        setLoading(false)
      }
    }

    fetchMetaImage()
  }, [children])

  return (
    <div>
      {loading ? (
        <Image
          src="/images/Loading_img.png" // 로딩 중일 때 기본 이미지
          alt="Loading"
          width={300}
          height={300}
          style={{ borderRadius: '1.5rem' }}
          priority={true}
          className="animate-pulse"
        />
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <Image
          src={imageUrl!}
          alt="Preview"
          width={300}
          height={300}
          style={{ borderRadius: '1.5rem' }}
          priority={true}
        />
      )}
    </div>
  )
}

export default LinkImage
