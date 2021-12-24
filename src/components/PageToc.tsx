import { useEffect } from 'react'
import tocbot from 'tocbot'

const PageToc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc',
      contentSelector: '.prose',
      headingSelector: 'h1, h2, h3',
      hasInnerContainers: true
    })
    return () => tocbot.destroy()
  }, [])

  return <div className="toc" />
}

export default PageToc
