import React from "react"
import { AlertIcon } from "../core/icons"

import { useSiteMetadata } from "../../hooks/use-site-metadata"

const SitewideMessage = () => {
  const { sitewideMessage } = useSiteMetadata()
  return (
    <aside class="sitewide-message">
      <AlertIcon /> {sitewideMessage}
    </aside>
  )
}

export default SitewideMessage
