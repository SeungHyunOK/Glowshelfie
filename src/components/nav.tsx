import Image from 'next/image'
import Link from 'next/link'

type SocialLinkProps = {
  href: string
  imgSrc: string
  altText: string
  ariaLabel: string
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  imgSrc,
  altText,
  ariaLabel,
}) => (
  <li className="transition-transform duration-300 hover:scale-110">
    <a
      href={href}
      hrefLang="en"
      target="_blank"
      rel="noopener noreferrer"
      referrerPolicy="origin"
      aria-label={ariaLabel}
    >
      <Image
        src={imgSrc}
        width={50}
        height={50}
        alt={altText}
        priority
        className="hover:opacity-80 ph:h-6 ph:w-6"
        sizes="(max-width: 768px) 1.5rem, 3.125rem"
      />
    </a>
  </li>
)

export default function Nav() {
  return (
    <nav className="flex h-16 w-full items-center justify-between bg-black bg-opacity-20 px-10 shadow-md transition-all duration-300 hover:shadow-lg ph:h-10 ph:px-2">
      {/* Logo Section */}
      <Link
        href="/"
        className="flex items-center gap-[0.6rem] hover:opacity-80 ph:gap-0"
        aria-label="Go to home page"
      >
        <div className="relative h-[3.1rem] w-[3.1rem] ph:h-6 ph:w-6">
          <Image
            src="/images/Glowshelfie_logo.png"
            alt="Glowshelfie Logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 1.875rem, 3.1rem"
          />
        </div>
        <span className="text-3xl font-bold text-black transition-transform duration-300 hover:scale-105 ph:text-xl">
          Glowshelfie
        </span>
      </Link>

      {/* Social Links Section */}
      <ul className="flex gap-5 ph:gap-2">
        <SocialLink
          href="https://www.instagram.com/glowshelfie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          imgSrc="/icons/Instagram_icon.svg"
          altText="Instagram Icon"
          ariaLabel="Visit Glowshelfie's Instagram"
        />
        <SocialLink
          href="https://www.tiktok.com/@glowshelfie?is_from_webapp=1&sender_device=pc"
          imgSrc="/icons/Tiktok_icon.svg"
          altText="TikTok Icon"
          ariaLabel="Visit Glowshelfie's TikTok"
        />
        <SocialLink
          href="https://youtube.com/@glowshelfie?feature=shared"
          imgSrc="/icons/Youtube_icon.svg"
          altText="YouTube Icon"
          ariaLabel="Visit Glowshelfie's YouTube channel"
        />
      </ul>
    </nav>
  )
}
