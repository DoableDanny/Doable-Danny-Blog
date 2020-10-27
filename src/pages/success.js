import React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"

export default function success() {
  return (
    <Layout thisPage={"home"}>
      <Seo title={"Doable Danny | Home"} />
      <div style={{ marginTop: 50, marginLeft: 50 }}>
        <h1>Success</h1>
        <p>Thank you for contacting me, I'll be with you shortly!</p>
      </div>
    </Layout>
  )
}
