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
    <section className="categories-on-page">
      <h3>
        <CategoriesIcon /> {categoryHeader}
      </h3>
      <ul>
        {categories.map((category, index) => {
          let categorySlug = slugify(category)
          let categoryUrl = `/categories/${categorySlug}`
          return (
            <li key={index}>
              > <Link to={categoryUrl}>{category}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/categories">See all categories</Link>
    </section>
  )
}
