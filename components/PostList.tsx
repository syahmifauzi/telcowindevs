import Image from 'next/image'
import Link from 'next/link'

import { Post } from '@libs/types'

interface Props {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {!posts.length && <p className="mb-4 text-gray-600">No posts found.</p>}
      {posts.map((post) => {
        const { thumbnail, title, excerpt } = post.frontmatter
        return (
          <Link key={post.slug} href={`/posts/${post.slug}`}>
            <a className="group">
              <Image
                className="rounded group-hover:scale-105 transition-all duration-500"
                src={`${thumbnail || '/static/images/hero.jpg'}`}
                alt="Picture of the post"
                width={500}
                height={250}
                quality={50}
                placeholder="blur"
                blurDataURL={`${thumbnail || '/static/images/hero.jpg'}`}
              />
              <div className="font-semibold">{title}</div>
              <div className="font-light">{excerpt}</div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

export default PostList
