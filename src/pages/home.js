import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import {WelcomeSection, WelcomeTextWrapper, ProfileImg, AboutSection, H, P, AboutPWrapper, FlexRow, ProjectsSection,ProjectModulesContainer, ProjectModuleWrapper, ProjectModuleTextWrapper, TechSpan} from '../elements/HomePageElements'


export default function Home() {
    const data = useStaticQuery(graphql`
    query {
     profileAbout: file(relativePath: { eq: "profileAbout.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 400) {
            ...GatsbyImageSharpFixed
        }
          }
        },
     projImg1: file(relativePath: { eq: "proj1.png" }) {
        childImageSharp {
          fixed(width: 400, height: 280) {
            ...GatsbyImageSharpFixed
        }
          }
        },
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

           <ProjectsSection>
              <H color="light">My Projects</H>
              <ProjectModulesContainer>
                <ProjectModule image={data.projImg1.childImageSharp.fixed} span="Featured project" title="60 Days of Meditation App" technologies={["React Native", "Firebase"]}>
                  <P color="light">- A React Native app published to the Google play store with 100s of active users.</P>
                  <P color="light">- Meditation gamified: complete the current day to unlock the next. Bonus meditations for day streaks and stars!</P>
                  <P color="light">- Stats such as day streak and average session time saved to local storage.</P>
                </ProjectModule>

                <ProjectModule image={data.projImg1.childImageSharp.fixed} span="Front-end" title="Calculator" technologies={["ReactJS"]}>
                  <P color="light">- Built to pass Freecodecamp's front-end-libraries certificate.</P>
                  <P color="light">- Immediate execution logic e.g. 3 + 5 x 6 - 2 / 4 = 11.5.</P>
                  <P color="light">- Watermelon theme!</P>
                </ProjectModule>

                <ProjectModule image={data.projImg1.childImageSharp.fixed} span="Full-stack" title="Exercise Tracker" technologies={["Node, Express, MongoDB"]}>
                  <p>- Built to pass Freecodecamp's APIs and microservices certificate.</p>
                  <p>- Users and exercises stored to and accessed from database using mongoose.</p>
                  <P color="light">- Express handles post and get requests.</P>
                </ProjectModule>
             </ProjectModulesContainer>
           </ProjectsSection>
        </Layout>
    )
}

function ProjectModule ({image, span, title, children, technologies}) {
  return(
    <ProjectModuleWrapper>
      <div>
        <Img fixed={image} />
      </div>
      <ProjectModuleTextWrapper>
        <span>{span}</span>
        <h2>{title}</h2>
        {children}
        <FlexRow>
          {technologies.map((tech) => (
            <TechSpan>{tech}</TechSpan>
          ))}
        </FlexRow>
      </ProjectModuleTextWrapper>
    </ProjectModuleWrapper>
  )
}