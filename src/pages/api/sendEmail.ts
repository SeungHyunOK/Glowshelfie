import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { email } = req.body // 프론트엔드에서 보내는 email 데이터만 받음

  if (!email) {
    return res.status(400).json({ message: 'Email is required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER, // 발신자 이메일
      to: email, // 수신자 이메일
      subject: '🎉 Exclusive Discount Codes for You!',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f9f9f9; color: #333;">
          <div style="max-width: 600px; margin: 20px auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="background-color: #ff77a9; color: #ffffff; padding: 15px; text-align: center; border-radius: 8px 8px 0 0; font-size: 20px; font-weight: bold;">
              🎉 Hi beautiful souls 💓🥹
            </div>
            <div style="padding: 20px; text-align: left;">
              <h1 style="font-size: 24px; color: #333; text-align: center; margin-bottom: 20px;">Get Your Exclusive Discount Codes!</h1>
              <p>You can go to the below trustful and complete websites:</p>
              <ul style="list-style-type: none; padding: 0;">
                <li style="margin-bottom: 10px;">
                  <a href="https://bit.ly/3T51R8y" target="_blank" style="color: #28a745; text-decoration: none; font-weight: bold;">
                    Olive Young Global
                  </a>
                  with code <span style="color: #d9534f;">GLOWSHELFIE1</span>
                </li>
                <li style="margin-bottom: 10px;">
                  <a href="https://bit.ly/4bM3ZJt" target="_blank" style="color: #28a745; text-decoration: none; font-weight: bold;">
                    Yesstyle
                  </a>
                  with code <span style="color: #d9534f;">GLOWSHELFIE0</span>
                </li>
                <li style="margin-bottom: 10px;">
                  <a href="https://www.stylevana.com/" target="_blank" style="color: #28a745; text-decoration: none; font-weight: bold;">
                    Stylevana
                  </a>
                  with code <span style="color: #d9534f;">INF10GSHELFIE</span>
                </li>
              </ul>
              <p style="margin-top: 20px;">Use these codes for more discounts and save money 💓</p>
              <p style="margin-top: 20px; text-align: center;">Happy shopping 🛍</p>
            </div>
            <div style="margin-top: 20px; text-align: center; font-size: 12px; color: #666;">
              <p>This email was sent from <a href="https://glowshelfie.vercel.app/" target="_blank" style="text-decoration: underline;">Glowshelfie.</a></p>
            </div>
          </div>
        </body>
        </html>
      `.trim(),
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error sending email' })
  }
}
