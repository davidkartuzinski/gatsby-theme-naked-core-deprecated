import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

const ResponsiveImage = ({ fluid, alt, figcaption, imageClassName }) => {
  let figCaption

  if (figcaption) {
    figCaption = figcaption
  }

  return (
    // https://www.scottohara.me/blog/2019/01/21/how-do-you-figure.html
    <figure role="figure" aria-label={figCaption}>
      <Image
        fluid={fluid}
        alt={alt}
        figcaption={figCaption}
        imageClassName={imageClassName}
      />
      <figcaption>{figCaption}</figcaption>
    </figure>
  )
}

ResponsiveImage.propTypes = {
  fluid: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  figcaption: PropTypes.string.isRequired,
  imageClassName: PropTypes.string,
}

export default ResponsiveImage
