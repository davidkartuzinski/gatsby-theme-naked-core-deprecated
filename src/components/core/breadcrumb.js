import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import PropTypes from "prop-types"

const NakedBreadcrumb = ({ crumblabel, crumbs }) => {
  return (
    <nav aria-label="Breadcrumb">
      <Breadcrumb
        crumbs={crumbs}
        title="You are here: "
        crumbSeparator=" > "
        crumbLabel={crumblabel}
      />
    </nav>
  )
}

NakedBreadcrumb.propTypes = {
  crumbLabel: PropTypes.string.isRequired,
  crumbs: PropTypes.arrayOf(
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      crumbLabel: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default NakedBreadcrumb
