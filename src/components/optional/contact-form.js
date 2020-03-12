import React from "react"
import {
  AuthorIcon,
  EnterEmailIcon,
  EnterSubjectIcon,
  EnterMessageIcon,
  SendMailIcon,
  SuccessIcon,
  ErrorIcon,
} from "../core/icons.js"

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: "",
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mdogqyrk"
        method="POST"
      >
        <label htmlFor="name">
          <AuthorIcon /> Name
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="contact-email">
          <EnterEmailIcon /> Email
          <input type="email" name="email" id="contact-email" />
        </label>
        <label htmlFor="subject">
          <EnterSubjectIcon /> Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label htmlFor="message">
          <EnterMessageIcon />
          Message
          <textarea name="message" id="message" rows="5" />
        </label>

        {status === "SUCCESS" ? (
          <p className="success-message">
            <SuccessIcon /> Thanks!
          </p>
        ) : (
          <>
            <button aria-label="submit" type="reset">
              Clear
            </button>
            <button aria-label="submit" type="submit">
              <SendMailIcon />
              Submit
            </button>
          </>
        )}
        {status === "ERROR" && (
          <p className="error-message">
            <ErrorIcon /> Ooops! There was an error.
          </p>
        )}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}
