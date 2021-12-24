import { ReactNode } from 'react'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'

import { SITE_TITLE_SHORT } from '@libs/constants'

interface Props {
  children: ReactNode
  title?: string
  customMeta?: any
}

const Container = ({ children, title, ...customMeta }: Props) => {
  const meta = {
    site_name: SITE_TITLE_SHORT,
    title: title ? `${title} | ${SITE_TITLE_SHORT}` : SITE_TITLE_SHORT,
    description: `Docs, blogs, tutorials, and code snippets for Telcowin Developers`,
    author: 'Syahmi Fauzi',
    type: 'website',
    ...customMeta
  }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content="telcowin, salesforce, apex, lwc" />
        <meta name="author" content={meta.author} />
        <link rel="icon" href="/favicon.ico" />
        {/* <meta property="og:url" content={`/${router.asPath}`} /> */}
        {/* <link rel="canonical" href={`/${router.asPath}`} /> */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={meta.site_name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        {/* <meta property="og:image" content={meta.image} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@telcowin" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {/* <meta name="twitter:image" content={meta.image} /> */}
      </Head>
      <Header />
      <div className="container max-w-6xl mx-auto mb-8 px-4">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Container
