import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  const menuLiItems = menuLinks.map(link => (
    <li key={link.id}>
      <Link
        // activeStyle={}
        to={`${link.link}/`}
      >
        {link.name}
      </Link>
    </li>
  ))
  return <ul className="menu">{menuLiItems}</ul>
}

export default Menu
