import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query Site_Metadata_Query {
        site {
          siteMetadata {
            siteUrl
            logo
            title
            websiteDescription
            menuLinks {
              id
              name
              link
            }
            author
            authorIntro
            authorImage
            contact {
              email
              twitter
              linkedin
              github
            }
            sitewideMessage
          }
        }
      }
    `
  )
  return site.siteMetadata
}
