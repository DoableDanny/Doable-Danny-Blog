import React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import EmailSubscribeForm from "../components/EmailSubscribeForm"

export default function success() {
  return (
    <Layout thisPage={"home"}>
      <Seo title={"Doable Danny | Newsletter"} />
      <div
        style={{
          marginTop: 50,
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: 550,
        }}
      >
        <h1 style={{ lineHeight: 1.2, textAlign: "center" }}>
          Signup to my Weekly Newsletter
        </h1>
        <p style={{ textAlign: "center" }}>
          Be notified of my latest articles. I explore topics such as
          algorithms, UI design and freelancing.
        </p>
        <EmailSubscribeForm noTitle />
        <p style={{ textAlign: "center", marginBottom: 80 }}>
          I'll email you no more than once per week & you can unsubscribe at any
          time. Your inbox will be respected!
        </p>
      </div>
    </Layout>
  )
}
