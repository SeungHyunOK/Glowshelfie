import {
  normalAnti,
  normalBlemishes,
  normalDark,
  normalHydrating,
  normalPores,
  normalAcne,
  normalAll,
} from '@/store/normal'
import {
  dryPores,
  dryAnti,
  dryHydrating,
  dryBlemishes,
  dryDark,
  dryAcne,
  dryAll,
} from '@/store/dry'
import {
  oilyPores,
  oilyAnti,
  oilyHydrating,
  oilyBlemishes,
  oilyDark,
  oilyAcne,
  oilyAll,
} from '@/store/oily'
import {
  combinationPores,
  combinationAnti,
  combinationHydrating,
  combinationBlemishes,
  combinationDark,
  combinationAcne,
  combinationAll,
} from '@/store/combination'
import {
  sensitivePores,
  sensitiveAnti,
  sensitiveHydrating,
  sensitiveBlemishes,
  sensitiveDark,
  sensitiveAcne,
  sensitiveAll,
} from '@/store/sensitive'
import Products from '@/type/products'
import LinkImage from '@/components/LinkImage'
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
    } else if (answers.includes('Dark spot & Acne & Blemish & Pores')) {
      recommendedProducts = normalAll
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
    } else if (answers.includes('Dark spot & Acne & Blemish & Pores')) {
      recommendedProducts = dryAll
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
    } else if (answers.includes('Dark spot & Acne & Blemish & Pores')) {
      recommendedProducts = oilyAll
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
    } else if (answers.includes('Dark spot & Acne & Blemish & Pores')) {
      recommendedProducts = combinationAll
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
    } else if (answers.includes('Dark spot & Acne & Blemish & Pores')) {
      recommendedProducts = sensitiveAll
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
    <div className="flex flex-wrap items-center justify-center gap-7 text-center ph:gap-3 tab:gap-5">
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
              className="flex h-[30rem] max-w-[18rem] flex-col items-center justify-center rounded-2xl bg-white p-3 ph:h-[29rem]"
            >
              {isStepVisible && (
                <h1 className="text-2xl font-bold ph:text-sm tab:text-lg">
                  Step {stepCounter++}
                </h1>
              )}
              <h2 className="text-lg font-semibold ph:text-sm tab:text-base">
                {step}
              </h2>
              <hr className="my-2 w-full border-t-2 border-black" />
              <h3 className="text-base ph:text-sm">{product.name}</h3>
              <a
                href={product.link}
                hrefLang="en"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="origin"
              >
                <LinkImage>{product.link}</LinkImage>
                <Button className="mt-4 rounded-2xl bg-[#F7DFDE] px-14 py-2 shadow-lg hover:bg-amber-200 ph:w-full">
                  Buy
                </Button>
              </a>
            </div>
          )
        })}
    </div>
  )
}
