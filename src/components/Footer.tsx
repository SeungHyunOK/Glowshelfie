export default function Footer() {
  return (
    <footer className="bg-black py-6 text-white">
      <div className="flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-lg ph:text-sm tab:text-base">
          &copy; 2024 Glowshelfie. All rights reserved.
        </h1>
        <div className="mt-8 flex gap-6 text-lg font-bold ph:mt-4 tab:mt-6">
          <a
            href="https://www.instagram.com/glowshelfie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            hrefLang="en"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="origin"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@glowshelfie?is_from_webapp=1&sender_device=pc"
            hrefLang="en"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="origin"
          >
            Tiktok
          </a>
          <a
            href="https://youtube.com/@glowshelfie?feature=shared"
            hrefLang="en"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="origin"
          >
            Youtube
          </a>
        </div>
      </div>
    </footer>
  )
}
