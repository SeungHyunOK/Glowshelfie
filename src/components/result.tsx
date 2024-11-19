import {
  normalAnti,
  normalBlemishes,
  normalDark,
  normalHydrating,
  normalPores,
  normalAcne,
} from '@/store/normal'
import {
  dryPores,
  dryAnti,
  dryHydrating,
  dryBlemishes,
  dryDark,
  dryAcne,
} from '@/store/dry'
import {
  oilyPores,
  oilyAnti,
  oilyHydrating,
  oilyBlemishes,
  oilyDark,
  oilyAcne,
} from '@/store/oily'
import {
  combinationPores,
  combinationAnti,
  combinationHydrating,
  combinationBlemishes,
  combinationDark,
  combinationAcne,
} from '@/store/combination'
import {
  sensitivePores,
  sensitiveAnti,
  sensitiveHydrating,
  sensitiveBlemishes,
  sensitiveDark,
  sensitiveAcne,
} from '@/store/sensitive'
import Products from '@/type/products'
import Linkimage from '@/components/Linkimage'
import Button from '@/components/Button'

interface ResultProps {
  answers: string[]
}

export default function Result({ answers }: ResultProps) {
  let recommendedProducts: Products | null = null

  if (answers.includes('Normal')) {
    if (answers.includes('Acne & Breakouts')) {
      recommendedProducts = normalAcne
    } else if (answers.includes('Pores')) {
      recommendedProducts = normalPores
    } else if (answers.includes('Hydrating')) {
      recommendedProducts = normalHydrating
    } else if (answers.includes('Dark spot & Pigmentation')) {
      recommendedProducts = normalDark
    } else if (answers.includes('Blemishes & Sensitive')) {
      recommendedProducts = normalBlemishes
    } else {
      recommendedProducts = normalAnti
    }
  } else if (answers.includes('Dry')) {
    if (answers.includes('Acne & Breakouts')) {
      recommendedProducts = dryAcne
    } else if (answers.includes('Pores')) {
      recommendedProducts = dryPores
    } else if (answers.includes('Hydrating')) {
      recommendedProducts = dryHydrating
    } else if (answers.includes('Dark spot & Pigmentation')) {
      recommendedProducts = dryDark
    } else if (answers.includes('Blemishes & Sensitive')) {
      recommendedProducts = dryBlemishes
    } else {
      recommendedProducts = dryAnti
    }
  } else if (answers.includes('Oily')) {
    if (answers.includes('Acne & Breakouts')) {
      recommendedProducts = oilyAcne
    } else if (answers.includes('Pores')) {
      recommendedProducts = oilyPores
    } else if (answers.includes('Hydrating')) {
      recommendedProducts = oilyHydrating
    } else if (answers.includes('Dark spot & Pigmentation')) {
      recommendedProducts = oilyDark
    } else if (answers.includes('Blemishes & Sensitive')) {
      recommendedProducts = oilyBlemishes
    } else {
      recommendedProducts = oilyAnti
    }
  } else if (answers.includes('Combination')) {
    if (answers.includes('Acne & Breakouts')) {
      recommendedProducts = combinationAcne
    } else if (answers.includes('Pores')) {
      recommendedProducts = combinationPores
    } else if (answers.includes('Hydrating')) {
      recommendedProducts = combinationHydrating
    } else if (answers.includes('Dark spot & Pigmentation')) {
      recommendedProducts = combinationDark
    } else if (answers.includes('Blemishes & Sensitive')) {
      recommendedProducts = combinationBlemishes
    } else {
      recommendedProducts = combinationAnti
    }
  } else if (answers.includes('Sensitive')) {
    if (answers.includes('Acne & Breakouts')) {
      recommendedProducts = sensitiveAcne
    } else if (answers.includes('Pores')) {
      recommendedProducts = sensitivePores
    } else if (answers.includes('Hydrating')) {
      recommendedProducts = sensitiveHydrating
    } else if (answers.includes('Dark spot & Pigmentation')) {
      recommendedProducts = sensitiveDark
    } else if (answers.includes('Blemishes & Sensitive')) {
      recommendedProducts = sensitiveBlemishes
    } else {
      recommendedProducts = sensitiveAnti
    }
  }

  if (!recommendedProducts) {
    return (
      <p>No matching products found. Please try a different combination.</p>
    )
  }
  let stepCounter = 1

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 text-center">
      {Object.entries(recommendedProducts)
        .filter(([, product]) => product)
        .map(([step, product]) => {
          const isStepVisible = ![
            'Essence (1~2 time a day)',
            'Toner Pads (2~3 times a week)',
            'Treatments (2~3 times a week)',
            'Sheet Masks (2~3 times a week)',
          ].includes(step)

          return (
            <div
              key={step}
              className="flex max-w-[20rem] flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              {isStepVisible && (
                <h1 className="mb-2 text-xl font-bold text-gray-800 sm:text-2xl">
                  Step {stepCounter++}
                </h1>
              )}
              <h3 className="mb-2 text-lg font-semibold text-gray-700 sm:text-xl">
                {step}
              </h3>
              <hr className="mb-4 w-full border-t-2 border-gray-300" />
              <p className="mb-4 text-sm text-gray-600 sm:text-base md:text-lg">
                {product.name}
              </p>
              <a
                href={product.link}
                hrefLang="en"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="origin"
                className="w-full"
                aria-label={`Buy ${product.name} from ${product.store}`}
              >
                <Linkimage>{product.link}</Linkimage>
                <Button className="mt-4 w-full rounded-lg bg-[#F7DFDE] px-4 py-2 text-base font-semibold text-gray-800 shadow-md transition-all duration-300 hover:scale-105 hover:bg-amber-200">
                  Buy
                </Button>
              </a>
            </div>
          )
        })}
    </div>
  )
}
