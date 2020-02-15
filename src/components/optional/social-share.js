import React from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
} from "react-share"

const SocialShare = props => {
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
        body="1001 Tea Facts"
        className=""
      >
        <EmailIcon size={48} round={false} />
      </EmailShareButton>
    </>
  )
}

export default SocialShare
