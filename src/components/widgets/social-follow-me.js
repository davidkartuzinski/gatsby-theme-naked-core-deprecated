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
    <div className="social-follow-me" aria-label="Follow Us on Social Media">
      <ul>
        <li>
          <a href={facebook} title="Follow Us on Facebook">
            <FacebookIcon size="40" style={{ color: "#3B5998" }} />
          </a>
        </li>
        <li>
          <a href={instagram} title="Follow Us on Instagram">
            <InstagramIcon size="40" style={{ color: "#d6249f" }} />
          </a>
        </li>
        <li>
          <a href={pinterest} title="Follow Us on Pinterest">
            <PinterestIcon size="40" style={{ color: "#c8232c" }} />
          </a>
        </li>
        <li>
          <a href={twitter} title="Follow Us on Twitter">
            <TwitterIcon size="40" style={{ color: "#00ACEE" }} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialFollowMe
