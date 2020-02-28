import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Menu = () => {
  const { menuLinks } = useSiteMetadata()
  const menuLiItems = menuLinks.map(link => (
    <li key={link.id}>
      <Link
        // activeStyle={}
        activeClassName="active" // style in your CSS
        to={`${link.link}`}
      >
        {link.name}
      </Link>
    </li>
  ))
  return (
    <nav aria-labelledby="mainmenulabel">
      <h2 id="mainmenulabel" className="sr-only">
        Main Menu
      </h2>
      <ul className="menu">{menuLiItems}</ul>
    </nav>
  )
}

export default Menu
