import Image from 'next/image'

export default function Nav() {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <ul>
            <li>Quiz</li>
            <li>Buy</li>
          </ul>
        </div>
        <div>
          <Image
            src="/public/images/Glowshelfie_logo.jpg"
            width={22}
            height={22}
            alt="Logo"
          />
        </div>
        <div>
          <Image
            src="/public/icons/Search.svg"
            width={22}
            height={22}
            alt="Search"
          />
        </div>
      </div>
    </>
  )
}
