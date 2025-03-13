import Link from 'next/link'
import { useState } from 'react'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative z-50 pc:hidden">
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        <div className="space-y-1">
          <span
            className={`block h-1 w-6 transform bg-black transition-transform ${
              isOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          ></span>
          <span
            className={`block h-1 w-6 bg-black transition-opacity ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-1 w-6 transform bg-black transition-transform ${
              isOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          ></span>
        </div>
      </button>
      <div
        className={`fixed left-0 top-0 h-full transform bg-white shadow-lg transition-all ${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } ph:w-full tab:w-1/2`}
      >
        <button
          className="absolute left-4 top-4 p-2 font-bold text-black hover:text-red-500 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ✖
        </button>

        <ul
          className="mx-4 mt-12 flex h-full flex-col space-y-2"
          onClick={toggleMenu}
        >
          <li>
            <Link
              href="/"
              className="block rounded-md p-3 text-gray-800 transition-colors hover:bg-gray-100 hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/quiz"
              className="block rounded-md p-3 text-gray-800 transition-colors hover:bg-gray-100 hover:text-blue-600"
            >
              Quiz
            </Link>
          </li>
          <li>
            <Link
              href="/shop"
              className="block rounded-md p-3 text-gray-800 transition-colors hover:bg-gray-100 hover:text-blue-600"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block rounded-md p-3 text-gray-800 transition-colors hover:bg-gray-100 hover:text-blue-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block rounded-md p-3 text-gray-800 transition-colors hover:bg-gray-100 hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
