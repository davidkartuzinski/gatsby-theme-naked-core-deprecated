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
    <>
      <FacebookShareButton url={props.shareUrl} quote={props.title} hashtag="">
        <FacebookIcon size={48} />
      </FacebookShareButton>

      <TwitterShareButton
        url={props.shareUrl}
        title={props.title}
        via=""
        hashtag=""
      >
        <TwitterIcon size={48} />
      </TwitterShareButton>

      <EmailShareButton
        url={props.shareUrl}
        subject={props.title}
        body={title}
        separator=" "
      >
        <EnterEmailIcon size={48} />
      </EmailShareButton>
    </>
  )
}

SocialShare.propTypes = {
  shareUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default SocialShare
