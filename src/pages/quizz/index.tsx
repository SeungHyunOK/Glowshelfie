import { useState } from 'react'
import Button from '@/components/button'
import { AnswerOption } from '@/type/answerOption'
import Result from '@/components/result'
import Head from 'next/head'

export default function Quizz() {
  const [isStarted, setIsStarted] = useState(false)
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<AnswerOption[]>([])
  const [email, setEmail] = useState('')
  const [showEmailInput, setShowEmailInput] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      question: (
        <div className="flex flex-col gap-8">
          <span className="text-[2.3rem]">What&apos;s your skin type?</span>
          <span className="text-base text-[1.7rem]">Choose one</span>
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
        <div className="flex flex-col gap-8">
          <span className="text-[2.3rem]">What&apos;s your skin concerns?</span>
          <span className="text-base text-[1.7rem]">Choose one</span>
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

  const handleAnswer = (answer: AnswerOption) => {
    setAnswers([...answers, answer])

    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setShowEmailInput(true)
    }
  }

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setShowEmailInput(false)
    setShowResults(true)

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        const data = await response.json()
        console.log(data.message)
      } else {
        const errorText = await response.text()
        console.log('Fail to send email:', errorText)
      }
    } catch (error) {
      console.log('Error sending email', error)
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
          content="skincare, skincare quiz, personalized skincare, beauty quiz, skin type quiz"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/quizz" />
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
          content="https://yourdomain.com/images/quiz-thumbnail.jpg"
        />
      </Head>
      <div className="flex justify-center items-center flex-col">
        <div className="flex w-5/6 h-5/6 flex-col flex-wrap bg-[#D9D9D9] py-28 shadow-lg ph:py-7 shadow-gray-500 justify-center items-center rounded-2xl  mx-7 relative ph:mt-3 mt-[6.18rem] mb-[9.5rem]">
          {!isStarted ? (
            <>
              <span className="flex flex-col font-bold text-center gap-20 mb-28">
                <span className="text-[2.3rem]">
                  Let&apos;s build your personalized skincare routine!
                </span>
                <span className="text-[1.7rem]">
                  Take this quiz to find out which routine is perfect for your
                  skin.
                </span>
              </span>
              <Button
                className="bg-[#F7DFDE] hover:bg-amber-200 text-[2.5rem] px-8 py-4 font-bold rounded-2xl shadow-gray-500 shadow-lg"
                onClick={handleStart}
              >
                Let&apos;s start!
              </Button>
            </>
          ) : showEmailInput ? (
            <div className="flex flex-col flex-wrap items-center justify-center p-3">
              <span className="text-[2.3rem] text-center font-bold mb-20 ph:text-3xl">
                What&apos;s your email address?
              </span>
              <form
                onSubmit={handleEmailSubmit}
                className="p-1 gap-3 flex ph:flex-col justify-center items-stretch"
              >
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border focus:outline-black focus:border-[#F7F0DE] transition-all duration-300 ease-in-out placeholder-gray-400 shadow-sm"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  title="Please enter a valid email address"
                  required
                />
                <Button
                  className="bg-[#F7F0DE] hover:bg-amber-200 text-xl p-2 font-bold rounded-2xl h-full"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
          ) : showResults ? (
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold mb-9">
                ❤️Here are the best products for you!❤️
              </h2>
              <p>These are discount code!</p>
              <ul>
                <li>Beauty of Joseon code: GLOWSHELFIE</li>
                <li>MIXSOON Code : GLOW10</li>
                <li>Yesstyle Code : GLOWSHELFIE0</li>
                <li>Olive Young Code : GLOWSHELFIE1</li>
                <li>Stylevana code : INF10GSHELFIE</li>
              </ul>
              <Result answers={answers} />
              <Button
                className="bg-[#F7DFDE] hover:bg-amber-200 shadow-lg text-2xl p-2 rounded-2xl mt-9"
                onClick={() => {
                  setIsStarted(false)
                  setShowResults(false)
                  setAnswers([])
                  setEmail('')
                  setStep(0)
                }}
              >
                Restart Quiz
              </Button>
            </div>
          ) : (
            <div className="flex flex-wrap flex-col p-2 text-center justify-center items-center">
              <div className="font-bold mb-10 mt-12">
                {questions[step].question}
              </div>
              <div className="flex flex-wrap gap-4 mb-10 justify-center">
                {questions[step].options.map((option, index) => (
                  <Button
                    key={index}
                    className="bg-[#F7DFDE] hover:bg-amber-200 shadow-lg text-2xl p-2 rounded-2xl"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              {step !== 0 && (
                <Button
                  className="bg-[#F7F0DE] py-2 px-4 text-2xl font-bold rounded-3xl hover:bg-amber-200"
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
