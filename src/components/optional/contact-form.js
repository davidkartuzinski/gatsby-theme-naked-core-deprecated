import React from "react"

import {
  EnterEmailIcon,
  EnterSubjectIcon,
  EnterMessageIcon,
  SendMailIcon,
  SuccessIcon,
  ErrorIcon,
  AuthorIcon,
} from "../core/icons"

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
        <label htmlFor="email">
          <EnterEmailIcon /> Email
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="subject">
          <EnterSubjectIcon /> Subject
          <input type="text" name="subject" id="subject" />
        </label>
        <label htmlFor="message">
          <EnterMessageIcon /> /> Message
          <textArea name="message" id="message" rows="5" />
        </label>
        <label htmlFor="reset">
          <input type="reset" name="reset" value="Clear" />
        </label>
        {status === "SUCCESS" ? (
          <p>
            <SuccessIcon /> Thanks!
          </p>
        ) : (
          <button>
            <SendMailIcon />
            Submit
          </button>
        )}
        {status === "ERROR" && (
          <p>
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
