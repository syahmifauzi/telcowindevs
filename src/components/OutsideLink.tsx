import { ReactNode } from 'react'

interface Props {
  href: string
  children: ReactNode
}

const OutsideLink = ({ href, children }: Props) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default OutsideLink
