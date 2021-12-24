import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { bundleMDX } from 'mdx-bundler'

import remarkGfm from 'remark-gfm'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import matter from 'gray-matter'
import readingTime from 'reading-time'

import { PostType } from './types'

const BASE_DIR = 'data'
const POSTS_PATH = join(BASE_DIR, 'posts')
const SNIPPETS_PATH = join(BASE_DIR, 'snippets')

// GET SLUGS
const getAllSlugsFor = (fullPath: string): string[] => {
  const filenames = readdirSync(fullPath)
  return filenames.map((filename) => filename.replace('.mdx', ''))
}
export const getAllPostsSlug = () => getAllSlugsFor(POSTS_PATH)
export const getAllSnippetsSlug = () => getAllSlugsFor(SNIPPETS_PATH)

// GET DATA (CODE & FRONTMATTER)
const getDataFor = async (slug: string, fullPath: string) => {
  const filePath = join(fullPath, `${slug}.mdx`)
  const markdownWithData = readFileSync(filePath, 'utf-8')
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }
  const { code, frontmatter } = await bundleMDX({
    source: markdownWithData,
    xdmOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [
        // `rehypeCodeTitles` should always be before `rehypePrism`.
        ...(options.rehypePlugins ?? []),
        rehypeCodeTitles,
        rehypePrism,
        rehypeSlug
      ]
      return options
    }
  })
  return {
    frontmatter: {
      ...frontmatter,
      date: frontmatter.date && getFormattedDate(frontmatter.date),
      readingTime: getReadingTimeFor(code)
    },
    code
  }
}
export const getPostBySlug = (slug: string) => getDataFor(slug, POSTS_PATH)
export const getSnippetBySlug = (slug: string) => getDataFor(slug, SNIPPETS_PATH)

// GET ONLY FRONTMATTER
const getFrontmatterFor = (fullPath: string) => {
  const slugs = getAllSlugsFor(fullPath)
  const frontmatters = slugs.map((slug) => {
    const filePath = join(fullPath, `${slug}.mdx`)
    const markdownWithData = readFileSync(filePath, 'utf-8')
    const { data: frontmatter, content } = matter(markdownWithData)
    return {
      frontmatter: {
        ...frontmatter,
        date: frontmatter.date && getFormattedDate(frontmatter.date),
        readingTime: getReadingTimeFor(content)
      },
      slug
    }
  })
  return frontmatters
}
export const getAllPostsFrontmatter = () =>
  sortPostByDate(getFrontmatterFor(POSTS_PATH))
export const getAllSnippetsFrontmatter = () => getFrontmatterFor(SNIPPETS_PATH)

// UTILITIES
const sortPostByDate = (posts: PostType[]): PostType[] => {
  return posts.sort((postA, postB) => {
    const dateA = new Date(`${postA?.frontmatter?.date}`).getTime()
    const dateB = new Date(`${postB?.frontmatter?.date}`).getTime()
    return dateB - dateA
  })
}
const getReadingTimeFor = (content: string): string => {
  const stats = readingTime(content)
  return stats.text
}
const getFormattedDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
