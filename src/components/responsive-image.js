import React from "react"
import Image from "gatsby-image"

export default props => (
  <Image fluid={props.fluid} alt={props.alt} title={props.title} />
)
