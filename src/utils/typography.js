import Typography from "typography"
import funstonTheme from "typography-theme-funston"
funstonTheme.headerColor = "#55433b"
funstonTheme.bodyColor = "#040404"
// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-funston/src/index.js
// https://kyleamathews.github.io/typography.js/
// https://www.gatsbyjs.org/docs/typography-js/
funstonTheme.overrideThemeStyles = () => ({
  a: {
    color: "#55433b",
  },
  table: {
    marginLeft: "5%",
    marginRight: "5%",
    width: "90%",
  },
})

const typography = new Typography(funstonTheme)

export default typography
