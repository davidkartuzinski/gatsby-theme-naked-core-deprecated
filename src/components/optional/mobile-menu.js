import React from "react"
import { Link } from "gatsby"
import { elastic as Menu } from "react-burger-menu"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

import FollowMe from "../optional/social-follow-me"

const MobileMenu = () => {
  const { menuLinks } = useSiteMetadata()

  const menuLiItems = menuLinks.map(link => (
    <Link key={link.id} to={`${link.link}/`}>
      {link.name}
    </Link>
  ))

  return (
    <>
      <Menu
        right
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        width={"280px"}
      >
        {menuLiItems}
        <FollowMe />
      </Menu>
    </>
  )
}

export default MobileMenu