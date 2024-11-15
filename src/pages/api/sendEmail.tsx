import { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email } = req.body

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Here’s a Gift Just for You!',
      text: 'Thank you for taking the time to complete our quiz!We really appreciate your input and, as a token of our gratitude, here’s an exclusive coupon for you to use on your next purchase.Happy shopping, and enjoy your discount!',
      html: `
      <div style="
      max-width: 500px; 
      margin: 0 auto; 
      padding: 20px; 
      background-color: #ffffff; 
      border-radius: 10px; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif; 
      color: #333;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center; 
    ">
  <h1 style="
        color: #333; 
        font-size: 24px; 
        font-weight: bold; 
        text-align: center; 
        margin-bottom: 15px;
      ">
    Thank You for Completing Our Quiz!
  </h1>
  <p style="
        font-size: 16px; 
        line-height: 1.6; 
        text-align: center; 
        margin-bottom: 20px;
      ">
    We’re so glad you took our quiz! Here’s a special coupon just for you to enjoy on your next purchase. Happy shopping!
  </p>
  <ul style="
        list-style-type: none; 
        padding: 0; 
        margin: 0; 
        font-size: 16px; 
        text-align: center;        
        color: #806A69;
      ">
    <li style="margin: 8px 0;"><strong>Beauty of Joseon code:</strong> GLOWSHELFIE</li>
    <li style="margin: 8px 0;"><strong>MIXSOON Code:</strong> GLOW10</li>
    <li style="margin: 8px 0;"><strong>Yesstyle Code:</strong> GLOWSHELFIE0</li>
    <li style="margin: 8px 0;"><strong>Olive Young Code:</strong> GLOWSHELFIE1</li>
    <li style="margin: 8px 0;"><strong>Stylevana code:</strong> INF10GSHELFIE</li>
</ul>
<a href="https://linktr.ee/glowshelfie?fbclid=PAZXh0bgNhZW0CMTEAAaZCf0XU9eIM21L5x8MuSXoj9E3xnaVBWY58AY1CPVsTgWBE5rXxLoUCDRA_aem_8crIKW9UsNErdPiZuFznQQ">
    <button style="
        padding: 10px 20px; 
        font-size: 16px;
        background-color: #F7DFDE;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    ">
        Shop Now
    </button>
</a>
</div>
      `,
    }

    try {
      await transporter.sendMail(mailOptions)
      res.status(200).json({ message: 'Email sent successfully!' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Failed to send email.' })
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}
