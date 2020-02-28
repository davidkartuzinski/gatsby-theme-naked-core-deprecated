import React from "react"
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  TwitterIcon,
} from "../core/icons"
import { useStaticQuery, graphql } from "gatsby"

const SocialFollowMe = () => {
  const data = useStaticQuery(
    graphql`
      query SocialFollowMe {
        site {
          socialMedia: siteMetadata {
            socialLinks {
              facebook
              instagram
              pinterest
              twitter
            }
          }
        }
      }
    `
  )

  const {
    facebook,
    instagram,
    pinterest,
    twitter,
  } = data.site.socialMedia.socialLinks

  return (
    <ul>
      <li>
        <a href={facebook} title="Follow Us on Facebook">
          <FacebookIcon size="50" />
        </a>
      </li>
      <li>
        <a href={instagram} title="Follow Us on Instagram">
          <InstagramIcon size="50" />
        </a>
      </li>
      <li>
        <a href={pinterest} title="Follow Us on Pinterest">
          <PinterestIcon size="50" />
        </a>
      </li>
      <li>
        <a href={twitter} title="Follow Us on Twitter">
          <TwitterIcon size="50" />
        </a>
      </li>
    </ul>
  )
}

export default SocialFollowMe
