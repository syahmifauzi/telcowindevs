import type { GetStaticProps, NextPage } from 'next'
import { useState } from 'react'

import { getAllSnippetsFrontmatter } from '@libs/mdx'
import { Snippet, SnippetType } from '@libs/types'

import Container from '@components/Container'
import SnippetList from '@components/SnippetList'

interface Props {
  allSnippets: Snippet[]
}

const SnippetPage: NextPage<Props> = ({ allSnippets }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')
  const filteredSnippets = allSnippets.filter((snippet) =>
    `${snippet?.frontmatter?.title} ${snippet?.frontmatter?.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  return (
    <Container title="Code Snippets">
      <div className="max-w-3xl mx-auto my-8">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Code Snippets
        </h1>
        <p className="mb-4 text-gray-600">
          These are a collection of code snippets we have used in the past and
          saved. Some include a set of instructions.
        </p>
      </div>
      <article className="max-w-3xl mx-auto my-8">
        <div className="relative w-full my-4">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search snippets"
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
        <SnippetList snippets={filteredSnippets} />
      </article>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allSnippets: SnippetType[] = getAllSnippetsFrontmatter()
  return {
    props: {
      allSnippets
    }
  }
}

export default SnippetPage
