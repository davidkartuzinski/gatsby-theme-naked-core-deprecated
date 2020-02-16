import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const SocialShare = props => {
  const { title } = useSiteMetadata()
  return (
    <>
      <FacebookShareButton
        url={props.shareUrl}
        quote={props.title}
        className=""
      >
        <FacebookIcon size={48} round={false} />
      </FacebookShareButton>

      <TwitterShareButton url={props.shareUrl} title={props.title} className="">
        <TwitterIcon size={48} round={false} />
      </TwitterShareButton>

      <EmailShareButton
        url={props.shareUrl}
        subject={props.title}
        body={title}
        className=""
      >
        <EmailIcon size={48} round={false} />
      </EmailShareButton>
    </>
  )
}

export default SocialShare
