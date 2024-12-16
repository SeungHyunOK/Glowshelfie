import Button from '@/components/button'
import Image from 'next/image'
import { useState } from 'react'

interface DiscountcodeProps {
  isOpen: boolean
  closeDiscount: () => void
}

export default function Discountcode({
  isOpen,
  closeDiscount,
}: DiscountcodeProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending your email... Please wait.')
    if (!email) {
      alert('Please enter a valid email address.')
      return
    }

    fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Email sent successfully!')
          closeDiscount()
          setStatus('')
        } else {
          setStatus('Invalid email address. Please check and try again.')
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error)
        alert('An error occurred. Please try again later.')
      })

    setEmail('')
  }

  return (
    <>
      {isOpen && (
        <div
          className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center opacity-100 transition-all duration-300"
          aria-hidden={!isOpen}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"
            onClick={closeDiscount}
          />
          <div className="relative flex max-h-screen transform animate-fadeInScale flex-col items-center justify-center gap-6 overflow-y-auto rounded-lg bg-white p-8 shadow-lg transition-transform duration-300 ph:p-4">
            <Button
              onClick={closeDiscount}
              className="absolute right-3 top-3 z-10 text-2xl text-gray-600 transition-transform duration-300 hover:scale-110 hover:text-gray-800"
              aria-label="Close modal"
            >
              ✖
            </Button>
            <div className="relative h-8 w-8">
              <Image
                src="/images/Glowshelfie_logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 1.875rem, 3.1rem"
              />
            </div>
            <h1 className="text-3xl font-bold ph:text-lg tab:text-xl">
              💸Save money with discount code
            </h1>
            <h4 className="text-lg text-stone-500 ph:text-sm tab:text-base">
              📩Receive your discount code via email!
            </h4>
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-6"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-center text-gray-700 placeholder-gray-400 focus:border-[#F7DFDE] focus:outline-none focus:ring-2 focus:ring-[#F7DFDE]"
              />
              {status && (
                <p
                  className={`text-center text-sm font-medium ${
                    status === 'Sending your email... Please wait.'
                      ? 'text-blue-500'
                      : status === 'Email sent successfully!'
                        ? 'text-green-500'
                        : 'text-red-500'
                  }`}
                >
                  {status}
                </p>
              )}
              <div className="flex w-full items-center gap-2 font-bold">
                <Button
                  type="submit"
                  className="w-1/2 rounded-lg bg-pink-500 p-2 text-white shadow-sm transition duration-200 ease-in-out hover:bg-pink-600 hover:shadow-md focus:ring focus:ring-pink-300"
                >
                  Claim Discount
                </Button>
                <Button
                  onClick={closeDiscount}
                  className="w-1/2 rounded-lg p-2 text-pink-500 shadow-sm transition duration-200 ease-in-out hover:bg-gray-100 hover:text-pink-600 focus:ring focus:ring-pink-300"
                >
                  No Thanks
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
