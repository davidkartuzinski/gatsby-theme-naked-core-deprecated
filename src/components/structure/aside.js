import React from "react"

import Instagram from "../widgets/instagram"
import MailChimpSignUp from "../widgets/mailchimp-sign-up"
import LatestPosts from "../widgets/latest-posts"

import Bio from "../widgets/bio"

const Aside = ({ children }) => {
  return (
    <>
      <aside>
        {children}

        <MailChimpSignUp />
        <Bio />

        <LatestPosts />
        <Instagram />
      </aside>
    </>
  )
}

export default Aside
