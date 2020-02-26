import React from "react"
import { Link } from "gatsby"
import slugify from "react-slugify"
import { CategoriesIcon } from "./icons"

export default props => {
  const categories = props.categories
  const categoryCount = categories.length

  const categoryHeader = `${categoryCount} categor${
    categoryCount === 1 ? "y" : "ies"
  }   for this post.`

  return (
    <>
      <h3>
        <CategoriesIcon /> {categoryHeader}
      </h3>
      <ul>
        {categories.map(category => {
          let categorySlug = slugify(category)
          let categoryUrl = `/categories/${categorySlug}`
          return (
            <li key="category.id">
              <Link to={categoryUrl}>{category}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/categories">See all categories</Link>
    </>
  )
}
