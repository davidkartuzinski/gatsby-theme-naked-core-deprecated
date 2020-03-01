import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import {
  TwitterIcon,
  GithubIcon,
  EnterEmailIcon,
  LinkedInIcon,
} from "../core/icons"
import { useSiteMetadata } from "../../hooks/use-site-metadata"

const Bio = () => {
  const { author, contact, authorIntro } = useSiteMetadata()
  const data = useStaticQuery(query)

  return (
    <section class="bio">
      <h3>Bio</h3>
      <figure>
        <Image
          fluid={data.authorImage.childImageSharp.fluid}
          alt="Author Image"
        />
        <figcaption>{author}</figcaption>
      </figure>
      <p>{authorIntro} </p>
      <h4>Contact</h4>
      <ul>
        <li>
          <a href={contact.twitter} title="Follow the author on Twitter">
            <TwitterIcon size="25" style={{ color: "#00ACEE" }} />
          </a>
        </li>
        <li>
          <a href={contact.linkedin} title="Follow the author on LinkedIn">
            <LinkedInIcon size="25" style={{ color: "#0072b1" }} />
          </a>
        </li>
        <li>
          <a href={contact.github} title="Follow the author on GitHub">
            <GithubIcon size="25" style={{ color: "#333" }} />
          </a>
        </li>
        <li>
          <a href={`mailto:${contact.email}`} title="Follow Us on Twitter">
            <EnterEmailIcon size="25" style={{ color: "#f3824a" }} />
          </a>
        </li>
      </ul>
      <hr />
    </section>
  )
}

export default Bio

const query = graphql`
  query authorImage {
    authorImage: file(relativePath: { eq: "david-kartuzinski.jpg" }) {
      relativePath
      childImageSharp {
        fluid(maxWidth: 360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
