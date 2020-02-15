import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const PageNavigation = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div>
      {previousPagePath && (
        <span>
          <Link to={previousPagePath}>
            <IoIosArrowBack /> Previous
          </Link>
        </span>
      )}
      {nextPagePath && (
        <span>
          <Link to={nextPagePath}>
            Next <IoIosArrowForward />
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
