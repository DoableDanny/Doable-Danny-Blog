import React from "react"

import Layout from "../components/Layout"
import { AboutCard } from "../elements/AboutPageElelements"
import EmailSubscribeForm from "../components/EmailSubscribeForm"
import { Seo } from "../components/Seo"

export default function about() {
  return (
    <Layout thisPage={"about"}>
      <Seo title={`Doable Danny | About`} />
      <AboutCard>
        <h1>About Danny</h1>
        <p>Spent the last four months religiously teaching myself code.</p>
        <p> I have taught myself HTML, CSS, JavaScript and ReactJS.</p>
        <p>
          My next challenge is to make an Android app with React Native and
          publish it to the Google play store. I'll then dive into backend and
          learn NodeJS.
        </p>
        <p>Why on earth am I doing this? Becasue I enjoy it!</p>
      </AboutCard>
      <EmailSubscribeForm />
    </Layout>
  )
}
