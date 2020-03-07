import React from "react"
import { AlertIcon } from "../core/icons"

const TextWidget = () => {
  return (
    <section className="text-widget">
      <p>
        {" "}
        <AlertIcon /> **Note:** This theme isn't{" "}
        <a href="https://www.tesla.com/">Tesla Corp</a>, but like{" "}
        <a href="https://twitter.com/elonmusk?s=20">Elon Musk</a>,{" "}
        <a href="https://twitter.com/elonmusk/status/1226920048918269952?s=20">
          I invite critical feedback and it is much appreciated
        </a>
        . You can always leave an issue{" "}
        <a href="https://github.com/davidkartuzinski/gatsby-theme-naked-core/issues">
          here
        </a>{" "}
        or a comment below.
      </p>
    </section>
  )
}

export default TextWidget
