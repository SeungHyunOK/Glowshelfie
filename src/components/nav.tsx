import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <div className="flex h-[4.375rem] w-full flex-wrap items-center justify-between bg-black bg-opacity-20 px-10 shadow-md ph:h-[3.125rem] ph:px-2">
        {/* <div>
          <ul className="flex text-[2.18rem] font-bold space-x-4">
            <li className="font-semibold hover:text-gray-400 cursor-pointer">
              <Link href="/quizz">Quizz</Link>
            </li>
            <li className="font-semibold hover:text-gray-400 cursor-pointer">
              Buy
            </li>
          </ul>
        </div> */}

        <div className="flex cursor-pointer flex-wrap items-center gap-[0.6rem] hover:opacity-80 ph:gap-0">
          <div className="relative h-[3.1rem] w-[3.1rem] ph:h-[1.875rem] ph:w-[1.875rem]">
            <Image
              src="/images/Glowshelfie_logo.png"
              alt="Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 1.875rem, 3.1rem"
            />
          </div>
          <span className="text-[3.125rem] font-bold text-black ph:text-3xl">
            Glowshelfie
          </span>
        </div>

        <ul className="flex gap-5 ph:gap-1">
          <li>
            <Link
              href="https://www.instagram.com/glowshelfie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              hrefLang="en"
              target="_blank"
              rel="noopener"
              referrerPolicy="origin"
            >
              <Image
                src="/icons/Instagram_icon.svg"
                width={50}
                height={50}
                alt="Instagram"
                className="ph:h-[1.875rem] ph:w-[1.875rem]"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.tiktok.com/@glowshelfie?is_from_webapp=1&sender_device=pc"
              hrefLang="en"
              target="_blank"
              rel="noopener"
              referrerPolicy="origin"
            >
              <Image
                src="/icons/Tiktok_icon.svg"
                width={50}
                height={50}
                alt="Tiktok"
                className="ph:h-[1.875rem] ph:w-[1.875rem]"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://youtube.com/@glowshelfie?feature=shared"
              hrefLang="en"
              target="_blank"
              rel="noopener"
              referrerPolicy="origin"
            >
              <Image
                src="/icons/Youtube_icon.svg"
                width={50}
                height={50}
                alt="Youtube"
                className="ph:h-[1.875rem] ph:w-[1.875rem]"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
