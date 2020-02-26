import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Menu from "../core/menu"
import Logo from "../core/logo"
import Search from "../optional/search"
import FollowMe from "../widgets/social-follow-me"
import MobileMenu from "../optional/mobile-menu.js"

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
      <MobileMenu />
      <header className="top-header">
        <Logo />
        <Menu />
        <Search searchIndex={data.siteSearchIndex.index} />
        <FollowMe />
      </header>
    </>
  )
}

export default Header
