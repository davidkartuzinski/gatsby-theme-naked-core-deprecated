import React from "react"
import Input from "../components/global/input"
import TextArea from "../components/global/textArea"
import Button from "../components/global/button"
import { IoIosPerson } from "react-icons/io"
import { IoIosMail } from "react-icons/io"
import { IoMdBook } from "react-icons/io"
import { IoIosBrush } from "react-icons/io"
import { IoIosSend } from "react-icons/io"

import { IoIosRocket } from "react-icons/io"
import { IoIosNuclear } from "react-icons/io"

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
        <label htmlFor="name">
          <IoIosPerson /> Name
          <Input type="text" name="name" id="name" />
        </label>
        <label htmlFor="email">
          <IoIosMail /> Email
          <Input type="email" name="email" id="email" />
        </label>
        <label htmlFor="subject">
          <IoMdBook /> Subject
          <Input type="text" name="subject" id="subject" />
        </label>
        <label htmlFor="message">
          <IoIosBrush />
          Message
          <TextArea name="message" id="message" rows="5" />
        </label>
        <label htmlFor="reset">
          <Input type="reset" name="reset" value="Clear" />
        </label>
        {status === "SUCCESS" ? (
          <p>
            <IoIosRocket /> Thanks!
          </p>
        ) : (
          <Button>
            <IoIosSend />
            Submit
          </Button>
        )}
        {status === "ERROR" && (
          <p>
            <IoIosNuclear /> Ooops! There was an error.
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
