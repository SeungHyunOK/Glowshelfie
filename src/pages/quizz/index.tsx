import { useEffect, useState } from 'react'
import Button from '@/components/button'
import { AnswerOption } from '@/type/answerOption'
import Result from '@/components/result'
import Head from 'next/head'
import Link from 'next/link'

export default function Quizz() {
  const [isStarted, setIsStarted] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<AnswerOption[]>([])
  const [showResults, setShowResults] = useState(false)

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
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  useEffect(() => {
    const savedAnswers = localStorage.getItem('answers')
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers))
      setIsStarted(true)
      setShowResults(true)
    }
  }, [])

  const handleAnswer = (answer: AnswerOption) => {
    const updatedAnswers = [...answers, answer]
    setAnswers(updatedAnswers)
    localStorage.setItem('answers', JSON.stringify(updatedAnswers))

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setShowResults(true)
    }
  }

  return (
    <>
      <Head>
        <title>Glowshelfie</title>
        <meta
          name="description"
          content="Discover the best skincare routine tailored for your skin type and concerns. Take our quiz to find the perfect products for you!"
        />
        <meta
          name="keywords"
          content="skincare quiz, personalized skincare routine, skin type quiz, best skincare products, skincare concerns"
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
          content="https://glowshelfi.vercel.app/images/og_image.png"
        />
      </Head>
      <div className="flex flex-col items-center justify-center">
        <div className="relative mx-7 mb-[9.5rem] mt-[6.18rem] flex w-5/6 flex-col flex-wrap items-center justify-center rounded-2xl bg-[#D9D9D9] px-2 py-16 shadow-lg shadow-gray-500 ph:mt-3 ph:py-7">
          {!isStarted ? (
            <>
              <span className="mx-2 mb-28 flex flex-col gap-20 text-center font-bold ph:mb-6 ph:gap-5">
                <h1 className="sm:text-3xl md:text-3xl lg:text-4xl ph:text-2xl">
                  🐰 Let&apos;s build your personalized Korean Skincare routine!
                  💓✨
                </h1>
                <h2 className="text-[1.7rem] ph:text-lg">
                  ✨ Take this quiz to find out which routine is perfect for
                  your skin 👸✨
                </h2>
              </span>
              <Button
                className="rounded-2xl bg-[#F7DFDE] px-8 py-4 text-[2.5rem] font-bold shadow-lg shadow-gray-500 hover:bg-amber-200 ph:text-2xl"
                onClick={handleStart}
              >
                Let&apos;s start! 💓✨
              </Button>
            </>
          ) : showResults ? (
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="mb-9 text-2xl font-bold">
                🐰 Here is your personalized Korean skincare routine💓✨
                <br />✨ USE DISCOUNT & REWARD CODE TO SAVE MONEY ✨
              </h2>
              <ul className="mb-2 flex flex-wrap justify-center gap-2 font-bold">
                <li>
                  <Link
                    href="https://www.yesstyle.com/en/home.html?rco=GLOWSHELFIE0&utm_term=GLOWSHELFIE0&utm_medium=Influencer&utm_source=dynamic&mcg=influencer"
                    hrefLang="en"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Visit yesstyle official website"
                    title="Visit yesstyle official website"
                  >
                    <Button className="rounded-2xl bg-[#F7DFDE] px-3 py-2 shadow-lg hover:bg-amber-200">
                      🛍️ YESSTYLE CODE :{' '}
                      <span className="underline">GLOWSHELFIE0</span>
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://global.oliveyoung.com/?rwardCode=GLOWSHELFIE1&utm_source=influencers"
                    hrefLang="en"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Visit oliveyoung official website"
                    title="Visit oliveyoung official website"
                  >
                    <Button className="rounded-2xl bg-[#F7DFDE] px-3 py-2 shadow-lg hover:bg-amber-200">
                      🫒 OLIVE YOUNG CODE :{' '}
                      <span className="underline">GLOWSHELFIE1</span>
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.stylevana.com/en_US/"
                    hrefLang="en"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Visit stylevana official website"
                    title="Visit stylevana official website"
                  >
                    <Button className="rounded-2xl bg-[#F7DFDE] px-3 py-2 shadow-lg hover:bg-amber-200">
                      💸 STYLEVANA CODE :{' '}
                      <span className="underline">INF10GSHELFIE</span>
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://beautyofjoseon.com/?dt_id=1529790"
                    hrefLang="en"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Visit Beauty of Joseon official website"
                    title="Visit Beauty of Joseon official website"
                  >
                    <Button className="rounded-2xl bg-[#F7DFDE] px-3 py-2 shadow-lg hover:bg-amber-200">
                      👸 BEAUTY OF JOSEON CODE:{' '}
                      <span className="underline">GLOWSHELFIE</span>
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://mixsoon.us/?srsltid=AfmBOooqvCdF_ShGTyE2bVQPu_NSeGm1VYANo6DBmlxfFwC39G7qnNY_"
                    hrefLang="en"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Visit Mixsoon official website"
                    title="Visit Mixsoon official website"
                  >
                    <Button className="rounded-2xl bg-[#F7DFDE] px-3 py-2 shadow-lg hover:bg-amber-200">
                      ✨ MIXSOON CODE :{' '}
                      <span className="underline">GLOW10</span>
                    </Button>
                  </Link>
                </li>
              </ul>
              <Result answers={answers} />
              <Button
                className="mt-9 rounded-2xl bg-[#F7DFDE] p-2 text-2xl shadow-lg hover:bg-amber-200"
                onClick={() => {
                  setIsStarted(false)
                  setShowResults(false)
                  setAnswers([])
                  setStep(0)
                }}
              >
                Restart Quiz
              </Button>
            </div>
          ) : (
            <div className="flex w-4/5 flex-col flex-wrap items-center justify-center p-2 text-center">
              <div className="h-4 w-full rounded-lg bg-gray-300">
                <div
                  className="h-4 rounded-lg bg-[#F7DFDE]"
                  style={{ width: `${((step + 1) / questions.length) * 70}%` }}
                />
              </div>

              <div className="mb-10 mt-12 text-4xl font-bold ph:text-2xl">
                {questions[step].question}
              </div>
              <div className="mb-10 flex flex-wrap justify-center gap-2">
                {questions[step].options.map((option, index) => (
                  <Button
                    key={index}
                    className="rounded-2xl bg-[#F7DFDE] p-2 text-2xl shadow-lg hover:bg-amber-200 ph:text-lg"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              {step !== 0 && (
                <Button
                  className="rounded-3xl bg-[#F7F0DE] px-4 py-2 text-2xl font-bold hover:bg-amber-200 ph:text-lg"
                  onClick={handleBack}
                >
                  Back
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
