import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

import { SendMailIcon, EnterEmailIcon } from "../core/icons"

// https://github.com/benjaminhoffman/gatsby-plugin-mailchimp/blob/master/examples/gatsby-v2/src/pages/index.js

export default class MailChimpComponent extends React.Component {
  state = {
    name: null,
    email: null,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault()

    console.log("submit", this.state)

    addToMailchimp(this.state.email, this.state)
      .then(({ msg, result }) => {
        console.log("msg", `${result}: ${msg}`)

        if (result !== "success") {
          throw msg
        }
        alert(msg)
      })
      .catch(err => {
        console.log("err", err)
        alert(err)
      })
  }

  render() {
    return (
      <section className="mailchimp-sign-up">
        <h3>Sign up and get exclusive content delivered to your inbox</h3>
        <p>
          You get exclusive content including occasional updates, new module and
          themes alerts, and Gatsby.Js news. No spam. Just occasional emails for
          stuff you probably want to get.
        </p>
        <small>
          We promise to make the best content possible and to keep your email
          safely with only us. You can unsusbcribe easily at any time.
        </small>

        <form onSubmit={this._handleSubmit}>
          <label htmlFor="email">
            <EnterEmailIcon /> Email<span>*</span>
            <input
              type="email"
              onChange={this._handleChange}
              placeholder="Your Email Address"
              name="email"
              className="mailchimp-input"
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
              required
            />
          </label>

          <button
            aria-label="submit"
            type="submit"
            className="mailchimp-button"
          >
            <SendMailIcon />
            Sign up now
          </button>
        </form>

        <small>Strict No Spam Policy. No Sharing of your data - EVER!</small>
      </section>
    )
  }
}
