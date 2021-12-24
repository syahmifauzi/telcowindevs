import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaGithub
} from 'react-icons/fa'
import OutsideLink from './OutsideLink'

import { SITE_TITLE_SHORT } from '@libs/constants'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#1d2b36', color: '#93a1b0' }}>
      <div className="container max-w-6xl mx-auto py-8 px-2 sm:px-8 text-sm">
        <div className="mb-8 text-center sm:text-left">
          <h3 className="text-white font-semibold text-base">Quick Links</h3>
          <ul className="leading-6 mt-4 flex flex-col gap-2">
            <li>
              <OutsideLink href="https://telcowin.com/">
                Telcowin Official Website
              </OutsideLink>
            </li>
            <li>
              <OutsideLink href="https://developer.salesforce.com/docs/">
                Salesforce Developer Docs
              </OutsideLink>
            </li>
            <li>
              <OutsideLink href="https://trailhead.salesforce.com/">
                Trailhead Salesforce
              </OutsideLink>
            </li>
          </ul>
        </div>
        <hr />
        <div className="grid text-center sm:grid-cols-2 mt-8">
          <div className="flex gap-2 justify-center sm:justify-start">
            <OutsideLink href="https://twitter.com/telcowin/">
              <FaTwitter size={22} />
            </OutsideLink>
            <OutsideLink href="https://www.facebook.com/telcowin/">
              <FaFacebook size={22} />
            </OutsideLink>
            <OutsideLink href="https://www.linkedin.com/company/telcowin/">
              <FaLinkedin size={22} />
            </OutsideLink>
            <OutsideLink href="https://www.instagram.com/telcowin/">
              <FaInstagram size={22} />
            </OutsideLink>
            <OutsideLink href="https://github.com/syahmifauzi/telcowindevs/">
              <FaGithub size={22} />
            </OutsideLink>
          </div>
          <div className="mt-4 sm:text-right sm:mt-0">
            &copy; {new Date().getFullYear()} {SITE_TITLE_SHORT}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
