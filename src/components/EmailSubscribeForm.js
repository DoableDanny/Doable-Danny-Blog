import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import {
  SubscribeInput,
  FORM,
  UserInput,
} from "../elements/EmailSignUpElements"

export default function EmailSubscribeForm({ page }) {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    surname: "",
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
        PATHNAME: `DoableDanny.com/${page}`,
        FNAME: userDetails.firstName,
        LNAME: userDetails.surname,
      }).then(data => {
        alert(data.msg)
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
      <label htmlFor="firstName">First Name: </label>
      <UserInput
        name="firstName"
        type="text"
        value={userDetails.firstName}
        onChange={handleChange}
        placeholder="Enter your first name... "
      />

      <label htmlFor="surname">Surname: </label>
      <UserInput
        name="surname"
        type="text"
        value={userDetails.surname}
        onChange={handleChange}
        placeholder="Enter your surname... "
      />

      <label htmlFor="email">Email (required):</label>
      <UserInput
        name="email"
        type="email"
        value={userDetails.email}
        onChange={handleChange}
        placeholder="Enter your email..."
        required
      />

      <SubscribeInput type="submit" value="Subscribe" />
    </FORM>
  )
}
