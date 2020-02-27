import { graphql, useStaticQuery } from "gatsby"

export const useAllMdx = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query Site_AllMdx_Query {
        allMdx(limit: 2000) {
          tags: group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
          categories: group(field: frontmatter___categories) {
            fieldValue
            totalCount
          }
        }
      }
    `
  )
  return allMdx
}
