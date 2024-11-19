import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const socialLinks = [
    {
      href: 'https://www.instagram.com/glowshelfie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
      icon: '/icons/Instagram_icon.svg',
      alt: 'Instagram',
    },
    {
      href: 'https://www.tiktok.com/@glowshelfie?is_from_webapp=1&sender_device=pc',
      icon: '/icons/Tiktok_icon.svg',
      alt: 'TikTok',
    },
    {
      href: 'https://youtube.com/@glowshelfie?feature=shared',
      icon: '/icons/Youtube_icon.svg',
      alt: 'YouTube',
    },
  ]

  return (
    <div className="flex h-[4.375rem] w-full items-center justify-between bg-black bg-opacity-20 px-10 shadow-md ph:h-[3.125rem] ph:px-2">
      <Link
        href="/"
        className="group flex items-center gap-[0.6rem] rounded-md p-2 transition-all duration-200 hover:bg-gray-200 active:scale-95 active:bg-gray-300 ph:gap-0 ph:p-1"
      >
        <div className="relative h-[3.1rem] w-[3.1rem] ph:h-[1.875rem] ph:w-[1.875rem]">
          <Image
            src="/images/Glowshelfie_logo.png"
            alt="Logo"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 1.875rem, 3.1rem"
          />
        </div>
        <h1 className="text-5xl font-bold text-black group-hover:text-gray-700 ph:text-2xl">
          Glowshelfie
        </h1>
      </Link>

      <ul className="flex items-center gap-5 ph:gap-2">
        {socialLinks.map((link) => (
          <li
            key={link.alt}
            className="transition-transform duration-300 hover:scale-110"
          >
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              hrefLang="en"
            >
              <Image
                src={link.icon}
                width={50}
                height={50}
                alt={link.alt}
                className="ph:h-[1.875rem] ph:w-[1.875rem]"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
