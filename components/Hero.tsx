import { SITE_TITLE_SHORT } from '@libs/constants'

const Hero = () => {
  return (
    <div
      className="h-96 bg-cover bg-center text-white object-fill -mx-4"
      style={{ backgroundImage: `url('/static/images/hero.jpg')` }}>
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
