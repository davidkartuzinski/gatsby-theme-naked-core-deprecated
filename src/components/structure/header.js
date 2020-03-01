import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Menu from "../core/menu"
import Logo from "../core/logo"
import Search from "../optional/search"
import FollowMe from "../widgets/social-follow-me"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query SearchIndexQuery {
        search: siteSearchIndex {
          index
        }
      }
    `
  )
  return (
    <header className="page-header">
      <Logo />
      <Menu />
      <Search searchIndex={data.search.index} />
      <FollowMe />
    </header>
  )
}

export default Header
