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
        <p> I've taught myself HTML, CSS, JavaScript and ReactJS.</p>
        <p>
          My next challenge is to make an Android app with React Native and
          publish it to the Google play store. I'll then dive into backend and
          learn NodeJS.
        </p>

        <p>Why on earth am I doing this? Becasue I enjoy it!</p>
        <p>
          Last year I graduated with a masters degree in mechanical engineering,
          however, upon graduating, I didn't feel much love towards the subject.
        </p>
        <p>
          I love problem solving and being creative, and coding was always
          something that looked fascinating to me. So I saved up some money,
          quit my job, and started my journey with #100DaysOfCode. It's been
          fantastic!
        </p>
      </AboutCard>
      <EmailSubscribeForm />
    </Layout>
  )
}
