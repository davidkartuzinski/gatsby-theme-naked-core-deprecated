import React from "react"
import { Breadcrumb } from "gatsby-plugin-breadcrumb"
import PropTypes from "prop-types"

const NakedBreadcrumb = ({ crumblabel, crumbs }) => {
  return (
    <div className="breadcrumbs__container">
      <Breadcrumb
        crumbs={crumbs}
        crumbSeparator=" > "
        crumbLabel={crumblabel}
      />
    </div>
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
