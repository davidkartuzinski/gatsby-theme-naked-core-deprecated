import React from "react"
import { AlertIcon } from "../core/icons"

const SitewideMessage = () => {
  return (
    <section className="sitewide-message">
      <p>
        {" "}
        <AlertIcon /> **Note:** This theme isn't{" "}
        <a href="https://www.tesla.com/">Tesla</a>, and I am not{" "}
        <a href="https://twitter.com/elonmusk?s=20">Elon Musk</a>, but{" "}
        <a href="https://twitter.com/elonmusk/status/1226920048918269952?s=20">
          critical feedback is much appreciated
        </a>
        . You can leave an issue{" "}
        <a href="https://github.com/davidkartuzinski/gatsby-theme-naked-core/issues">
          here
        </a>{" "}
        or a comment below.
      </p>
    </section>
  )
}

export default SitewideMessage
