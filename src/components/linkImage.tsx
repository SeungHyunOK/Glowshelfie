import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'
import Image from 'next/image'

interface LinkImageProps {
  children: string
  className?: string
}

const LinkImage: React.FC<LinkImageProps> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const isValidUrl = (url: string): boolean => {
    try {
      const parsedUrl = new URL(url)
      return parsedUrl.protocol === 'https:' // HTTPS만 허용
    } catch {
      return false
    }
  }

  const apiUrls = useMemo(
    () => [
      (url: string) =>
        `https://api.microlink.io/?url=${encodeURIComponent(url)}`,
      (url: string) =>
        `https://api.opengraph.io/api/1.1/site/${encodeURIComponent(url)}?app_id=YOUR_APP_ID`,
      (url: string) =>
        `https://api.linkpreview.net/?key=YOUR_API_KEY&q=${encodeURIComponent(url)}`,
    ],
    []
  )

  useEffect(() => {
    const fetchMetaImage = async () => {
      if (!isValidUrl(children)) {
        setImageUrl('/images/OOPS.png')
        setLoading(false)
        return
      }

      // 캐싱된 데이터 확인
      const cachedImage = sessionStorage.getItem(children)
      if (cachedImage) {
        setImageUrl(cachedImage)
        setLoading(false)
        return
      }

      // 여러 API를 순차적으로 시도
      for (const apiUrl of apiUrls) {
        try {
          const response = await axios.get(apiUrl(children))
          const image =
            response.data.data?.image?.url || // Microlink & OpenGraph.io
            response.data.image || // LinkPreview
            '/images/OOPS.png'

          setImageUrl(image)
          sessionStorage.setItem(children, image) // 캐싱 저장
          break // 성공하면 다음 API 호출 중단
        } catch {
          console.warn(`API 실패: ${apiUrl(children)}`) // error 변수 생략
        }
      }

      // 모든 API 호출 실패 시
      if (!imageUrl) {
        setImageUrl('/images/OOPS.png')
      }
      setLoading(false)
    }

    fetchMetaImage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, apiUrls])

  const handleImageError = () => {
    setImageUrl('/images/OOPS.png')
  }

  return (
    <div>
      {loading ? (
        <Image
          src="/images/Loading_img.png"
          alt="Loading"
          width={300}
          height={300}
          priority={true}
          className="animate-pulse rounded-[1.5rem]"
        />
      ) : (
        <Image
          src={imageUrl!}
          alt="Preview"
          width={300}
          height={300}
          className="rounded-[1.5rem]"
          priority={true}
          onError={handleImageError}
        />
      )}
    </div>
  )
}

export default LinkImage
