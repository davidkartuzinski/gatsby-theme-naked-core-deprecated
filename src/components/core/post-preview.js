import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Image from "gatsby-image"

import {
  ReadNextIcon,
  CategoriesIcon,
  TagsIcon,
  PublishDateIcon,
  AuthorIcon,
} from "./icons"

// Utilities
import kebabCase from "lodash/kebabCase"

const PostPreview = ({
  slug,
  image,
  imageAlt,
  imageTitle,
  title,
  date,
  author,
  excerpt,
  cats,
  tags,
}) => (
  <div>
    <Link to={slug}>
      <Image fixed={image} alt={imageAlt} title={imageTitle} />
    </Link>
    <Link to={slug}>
      <h2>{title}</h2>
    </Link>
    <span>
      <PublishDateIcon /> Published on {date}, written by <AuthorIcon />{" "}
      {author}
    </span>

    <p>{excerpt}</p>
    <Link to={slug}>
      Read the rest <ReadNextIcon />
    </Link>

    <h3>
      <CategoriesIcon /> Blog Post Categories
    </h3>
    <ul>
      {cats.map(cat => (
        <li key={cat}>
          <Link to={`/categories/${kebabCase(cat)}/`}>{cat}</Link>
        </li>
      ))}
    </ul>
    <h3>
      <TagsIcon />
      Blog Post tags
    </h3>
    <ul>
      {tags.map(tag => (
        <li key={tag}>
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </div>
)

PostPreview.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageTitle: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cats: PropTypes.objectOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
      totalCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  tags: PropTypes.objectOf(
    PropTypes.shape({
      fieldValue: PropTypes.string.isRequired,
      totalCount: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default PostPreview
