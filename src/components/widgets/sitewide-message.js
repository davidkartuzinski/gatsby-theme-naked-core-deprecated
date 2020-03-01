import React from "react"
import { AlertIcon } from "../core/icons"

import { useSiteMetadata } from "../../hooks/use-site-metadata"

const SitewideMessage = () => {
  const { sitewideMessage } = useSiteMetadata()
  return (
    <section class="sitewide-message">
      <AlertIcon /> {sitewideMessage}
    </section>
  )
}

export default SitewideMessage
