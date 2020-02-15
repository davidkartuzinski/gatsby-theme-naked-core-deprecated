import React from "react"

import Instagram from "../optional/instagram"
import MailChimpSignUp from "../optional/mailchimp-sign-up"
import LatestPosts from "../core/latest-posts"
import SocialFollowMe from "../optional/social-follow-me"

export default () => (
  <div>
    <SocialFollowMe />
    <MailChimpSignUp />
    <Instagram />
    <LatestPosts />
  </div>
)
