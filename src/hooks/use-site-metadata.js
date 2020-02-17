import { graphql, useStaticQuery } from "gatsby"

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
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
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
