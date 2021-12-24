import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'

import { getAllPostsFrontmatter } from '@libs/mdx'
import { Post, PostType } from '@libs/types'

import Container from '@components/Container'
import Hero from '@components/Hero'
import PostList from '@components/PostList'

interface Props {
  allPosts: Post[]
}

const HomePage: NextPage<Props> = ({ allPosts }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredPosts = allPosts.filter((post) =>
    `${post?.frontmatter?.title} ${post?.frontmatter?.excerpt}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  return (
    <Container>
      <Hero />
      <div className="relative w-full mt-4">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search articles"
          className="block w-full px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-md focus:border-blue-500 focus:border-2 outline-none"
        />
        <svg
          className="absolute w-5 h-5 text-gray-400 right-3 top-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <PostList posts={filteredPosts} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts: PostType[] = getAllPostsFrontmatter()
  return {
    props: {
      allPosts
    }
  }
}

export default HomePage
