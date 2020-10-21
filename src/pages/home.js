import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import {WelcomeSection, WelcomeTextWrapper, ProfileImg, AboutSection, H, P, AboutPWrapper, FlexRow} from '../elements/HomePageElements'


export default function Home() {
    const data = useStaticQuery(graphql`
    query {
     profileAbout: file(relativePath: { eq: "profileAbout.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 400) {
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
           <WelcomeTextWrapper>
               <span>Hi, my name is</span>
               <h1>Danny Adams</h1>
               <h2>Full-Stack Web Developer</h2>
            </WelcomeTextWrapper>
           </WelcomeSection>
           <AboutSection>
               <H>About me</H>
               <FlexRow>
                  <AboutPWrapper>
                    <P>2020 has been a year of religious daily coding!</P>
                    <P>I've taught myself many technologies and have built numerous projects from this Gatsby blog to a React Native meditation app. It's been lots of fun!</P>
                    <P>I have a masters degree in mechanical with biomedical engineering so logical scientific thinking is what I love to do. I'm currently studying algorithms and data structures in JavaScript.</P>
                  </AboutPWrapper>
                <ProfileImg fixed={data.profileAbout.childImageSharp.fixed} />
               </FlexRow>
               <H>Skills</H>
           </AboutSection>
        </Layout>
    )
}
