import React from "react"

import Instagram from "./instagram"
import MailChimpSignUp from "../components/mailChimpSignUp"
import LatestPosts from "../components/latest-posts"
import SocialFollowMe from "../components/social-follow-me"

export default () => (
  <div>
    <SocialFollowMe />
    <MailChimpSignUp />
    <Instagram />
    <LatestPosts />
  </div>
)
