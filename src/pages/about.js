import React from "react"

import Layout from "../components/Layout"
import { AboutCard } from "../elements/AboutPageElelements"
import EmailSubscribeForm from "../components/EmailSubscribeForm"

export default function about() {
  return (
    <Layout>
      <AboutCard>
        <h1>About Danny</h1>
        <p>
          I have spent the last four months religiously teaching myself code.
        </p>
        <p>
          {" "}
          I have taught myself HTML, CSS, JavaScript and ReactJS. And I plan to
          learn Python for data science in the next few months.
        </p>
        <p>Why on earth am I doing this? Becasue I enjoy it!</p>
      </AboutCard>
      <EmailSubscribeForm />
    </Layout>
  )
}
