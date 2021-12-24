import { FaSalesforce } from 'react-icons/fa'
import { BiConfused } from 'react-icons/bi'

interface Props {
  icon: string
  props?: any
}

const SnippetIcon = ({ icon, ...props }: Props) => {
  switch (icon.toLowerCase()) {
    case 'salesforce':
      return <FaSalesforce size={50} color="#009edb" {...props} />
    default:
      return <BiConfused size={50} color="#ff6347" {...props} />
  }
}

export default SnippetIcon
