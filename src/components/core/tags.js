import React from "react"
import { Link } from "gatsby"
import slugify from "react-slugify"
import { TagsIcon } from "./icons"

export default props => {
  const tags = props.tags
  const tagCount = tags.length

  const tagHeader = `${tagCount} tag${
    tagCount === 1 ? "" : "s"
  }   for this post.`

  return (
    <>
      <h3>
        <TagsIcon />
        {tagHeader}
      </h3>
      <ul>
        {tags.map((tag, index) => {
          let tagSlug = slugify(tag)
          let tagUrl = `/tags/${tagSlug}/`

          return (
            <li key={index}>
              <Link to={tagUrl}>{tag}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/tags">See all tags</Link>
    </>
  )
}
