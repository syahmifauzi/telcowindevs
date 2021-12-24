import Link from 'next/link'

import { SITE_TITLE_SHORT } from '@libs/constants'

const Header = () => {
  return (
    <div className="bg-white p-4 border-b-2 border-gray-100">
      <div className="container max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-lg sm:text-xl tracking-wider">
          <Link href="/">{SITE_TITLE_SHORT}</Link>
        </div>
        <nav className="flex space-x-5 font-light text-sm sm:text-base">
          <Link href="/">
            <a className="hidden sm:block">Home</a>
          </Link>
          {/* <Link href="/blog">
            <a>Blog</a>
          </Link> */}
          <Link href="/snippets">
            <a>Snippets</a>
          </Link>
          <Link href="/contact">
            <a>Contact Us</a>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Header
