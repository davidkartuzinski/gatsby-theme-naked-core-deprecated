import React from "react"
import { Link } from "gatsby"
import slugify from "react-slugify"

export default props => {
  // data.markdownRemark.frontmatter.categories
  const categories = props.categories
  const categoryCount = categories.length

  const categoryHeader = `${categoryCount} categor${
    categoryCount === 1 ? "y" : "ies"
  }   for this post.`

  return (
    <>
      <h3>{categoryHeader}</h3>
      <ul>
        {categories.map(category => {
          let categorySlug = slugify(category)
          let categoryUrl = `/categories/${categorySlug}`
          console.log(categoryUrl)
          return (
            <li key="category.id">
              <Link to={categoryUrl}>{category}</Link>
            </li>
          )
        })}
        <Link to="/categories">See all categories</Link>
      </ul>
    </>
  )
}
