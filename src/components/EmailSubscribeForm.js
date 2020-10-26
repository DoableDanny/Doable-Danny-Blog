import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import {
  SubscribeInput,
  FORM,
  UserInput,
} from "../elements/EmailSignUpElements"

export default function EmailSubscribeForm({ page }) {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  })

  const handleChange = e => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    if (emailRegex.test(String(userDetails.email).toLowerCase())) {
      addToMailchimp(userDetails.email, {
        PATHNAME: page,
        FNAME: userDetails.name,
      }).then(data => {
        let returnedEmail = data.msg.split(" ")[0].toLowerCase()
        if (emailRegex.test(String(returnedEmail))) {
          alert(
            returnedEmail + " is already subscribed to Doable Danny's blog!"
          )
        } else {
          alert(data.msg)
        }
      })
    } else {
      alert("Please enter a valid email.")
    }
  }

  return (
    <FORM onSubmit={handleSubmit}>
      <h2
        style={{
          textAlign: "center",
          color: "black",
        }}
      >
        Subscribe to be notified of new blog posts!
      </h2>
      <label htmlFor="name">
        Name (optional):
        <UserInput
          name="name"
          type="text"
          id="name"
          value={userDetails.name}
          onChange={handleChange}
          placeholder="Enter your name here... "
        />
      </label>

      <label htmlFor="email">
        Email:
        <UserInput
          name="email"
          type="email"
          id="email"
          value={userDetails.email}
          onChange={handleChange}
          placeholder="Enter your email..."
          required
        />
      </label>

      <SubscribeInput type="submit" value="Subscribe" />
    </FORM>
  )
}
