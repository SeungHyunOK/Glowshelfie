import Button from '@/components/button'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending your email... Please wait.')

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setStatus('Email sent successfully!')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus(`Error: ${data.message}`)
      }
    } catch (error) {
      console.error(error)
      setStatus('Something went wrong.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-10 max-w-lg space-y-6 rounded-lg bg-white p-8 shadow-lg pc:h-full"
    >
      <h2 className="text-center text-3xl font-semibold text-gray-700 ph:text-xl tab:text-xl">
        Contact Us
      </h2>
      <p className="text-center text-xl text-gray-500 ph:text-base tab:text-lg">
        For all business inquiries, please reach us out below:
      </p>
      <input
        type="text"
        name="name"
        placeholder="Your Full Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#F7DFDE] focus:outline-none focus:ring-2 focus:ring-[#F7DFDE]"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#F7DFDE] focus:outline-none focus:ring-2 focus:ring-[#F7DFDE]"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="h-36 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-[#F7DFDE] focus:outline-none focus:ring-2 focus:ring-[#F7DFDE]"
      ></textarea>
      <Button
        type="submit"
        className="w-full rounded-lg bg-[#F7DFDE] py-3 font-bold text-gray-700 transition duration-300 hover:bg-pink-500 focus:ring-4"
      >
        Send Email
      </Button>
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
    </form>
  )
}
