import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { PreviousPageIcon, NextPageIcon } from "./icons"

const PageNavigation = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div>
      {previousPagePath && (
        <span>
          <Link to={previousPagePath}>
            <PreviousPageIcon /> Previous
          </Link>
        </span>
      )}
      {nextPagePath && (
        <span>
          <Link to={nextPagePath}>
            Next <NextPageIcon />
          </Link>
        </span>
      )}
    </div>
  )
}

PageNavigation.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default PageNavigation
