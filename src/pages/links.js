import React from "react"
import Layout from "../components/Layout"
import { Seo } from "../components/Seo"

export default function links() {
  return (
    <Layout thisPage={"links"}>
      <Seo title={"Doable Danny | Links"} />
      <div style={{ marginTop: 50 }}>
        <h1>Useful Links</h1>
        <p>This page will be filled with useful links and resources.</p>
      </div>
    </Layout>
  )
}
