import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Button from "../components/global/button"
import Input from "../components/global/input"
import styled from "styled-components"

const Section = styled.section`
  background-color: #111;
  padding: 1rem;
  color: white;
  margin-bottom: 2rem;
  span {
    color: grey;
  }
  p {
    margin: 0;
    text-align: center;
  }
  label {
    padding-bottom: 0.25rem;
    display: block;
  }
  h3 {
    text-align: center;
    color: grey;
    text-transform: uppercase;
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
  }
`

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
      <>
        <Section className="form-section">
          <h3 className="form-h3">
            Sign up and get exclusive content delivered to your inbox
          </h3>
          <p className="form-p">
            Aside from exclusive content, get occasional deals, new product
            alerts, and tea-related news. No spam. Just occasional emails for
            stuff you probably want to get.
          </p>
          <div>
            <form className="form-form" onSubmit={this._handleSubmit}>
              <label className="form-label" htmlFor="email">
                <span>*</span>Email
              </label>
              <Input
                type="email"
                onChange={this._handleChange}
                placeholder="Your Email Address"
                name="email"
                id="email"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                required
              />
              <p className="form-p">
                We promise to make the best content possible and to keep your
                email safely with only us. You can unsusbcribe easily at any
                time.
              </p>
              <Button type="submit">Sign up now</Button>
              <p className="form-p">
                <small>
                  <span>*</span>
                  Strict No Spam Policy. No Sharing of your data - EVER!
                </small>
              </p>
            </form>
          </div>
        </Section>
      </>
    )
  }
}
