import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(query)

  return (
    <Link to="/">
      <Image fixed={data.logo.childImageSharp.fixed} alt="logo for website" />
    </Link>
  )
}

const query = graphql`
  query logo {
    logo: file(relativePath: { eq: "naked-logo.png" }) {
      relativePath
      childImageSharp {
        fixed(height: 75, width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Logo
