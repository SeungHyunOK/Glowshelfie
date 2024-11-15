import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface LinkImageProps {
  children: string
}

const LinkImage: React.FC<LinkImageProps> = ({ children }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 클라이언트 측에서만 실행
      const fetchMetaImage = async () => {
        try {
          const proxyUrl = 'https://api.allorigins.win/get?url='
          const response = await axios.get(
            `${proxyUrl}${encodeURIComponent(children)}`,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          )
          const htmlString = response.data.contents
          const imageMatch = htmlString.match(
            /<meta property="og:image" content="(.*?)"/
          )
          if (imageMatch && imageMatch[1]) {
            setImageUrl(imageMatch[1])
          }
        } catch (error) {
          console.error('Error fetching meta image:', error)
        }
      }
      fetchMetaImage()
    }
  }, [children])

  return (
    <div>
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt="Preview"
          width={300}
          height={300}
          style={{ borderRadius: '1.5rem' }}
        />
      ) : (
        <p className="underline decoration-blue-500 text-blue-500">
          Product Purchase Link
        </p>
      )}
    </div>
  )
}

export default LinkImage
