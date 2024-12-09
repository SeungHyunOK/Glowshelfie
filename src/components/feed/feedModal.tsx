import { ReactNode } from 'react'
import Button from '@/components/button'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  children?: ReactNode
  className?: string
}

export default function Modal({ children, isOpen, closeModal }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isOpen
          ? 'animate-fadeInScale pointer-events-auto opacity-100'
          : 'animate-fadeOutScale pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-70 transition-opacity duration-300"
        onClick={closeModal}
      />
      <div className="relative h-4/5 max-h-screen w-3/5 transform overflow-y-auto rounded-lg bg-white p-4 shadow-lg transition-transform duration-300 ph:h-full ph:w-full tab:h-full tab:w-full">
        <Button
          onClick={closeModal}
          className="absolute right-3 top-3 z-10 text-2xl text-gray-600 transition-transform duration-300 hover:scale-110 hover:text-gray-800"
          aria-label="Close modal"
        >
          ✖
        </Button>
        {children}
      </div>
    </div>
  )
}
