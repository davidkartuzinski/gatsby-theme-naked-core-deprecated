import React from "react"
import PropTypes from "prop-types"
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share"
import { FacebookIcon, TwitterIcon, EnterEmailIcon } from "../core/icons.js"

import { useSiteMetadata } from "../../hooks/use-site-metadata"

const SocialShare = props => {
  const { title } = useSiteMetadata()

  return (
    <div className="social-share">
      <h3>Share this post</h3>

      <ul>
        <li>
          <FacebookShareButton
            url={props.shareUrl}
            quote={props.title}
            hashtag=""
          >
            <FacebookIcon size={48} style={{ color: "#3B5998" }} />
          </FacebookShareButton>
        </li>

        <li>
          <TwitterShareButton
            url={props.shareUrl}
            title={props.title}
            via=""
            hashtag=""
          >
            <TwitterIcon size={48} style={{ color: "#00ACEE" }} />
          </TwitterShareButton>
        </li>

        <li>
          <EmailShareButton
            url={props.shareUrl}
            subject={props.title}
            body={title}
            separator=" "
          >
            <EnterEmailIcon size={48} style={{ color: "#f3824a" }} />
          </EmailShareButton>
        </li>
      </ul>
      <hr />
    </div>
  )
}

SocialShare.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SocialShare
