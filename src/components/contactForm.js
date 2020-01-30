import React from "react"
import Input from "../components/global/input"
import TextArea from "../components/global/textArea"
import Button from "../components/global/button"

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
        action="https://formspree.io/xqkqkzqr"
        method="POST"
      >
        <Input type="text" name="_gotcha" style={{ display: `none` }} />
        <label htmlFor="name">
          Name
          <Input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          Email
          <Input type="email" name="email" id="email" />
        </label>
        <label htmlFor="subject">
          Subject
          <Input type="text" name="subject" id="subject" />
        </label>
        <label htmlFor="message">
          Message
          <TextArea name="message" id="message" rows="5" />
        </label>

        <Input type="reset" value="Clear" />
        {status === "SUCCESS" ? <p>Thanks!</p> : <Button>Submit</Button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
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
