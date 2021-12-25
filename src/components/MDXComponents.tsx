import Link from 'next/link'

const CustomLink = (props: any) => {
  const { href, children } = props
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const linkStyles = `text-sky-500 underline decoration-sky-500 decoration-2 underline-offset-4 hover:decoration-double`

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a className={linkStyles} {...props}>
          {children}
        </a>
      </Link>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkStyles}
      {...props}>
      {children}
    </a>
  )
}

// interface CustomImageProps {
//   src: string
//   alt: string
// }

// const CustomImage = ({ src, alt, ...props }: CustomImageProps) => {
//   return (
//     <div className="w-full h-96 relative">
//       <Image
//         src={src}
//         alt={alt}
//         layout="fill"
//         objectFit="contain"
//         className="rounded-md"
//         {...props}
//       />
//     </div>
//   )
// }

const MDXComponent = {
  a: CustomLink
  // img: CustomImage
}

export default MDXComponent
