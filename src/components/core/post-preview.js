import React from "react"
import PropTypes from "prop-types"
import Moment from "react-moment"
import { Link } from "gatsby"
import Image from "gatsby-image"

import { ReadNextIcon, PublishDateIcon } from "./icons"

const PostPreview = ({
  slug,
  image,
  imageAlt,
  title,
  date,
  figcaption,
  excerpt,
}) => (
  <>
    <Link to={"/blog/" + slug}>
      <h2>{title}</h2>
    </Link>
    <figure>
      <Link to={"/blog/" + slug}>
        <Image fluid={image} alt={imageAlt} />
      </Link>
      <figcaption>{figcaption}</figcaption>
    </figure>
    <PublishDateIcon /> Published on{" "}
    <Moment date={date} format="MMMM DD, YYYY" withTitle />
    <p>{excerpt}</p>
    <Link to={"/blog/" + slug}>
      Read the rest <ReadNextIcon />
    </Link>
    <hr />
  </>
)

PostPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  figcaption: PropTypes.string,
  excerpt: PropTypes.string,
}

export default PostPreview
