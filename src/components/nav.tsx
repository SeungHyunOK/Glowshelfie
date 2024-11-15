import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <div className="w-full h-[4.375rem] ph:h-[3.125rem] flex flex-wrap items-center justify-between ph:px-2 px-10 bg-opacity-20 bg-black shadow-md">
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

        <div className="flex flex-wrap gap-[0.6rem] ph:gap-0 hover:opacity-80 cursor-pointer">
          <Image
            src="/images/Glowshelfie_logo.png"
            width={40}
            height={40}
            alt="Logo"
            className="ph:w-[1.875rem] ph:h-[1.875rem]"
          />
          <span className="text-[3.125rem] ph:text-3xl font-bold text-black">
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
                className="ph:w-[1.875rem] ph:h-[1.875rem]"
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
                className="ph:w-[1.875rem] ph:h-[1.875rem]"
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
                className="ph:w-[1.875rem] ph:h-[1.875rem]"
              />
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
