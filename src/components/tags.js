import React from "react"
import { Link } from "gatsby"
import slugify from "react-slugify"

export default props => {
  // data.markdownRemark.frontmatter.tags
  const tags = props.tags
  const tagCount = tags.length

  const tagHeader = `${tagCount} tag${
    tagCount === 1 ? "" : "s"
  }   for this post.`

  return (
    <>
      <h3>{tagHeader}</h3>
      <ul>
        {tags.map(tag => {
          let tagSlug = slugify(tag)
          let tagUrl = `/tags/${tagSlug}`
          console.log(tagUrl)
          return (
            <li key="tag.id">
              <Link to={tagUrl}>{tag}</Link>
            </li>
          )
        })}
        <Link to="/tags">See all tags</Link>
      </ul>
    </>
  )
}
