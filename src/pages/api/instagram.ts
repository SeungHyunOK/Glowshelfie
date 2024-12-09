import type { NextApiRequest, NextApiResponse } from 'next'

const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media'
const FIELDS =
  'id,caption,media_type,media_url,permalink,thumbnail_url,timestamp'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accessToken = process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN

  if (!accessToken) {
    res
      .status(500)
      .json({ message: 'Access token is missing in environment variables' })
    return
  }

  try {
    const response = await fetch(
      `${INSTAGRAM_API_URL}?fields=${FIELDS}&access_token=${accessToken}`
    )
    const data = await response.json()

    if (data.error) {
      res
        .status(500)
        .json({ message: 'Instagram API error', error: data.error })
      return
    }

    res.status(200).json(data.data) // Instagram 피드 데이터
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Instagram data', error })
  }
}
