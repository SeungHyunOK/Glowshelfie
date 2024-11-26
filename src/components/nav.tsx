import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <div className="flex h-[4.375rem] w-full flex-wrap items-center justify-between bg-black bg-opacity-20 px-10 shadow-md transition-all duration-300 hover:shadow-lg ph:px-2">
        <Link
          className="flex cursor-pointer flex-wrap items-center gap-[0.6rem] hover:opacity-80 ph:gap-0"
          href={'/'}
        >
          <div className="relative h-[3.1rem] w-[3.1rem] ph:h-6 ph:w-6">
            <Image
              src="/images/Glowshelfie_logo.png"
              alt="Logo"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 1.875rem, 3.1rem"
            />
          </div>
          <span className="text-[3.125rem] font-bold text-black transition-transform duration-300 hover:scale-105 ph:text-2xl">
            Glowshelfie
          </span>
        </Link>

        <ul className="flex gap-5 ph:gap-2">
          <li className="transition-transform duration-300 hover:scale-110">
            <a
              href="https://www.instagram.com/glowshelfie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              hrefLang="en"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="origin"
            >
              <Image
                src="/icons/Instagram_icon.svg"
                width={50}
                height={50}
                alt="Instagram"
                className="hover:opacity-80 ph:h-6 ph:w-6"
              />
            </a>
          </li>
          <li className="transition-transform duration-300 hover:scale-110">
            <a
              href="https://www.tiktok.com/@glowshelfie?is_from_webapp=1&sender_device=pc"
              hrefLang="en"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="origin"
            >
              <Image
                src="/icons/Tiktok_icon.svg"
                width={50}
                height={50}
                alt="Tiktok"
                className="hover:opacity-80 ph:h-6 ph:w-6"
              />
            </a>
          </li>
          <li className="transition-transform duration-300 hover:scale-110">
            <a
              href="https://youtube.com/@glowshelfie?feature=shared"
              hrefLang="en"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="origin"
            >
              <Image
                src="/icons/Youtube_icon.svg"
                width={50}
                height={50}
                alt="Youtube"
                className="hover:opacity-80 ph:h-6 ph:w-6"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
