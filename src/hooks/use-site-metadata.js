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
            menuLinks {
              id
              name
              link
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}
