import React from "react"
import { Link } from "gatsby"
import slugify from "react-slugify"
import { TagsIcon, NextPageIcon } from "./icons"

export default props => {
  const tags = props.tags
  const tagCount = tags.length

  const tagHeader = `${tagCount} tag${
    tagCount === 1 ? "" : "s"
  }   for this post.`

  return (
    <section className="tags-on-page">
      <h3 className="h4">
        <TagsIcon className="tags-icon" /> {tagHeader}
      </h3>
      <ul>
        {tags.map((tag, index) => {
          let tagSlug = slugify(tag)
          let tagUrl = `/tags/${tagSlug}`

          return (
            <li key={index}>
              <NextPageIcon /> <Link to={tagUrl}>{tag}</Link>
            </li>
          )
        })}
      </ul>
      <Link className="all-tags" to="/tags">
        See all tags
      </Link>
    </section>
  )
}
