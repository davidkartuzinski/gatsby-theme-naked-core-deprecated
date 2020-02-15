import React from "react"

import Instagram from "../instagram"
import MailChimpSignUp from "../mailChimpSignUp"
import LatestPosts from "../latest-posts"
import SocialFollowMe from "../social-follow-me"

export default () => (
  <div>
    <SocialFollowMe />
    <MailChimpSignUp />
    <Instagram />
    <LatestPosts />
  </div>
)
