import { NextPage } from 'next'
import Link from 'next/link'

import Container from '@components/Container'

const Custom404: NextPage = () => {
  return (
    <Container title="404 - Page Not Found">
      <div className="max-w-2xl mx-auto my-16 text-center">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black">
          404 - Page Not Found
        </h1>
        <Link href="/">
          <a className="mx-auto  tracking-wide bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 mt-8 rounded">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  )
}

export default Custom404
