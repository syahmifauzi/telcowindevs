import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

import { getAllSnippetsSlug, getSnippetBySlug } from '@libs/mdx'
import { Code, Frontmatter } from '@libs/types'

import Container from '@components/Container'
import BackButton from '@components/BackButton'
import SnippetIcon from '@components/SnippetIcon'

interface Props {
  code: Code
  frontmatter: Frontmatter
}

const SnippetsPage: NextPage<Props> = ({ frontmatter, code }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  const { title, description, icon } = frontmatter

  return (
    <Container title={title}>
      <div className="max-w-3xl mx-auto my-8">
        <div className="flex justify-between">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
            {title}
          </h1>
          <SnippetIcon icon={`${icon}`} />
        </div>
        <p className="mb-4 text-gray-600">{description}</p>
      </div>
      <article className="max-w-3xl mx-auto my-8">
        <div className="prose sm:prose-md md:prose-lg max-w-full">
          <Component />
        </div>
        <BackButton />
      </article>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSnippetsSlug().map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { code, frontmatter } = await getSnippetBySlug(`${params?.slug}`)
  return {
    props: {
      code,
      frontmatter
    }
  }
}

export default SnippetsPage
