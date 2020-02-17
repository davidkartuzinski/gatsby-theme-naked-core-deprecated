import React from "react"

import Instagram from "../optional/instagram"
import MailChimpSignUp from "../optional/mailchimp-sign-up"
import LatestPosts from "../core/latest-posts"
import SocialFollowMe from "../optional/social-follow-me"
import Bio from "../optional/bio"

export default () => (
  <div>
    <Bio />
    <SocialFollowMe />
    <MailChimpSignUp />
    <Instagram />
    <LatestPosts />
  </div>
)
