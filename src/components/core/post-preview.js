import React from "react"
import PropTypes from "prop-types"
import Moment from "react-moment"
import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby"
import Image from "gatsby-image"

import {
  ReadNextIcon,
  CategoriesIcon,
  TagsIcon,
  PublishDateIcon,
  AuthorIcon,
} from "./icons"

const PostPreview = ({
  slug,
  image,
  imageAlt,
  title,
  date,
  figcaption,
  author,
  excerpt,
  cats,
  tags,
}) => (
  <div>
    <figure>
      <Link to={"/blog/" + slug}>
        <Image fixed={image} alt={imageAlt} />
      </Link>
      <figcaption>{figcaption}</figcaption>
    </figure>
    <Link to={"/blog/" + slug}>
      <h2>{title}</h2>
    </Link>
    <address className="author">
      written by <AuthorIcon /> {author}
    </address>
    <PublishDateIcon /> Published on{" "}
    <Moment date={date} format="MMMM DD, YYYY" withTitle />
    <p>{excerpt}</p>
    <Link to={"/blog/" + slug}>
      Read the rest <ReadNextIcon />
    </Link>
    <h3>
      <CategoriesIcon /> Blog Post Categories
    </h3>
    <ul>
      {cats.map((cat, index) => (
        <li key={index}>
          <Link to={`/categories/${kebabCase(cat)}/`}>{cat}</Link>
        </li>
      ))}
    </ul>
    <h3>
      <TagsIcon />
      Blog Post tags
    </h3>
    <ul>
      {tags.map((tag, index) => (
        <li key={index}>
          <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
        </li>
      ))}
    </ul>
  </div>
)

PostPreview.propTypes = {
  slug: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  figcaption: PropTypes.string,
  author: PropTypes.string.isRequired,
  excerpt: PropTypes.string,
  cats: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
}

export default PostPreview
