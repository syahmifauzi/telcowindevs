import { FaRegClipboard } from 'react-icons/fa'
import { useRef, useState } from 'react'
import copy from 'copy-to-clipboard'
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

const CustomPre = (props: any) => {
  const myRef = useRef(null)
  const [showCopied, setShowCopied] = useState(false)

  const copyToClipboard = () => {
    const el = myRef.current as unknown as HTMLElement
    copy(el.innerText)
    setShowCopied(true)
    setTimeout(() => {
      setShowCopied(false)
    }, 1000)
  }

  return (
    <div className="relative">
      <div className="absolute top-2 right-2 cursor-pointer">
        {showCopied && (
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 text-xs bg-gray-600 text-white py-1 px-2 rounded-md z-10">
            Copied
            <span className="absolute w-5 h-5 bg-gray-600 bottom-0 left-1/2 -translate-x-1/2 rotate-45 -z-10"></span>
          </span>
        )}
        <FaRegClipboard
          className="tooltip text-gray-500 hover:text-gray-700"
          onClick={() => copyToClipboard()}
        />
      </div>
      <pre ref={myRef}>{props.children}</pre>
    </div>
  )
}

const MDXComponent = {
  a: CustomLink,
  // img: CustomImage
  pre: CustomPre
}

export default MDXComponent
