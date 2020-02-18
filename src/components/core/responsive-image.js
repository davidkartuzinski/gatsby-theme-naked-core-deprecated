import React from "react"
import Image from "gatsby-image"

export default props => {
  let figCaption

  if (props.figcaption) {
    figCaption = props.figcaption
  }

  return (
    <figure>
      <Image
        className={props.imageClassName}
        fluid={props.fluid}
        alt={props.alt}
        title={props.title}
      />
      <figcaption>{figCaption}</figcaption>
    </figure>
  )
}
