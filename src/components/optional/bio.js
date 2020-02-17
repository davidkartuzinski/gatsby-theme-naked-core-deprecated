import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Bio = () => {
  const { author, contact, authorIntro } = useSiteMetadata()
  const data = useStaticQuery(query)

  return (
    <div>
      <h3>Bio</h3>
      <Image
        fixed={data.authorImage.childImageSharp.fixed}
        alt="Author Image"
      />
      <address>
        By <a href={`mailto:${contact}`}>{author}</a>
      </address>
      <p>{authorIntro}</p>
    </div>
  )
}

export default Bio

const query = graphql`
  query authorImage {
    authorImage: file(relativePath: { eq: "david-kartuzinski.jpg" }) {
      relativePath
      childImageSharp {
        fixed(height: 125, width: 180) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
