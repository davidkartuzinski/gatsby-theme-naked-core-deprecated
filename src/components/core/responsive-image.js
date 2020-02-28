import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"

const ResponsiveImage = ({ fluid, alt, figcaption, imageClassName }) => {
  let figCaption

  if (figcaption) {
    figCaption = figcaption
  }

  return (
    <figure>
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
