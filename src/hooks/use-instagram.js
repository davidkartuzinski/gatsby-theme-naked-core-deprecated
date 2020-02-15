import { graphql, useStaticQuery } from "gatsby"

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstagramContent(limit: 9) {
        nodes {
          id
          caption {
            text
          }
          user {
            username
          }
          link
          localImage {
            childImageSharp {
              fluid(maxWidth: 240, maxHeight: 240) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return data.allInstagramContent.nodes.map(node => ({
    ...node.localImage.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.user,
    images: node.images,
    link: node.link,
  }))
}

export default useInstagram
