import React from "react"

import Instagram from "../widgets/instagram"
import MailChimpSignUp from "../widgets/mailchimp-sign-up"
import LatestPosts from "../widgets/latest-posts"
import SocialFollowMe from "../widgets/social-follow-me"
import Bio from "../widgets/bio"

const Aside = () => {
  return (
    <>
      <aside>
        <MailChimpSignUp />
        <Bio />
        <SocialFollowMe />
        <LatestPosts />
        <Instagram />
      </aside>
    </>
  )
}

export default Aside
