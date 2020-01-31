import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PageNavigation = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div>
      {previousPagePath && (
        <span>
          <Link to={previousPagePath}>Previous</Link>
        </span>
      )}
      {nextPagePath && (
        <span>
          <Link to={nextPagePath}>Next</Link>
        </span>
      )}
    </div>
  )
}

PageNavigation.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default PageNavigation
