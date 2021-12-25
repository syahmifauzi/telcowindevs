import { SITE_TITLE_SHORT } from '@libs/constants'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="h-96 text-white -mx-4 relative">
      <Image
        src="/static/images/hero.jpg"
        alt={SITE_TITLE_SHORT}
        layout="fill"
        objectFit="cover"
        className="-z-10"
      />
      <div className="h-full flex flex-col items-center justify-center text-center bg-black/40 px-4">
        <span className="text-4xl sm:text-5xl font-bold">
          {SITE_TITLE_SHORT}
        </span>
        <div className="my-4 w-1/6 border-b-4 border-b-amber-500" />
        <p className="text-sm sm:text-base md:text-lg">
          Docs, blogs, tutorials, and code snippets for Telcowin Developers.
        </p>
      </div>
    </div>
  )
}

export default Hero
