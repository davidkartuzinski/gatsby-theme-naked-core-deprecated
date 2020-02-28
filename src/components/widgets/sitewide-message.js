import React from "react"
import { AlertIcon } from "../core/icons"

import { useSiteMetadata } from "../../hooks/use-site-metadata"

const SitewideMessage = () => {
  const { sitewideMessage } = useSiteMetadata()
  return (
    <aside>
      <AlertIcon />
      {sitewideMessage}
    </aside>
  )
}

export default SitewideMessage
