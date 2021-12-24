export type Frontmatter = {
  title?: string
  excerpt?: string
  description?: string
  thumbnail?: string
  readingTime?: string
  date?: string
  icon?: string
}

export type Code = any

export type Post = {
  frontmatter: Frontmatter
  code: Code
  slug: string
}

export type Snippet = {
  frontmatter: Frontmatter
  code: Code
  slug: string
}

export type PostType = {
  frontmatter: {
    title?: string
    excerpt?: string
    thumbnail?: string
    date?: string
    readingTime?: string
  }
  code?: string
  slug?: string
}

export type SnippetType = {
  frontmatter: {
    title?: string
    description?: string
    date?: string
    icon?: string
    readingTime?: string
  }
  code?: string
  slug?: string
}
