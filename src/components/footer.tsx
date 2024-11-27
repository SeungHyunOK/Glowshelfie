type SocialLinkProps = {
  href: string
  text: string
  ariaLabel: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, text, ariaLabel }) => (
  <a
    href={href}
    hrefLang="en"
    target="_blank"
    rel="noopener noreferrer"
    referrerPolicy="origin"
    aria-label={ariaLabel}
    className="transition-opacity duration-300 hover:opacity-80"
  >
    {text}
  </a>
)

export default function Footer() {
  return (
    <footer className="bg-black py-6 text-white">
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-lg ph:text-sm tab:text-base">
          &copy; 2024 Glowshelfie. All rights reserved.
        </h1>
        <nav className="mt-8 flex gap-6 text-lg font-bold ph:mt-4 tab:mt-6">
          <SocialLink
            href="https://www.instagram.com/glowshelfie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            text="Instagram"
            ariaLabel="Visit Glowshelfie's Instagram"
          />
          <SocialLink
            href="https://www.tiktok.com/@glowshelfie?is_from_webapp=1&sender_device=pc"
            text="TikTok"
            ariaLabel="Visit Glowshelfie's TikTok"
          />
          <SocialLink
            href="https://youtube.com/@glowshelfie?feature=shared"
            text="YouTube"
            ariaLabel="Visit Glowshelfie's YouTube channel"
          />
        </nav>
      </div>
    </footer>
  )
}
