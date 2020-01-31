import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

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
                  fluid(maxHeight: 250, maxWidth: 250, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              images {
                standard_resolution {
                  url
                }
              }
              id
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
    </div>
  )
}

export default Instagram
