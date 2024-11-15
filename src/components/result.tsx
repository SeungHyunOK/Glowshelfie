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
import LinkImage from './linkImage'
import Link from 'next/link'

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

  return (
    <div className="flex flex-wrap items-center justify-center text-center gap-3">
      {Object.entries(recommendedProducts)
        .filter(([, product]) => product)
        .map(([step, product], index) => (
          <div
            key={step}
            className="flex flex-col m-4 justify-center items-center"
          >
            <h1 className="font-bold text-xl">Step {index + 1}</h1>
            <h3 className="font-semibold mb-3">{step}</h3>
            <hr className="border-t-2 border-black" />
            <p className="mb-4">{product.name}</p>
            <Link
              href={product.link}
              hrefLang="en"
              target="_blank"
              rel="noopener"
              referrerPolicy="origin"
            >
              <LinkImage>{product.link}</LinkImage>
            </Link>
          </div>
        ))}
    </div>
  )
}
