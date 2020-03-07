import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const IconLogo = () => {
  const data = useStaticQuery(query)

  return (
    <div className="icon-logo">
      <Link to="/">
        <Image
          fluid={data.iconLogo.childImageSharp.fluid}
          alt="icon logo for website"
        />
      </Link>
    </div>
  )
}

const query = graphql`
  query iconLogo {
    iconLogo: file(relativePath: { eq: "icon.png" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IconLogo
