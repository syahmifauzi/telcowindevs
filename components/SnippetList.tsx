import Link from 'next/link'

import SnippetIcon from './SnippetIcon'

import { Snippet } from '@libs/types'

interface Props {
  snippets: Snippet[]
}

const SnippetList = ({ snippets }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {!snippets.length && (
        <p className="mb-4 text-gray-600">No snippets found.</p>
      )}
      {snippets.map((snippet) => {
        const { title, description, icon } = snippet.frontmatter
        return (
          <Link key={snippet.slug} href={`/snippets/${snippet.slug}`}>
            <a className="bg-white border border-gray-200 p-4 rounded-md">
              <SnippetIcon icon={`${icon}`} />
              <h2 className="font-semibold mt-2">{title}</h2>
              <p className="font-light mt-2">{description}</p>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default SnippetList
