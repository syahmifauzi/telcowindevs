import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import { useMemo } from 'react'

import { getAllPostsSlug, getPostBySlug } from '@libs/mdx'
import { Code, Frontmatter } from '@libs/types'

import Container from '@components/Container'
import MDXComponent from '@components/MDXComponents'
import { BiCalendar, BiTime, BiUser } from 'react-icons/bi'

interface Props {
  code: Code
  frontmatter: Frontmatter
}

const PostPage: NextPage<Props> = ({ code, frontmatter }: Props) => {
  const Component = useMemo(() => getMDXComponent(code), [code])
  const { title, date, readingTime, author } = frontmatter

  return (
    <Container title={title} sitenav>
      <div className="max-w-3xl mx-auto my-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
          {title}
        </h1>
        <div className="font-light text-sm sm:text-base py-2">
          <div className="flex items-center gap-x-1">
            <BiCalendar className="inline" /> {date}
          </div>
          <div className="mt-1 flex items-center gap-x-1">
            <BiTime className="inline" /> {readingTime}
          </div>
          <div className="mt-1 flex items-center gap-x-1">
            <BiUser className="inline" /> By <b>{author?.name}</b>
          </div>
        </div>
        <hr className="border-dashed border-gray-400 my-4" />
        <article className="max-w-3xl mx-auto">
          <div className="prose sm:prose-md md:prose-lg max-w-full">
            <Component components={{ ...MDXComponent }} />
          </div>
        </article>
      </div>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostsSlug().map((slug) => ({ params: { slug } }))
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { code, frontmatter } = await getPostBySlug(`${params?.slug}`)
  return {
    props: {
      code,
      frontmatter
    }
  }
}

export default PostPage
