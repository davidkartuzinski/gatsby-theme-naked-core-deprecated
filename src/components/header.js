import React from "react"
import { StaticQuery } from "gatsby"
import { graphql } from "gatsby"

import Search from "./search"

const Header = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <header>
        ... header stuff...
        <Search searchIndex={data.siteSearchIndex.index} />
      </header>
    )}
  />
)

export default Header
