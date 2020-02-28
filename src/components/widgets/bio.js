import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

import { useSiteMetadata } from "../../hooks/use-site-metadata"
import { AuthorIcon } from "../core/icons"

const Bio = () => {
  const { author, contact, authorIntro } = useSiteMetadata()
  const data = useStaticQuery(query)

  return (
    <aside>
      <h3>Bio</h3>
      <figure>
        <Image
          fixed={data.authorImage.childImageSharp.fixed}
          alt="Author Image"
        />
        <figcaption>{author}</figcaption>
      </figure>
      <address className="author">
        written by{" "}
        <a href={`mailto:${contact.email}`}>
          <AuthorIcon /> {author}
        </a>
      </address>

      <p>{authorIntro} </p>
    </aside>
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
