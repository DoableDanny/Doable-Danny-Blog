import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import {WelcomeSection, TextWrapper, ProfileImg} from '../elements/HomePageElements'


export default function Home() {
    const data = useStaticQuery(graphql`
    query {
     profileImg: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fixed(width: 300, height: 300) {
            ...GatsbyImageSharpFixed
        }
          }
        }
      }
    
    `)
    // console.log(data.profileImg.childImageSharp.fluid);
    return (
        <Layout>
           <Seo title={"Doable Danny | Home"} />
           <WelcomeSection>
           <TextWrapper>
               <span>Hi, my name is</span>
               <h1>Danny Adams</h1>
               <h2>Full-Stack Web Developer</h2>
            </TextWrapper>
           {/* <ProfileImg fixed={data.profileImg.childImageSharp.fixed} /> */}
           </WelcomeSection>
        </Layout>
    )
}
