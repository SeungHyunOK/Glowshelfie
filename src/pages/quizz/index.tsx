import { useEffect, useState } from 'react'
import Button from '@/components/Button'
import { AnswerOption } from '@/type/answerOption'
import Result from '@/components/Result'
import Head from 'next/head'
import Footer from '@/components/Footer'

export default function Quizz() {
  const [isStarted, setIsStarted] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<AnswerOption[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const questions = [
    {
      question: (
        <div className="flex flex-col">
          <span>What&apos;s your skin type?</span>
          <span className="ph:text-xl">Choose one</span>
        </div>
      ),
      options: [
        'Normal',
        'Dry',
        'Oily',
        'Combination',
        'Sensitive',
      ] as AnswerOption[],
    },
    {
      question: (
        <div className="flex flex-col">
          <span>What&apos;s your skin concerns?</span>
          <span className="ph:text-xl">Choose one</span>
        </div>
      ),
      options: [
        'Dark spot & Pigmentation',
        'Acne & Breakouts',
        'Blemishes & Sensitive',
        'Hydrating',
        'Anti-aging & Wrinkles',
        'Pores',
      ] as AnswerOption[],
    },
  ]

  const handleStart = () => {
    setIsStarted(true)
    localStorage.setItem('isStarted', 'true')
  }

  const handleBack = () => {
    const prevStep = step - 1
    setStep(prevStep)
    localStorage.setItem('step', String(prevStep))
  }

  const handleRestart = () => {
    setIsStarted(false)
    setShowResults(false)
    setAnswers([])
    setStep(0)
    localStorage.clear()
  }

  useEffect(() => {
    const savedAnswers = localStorage.getItem('answers')
    const savedStep = localStorage.getItem('step')
    const savedIsStarted = localStorage.getItem('isStarted') === 'true'
    const savedShowResults = localStorage.getItem('showResults') === 'true'

    if (savedAnswers) setAnswers(JSON.parse(savedAnswers))
    if (savedStep) setStep(Number(savedStep))
    setIsStarted(savedIsStarted)
    setShowResults(savedShowResults)
  }, [])

  const handleAnswer = (answer: AnswerOption) => {
    const updatedAnswers = [...answers, answer]
    setAnswers(updatedAnswers)
    localStorage.setItem('answers', JSON.stringify(updatedAnswers))

    if (step < questions.length - 1) {
      setStep(step + 1)
      localStorage.setItem('step', String(step + 1))
    } else {
      setIsLoading(true)
      setTimeout(() => {
        setShowResults(true)
        setIsLoading(false)
        localStorage.setItem('showResults', 'true')
      }, 2000)
    }
  }

  return (
    <>
      <div className="flex min-h-screen flex-col">
        <Head>
          <title>Glowshelfie-Quizz</title>
          <meta
            name="description"
            content="Discover the best skincare routine tailored for your skin type and concerns. Take our quiz to find the perfect products for you!"
          />
          <meta
            name="keywords"
            content="glowshelfie, korean skincare, k beauty, glass skin, skincare routine, glowy skin, skincare steps"
          />
          <meta
            property="og:title"
            content="Personalized Skincare Routine Quiz"
          />
          <meta
            property="og:description"
            content="Discover the best skincare routine tailored for your skin type and concerns. Take our quiz to find the perfect products for you!"
          />
          <meta
            property="og:image"
            content="https://glowshelfie.vercel.app/images/og_image.png"
          />
          <link rel="canonical" href="https://glowshelfie.vercel.app/quizz" />
          <meta
            property="og:url"
            content="https://glowshelfie.vercel.app/quizz"
          />
        </Head>

        <div className="relative mx-5 my-5 flex h-5/6 flex-col items-center justify-center rounded-lg bg-[#D9D9D9] p-10 shadow-md shadow-gray-300 ph:p-6">
          {!isStarted ? (
            <>
              <span className="mx-2 mb-20 flex flex-col gap-12 text-center font-bold ph:mb-10 ph:gap-5">
                <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl lg:text-6xl xl:text-7xl">
                  🐰 Build Your Perfect{' '}
                  <span className="text-pink-600">Skincare Routine</span> 💓✨
                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  ✨ Take this quiz to find out which routine is perfect for
                  your skin 👸✨
                </h2>
              </span>
              <Button
                className="rounded-lg bg-[#F7DFDE] px-6 py-3 text-2xl font-bold shadow-md transition-transform duration-200 hover:scale-105 hover:bg-amber-200 ph:py-2 ph:text-lg"
                onClick={handleStart}
              >
                Let&apos;s start! 💓✨
              </Button>
            </>
          ) : isLoading ? (
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="mb-6 text-xl font-bold ph:text-lg">
                ✨ Loading your results... ✨
              </h2>
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-600 border-t-transparent"></div>
            </div>
          ) : showResults ? (
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="mb-6 text-xl font-bold ph:text-lg">
                🐰 Here is your personalized Korean skincare routine💓✨
                <br />✨ USE DISCOUNT & REWARD CODE TO SAVE MONEY ✨
              </h2>
              <Result answers={answers} />
              <Button
                className="mt-6 rounded-lg bg-[#F7DFDE] px-4 py-2 text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-amber-200"
                onClick={handleRestart}
              >
                Restart Quiz
              </Button>
            </div>
          ) : (
            <div className="flex w-full max-w-xl flex-col items-center justify-center p-4 text-center">
              <div className="h-4 w-full rounded-full bg-gray-300">
                <div
                  className="transition-width h-4 rounded-full bg-[#F7DFDE] duration-300"
                  style={{ width: `${((step + 1) / questions.length) * 70}%` }}
                />
              </div>
              <div className="mb-6 mt-8 text-2xl font-bold ph:text-xl">
                {questions[step].question}
              </div>
              <div className="mb-6 flex flex-wrap justify-center gap-3">
                {questions[step].options.map((option, index) => (
                  <Button
                    key={index}
                    className="rounded-lg bg-[#F7DFDE] px-4 py-2 text-lg shadow-md transition-transform duration-200 hover:scale-105 hover:bg-amber-200 ph:px-3 ph:py-2"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              {step !== 0 && (
                <Button
                  className="rounded-lg bg-[#F7F0DE] px-3 py-2 text-lg font-bold transition-transform duration-200 hover:scale-105 hover:bg-amber-200"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
