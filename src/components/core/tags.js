import React from "react"
import { Link } from "gatsby"
import slugify from "react-slugify"
import { IoIosPricetags } from "react-icons/io"

export default props => {
  // data.markdownRemark.frontmatter.tags
  const tags = props.tags
  const tagCount = tags.length

  const tagHeader = `${tagCount} tag${
    tagCount === 1 ? "" : "s"
  }   for this post.`

  return (
    <>
      <h3>
        <IoIosPricetags />
        {tagHeader}
      </h3>
      <ul>
        {tags.map(tag => {
          let tagSlug = slugify(tag)
          let tagUrl = `/tags/${tagSlug}`

          return (
            <li key="tag.id">
              <Link to={tagUrl}>{tag}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/tags">See all tags</Link>
    </>
  )
}
