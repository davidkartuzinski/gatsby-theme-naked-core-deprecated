import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Search from "./search"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `
  )
  return (
    <>
      <header>
        <Search searchIndex={data.siteSearchIndex.index} />
      </header>
      <p>Header</p>
    </>
  )
}

export default Header
