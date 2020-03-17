import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import { SearchIcon } from "../core/icons"

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div className="search">
        <div className="search-box">
          <label htmlFor="search-field">
            <SearchIcon size="40" />
            <input
              type="text"
              value={this.state.query}
              onChange={this.search}
              name="search-field"
              id="search-field"
              placeholder={`Search `}
              aria-label="search-field"
            />
          </label>
        </div>
        <div className="search-results">
          <ul>
            {this.state.results.map(page => {
              let searchSlug = page.slug
              return (
                <li key={page.id}>
                  <Link to={"/blog/" + searchSlug}>{page.title}</Link>
                  {": " + page.tags.join(`,`)}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}
