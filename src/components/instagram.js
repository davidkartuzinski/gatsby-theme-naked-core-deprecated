import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
// import { IoLogoInstagram } from "react-icons/io"

const Instagram = () => {
  const { instagram } = useStaticQuery(
    graphql`
      query {
        instagram: allInstagramContent {
          edges {
            node {
              caption {
                text
              }
              localImage {
                childImageSharp {
                  fluid(maxHeight: 500, maxWidth: 500, quality: 50) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              id
              images {
                standard_resolution {
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <div>
      {instagram.edges.map(photo => {
        return (
          <div>
            <a
              key={photo.node.id}
              href={`${photo.node.images.standard_resolution.url}`}
            >
              <Image
                fluid={photo.node.localImage.childImageSharp.fluid}
                alt={photo.node.caption.text}
              />
            </a>
          </div>
        )
      })}
      <p>Instagram</p>
    </div>
  )
}

export default Instagram
