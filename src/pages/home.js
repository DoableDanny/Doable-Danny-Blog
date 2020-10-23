import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import {
  WelcomeSection,
  WelcomeTextWrapper,
  ProfileImg,
  AboutSection,
  H,
  P,
  AboutPWrapper,
  AboutContainer,
  ProjectsSection,
  ProjectModulesContainer,
  ProjectModuleWrapper,
  ProjectModuleTextWrapper,
  SpanContainer,
  TechSpan,
  BlogSection,
  BlogModulesWrapper,
  BlogModuleContainer,
  ContactMeSection,
} from "../elements/HomePageElements"
import SkillsLogos from "../components/SkillsLogos"
import { FormInput, Message } from "../components/FormComponents"

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
      projImg1: file(relativePath: { eq: "med-app.jpg" }) {
        childImageSharp {
          fixed(width: 400, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      projImg2: file(relativePath: { eq: "calc.PNG" }) {
        childImageSharp {
          fixed(width: 400, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      projImg3: file(relativePath: { eq: "proj1.png" }) {
        childImageSharp {
          fixed(width: 400, height: 280) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allMdx(sort: { fields: frontmatter___date, order: DESC }, limit: 3) {
        edges {
          node {
            frontmatter {
              date(formatString: "DD MMM YYYY")
              title
              excerpt
              slug
              featureImage {
                childImageSharp {
                  fixed(width: 300, height: 200) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(
    data.allMdx.edges[0].node.frontmatter.featureImage.childImageSharp.fixed
  )

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
        <AboutContainer>
          <ProfileImg fixed={data.profileAbout.childImageSharp.fixed} />
          <AboutPWrapper>
            <P>2020 has been a year of religious daily coding!</P>
            <P>
              I've taught myself many technologies and have built numerous
              projects from this Gatsby blog to a React Native meditation app.
              It's been lots of fun!
            </P>
            <P>
              I have a masters degree in mechanical with biomedical engineering
              so logical scientific thinking is what I love to do. I'm currently
              studying algorithms and data structures in JavaScript.
            </P>
          </AboutPWrapper>
        </AboutContainer>
        <H>Skills</H>
        <SkillsLogos />
      </AboutSection>

      <ProjectsSection>
        <H color="light">My Projects</H>
        <ProjectModulesContainer>
          <ProjectModule
            link="https://play.google.com/store/apps/details?id=com.navalsmeditations"
            github="https://github.com/DoableDanny/Meditation-App-ReactNative"
            image={data.projImg1.childImageSharp.fixed}
            span="Featured project"
            title="60 Days of Meditation App"
            technologies={["React Native", "Firebase"]}
          >
            <p>
              - A React Native app published to the Google play store with 100s
              of active users.
            </p>
            <p>
              - Meditation gamified: complete the current day to unlock the
              next. Bonus meditations for day streaks and stars!
            </p>
            <p>
              - Stats such as day streak and average session time saved to local
              storage.
            </p>
          </ProjectModule>

          <ProjectModule
            link="https://codepen.io/DoableDanny/full/zYrJybR"
            github="https://github.com/DoableDanny/ReactJS-Calculator"
            image={data.projImg2.childImageSharp.fixed}
            span="Front-end"
            title="Calculator"
            technologies={["ReactJS"]}
          >
            <p>
              - Built to pass Freecodecamp's front-end-libraries certificate.
            </p>
            <p>- Immediate execution logic e.g. 3 + 5 x 6 - 2 / 4 = 11.5.</p>
            <p>- Watermelon theme!</p>
          </ProjectModule>

          <ProjectModule
            link="https://exercise-logger-danny.herokuapp.com/"
            github="https://github.com/DoableDanny/Exercise-Tracker-Express-MongoDB"
            image={data.projImg3.childImageSharp.fixed}
            span="Full-stack"
            title="Exercise Tracker"
            technologies={["Node", "Express", "MongoDB"]}
          >
            <P color="light">
              - Built to pass Freecodecamp's APIs and microservices certificate.
            </P>
            <P color="light">
              - Users and exercises stored to and accessed from database using
              mongoose.
            </P>
            <P color="light">- Express handles post and get requests.</P>
          </ProjectModule>
        </ProjectModulesContainer>
      </ProjectsSection>

      <BlogSection>
        <H>Latest Blog Posts!</H>
        <BlogModulesWrapper>
          <BlogModule
            image={
              data.allMdx.edges[0].node.frontmatter.featureImage.childImageSharp
                .fixed
            }
            title={data.allMdx.edges[0].node.frontmatter.title}
            excerpt={data.allMdx.edges[0].node.frontmatter.excerpt}
            slug={data.allMdx.edges[0].node.frontmatter.slug}
          />
          <BlogModule
            image={
              data.allMdx.edges[1].node.frontmatter.featureImage.childImageSharp
                .fixed
            }
            title={data.allMdx.edges[1].node.frontmatter.title}
            excerpt={data.allMdx.edges[1].node.frontmatter.excerpt}
            slug={data.allMdx.edges[1].node.frontmatter.slug}
          />
          <BlogModule
            image={
              data.allMdx.edges[2].node.frontmatter.featureImage.childImageSharp
                .fixed
            }
            title={data.allMdx.edges[2].node.frontmatter.title}
            excerpt={data.allMdx.edges[2].node.frontmatter.excerpt}
            slug={data.allMdx.edges[2].node.frontmatter.slug}
          />
        </BlogModulesWrapper>
      </BlogSection>

      <ContactMeSection>
        <H color="light">Contact Me</H>
        <span>Get in touch!</span>
        <ContactMeForm />
      </ContactMeSection>
    </Layout>
  )
}

function ContactMeForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <form>
      <FormInput
        title="Name:"
        id="name"
        type="text"
        onChange={event => setName(event.currentTarget.value)}
        value={name}
      />
      <FormInput
        title="Email:"
        id="email"
        type="email"
        onChange={event => setEmail(event.currentTarget.value)}
        value={email}
      />
      <Message
        id="message"
        title="Message:"
        onChange={event => setMessage(event.currentTarget.value)}
        value={message}
      />
      <input type="submit" />
    </form>
  )
}

function BlogModule({ image, title, excerpt, slug }) {
  return (
    <BlogModuleContainer>
      <Link to={`../${slug}`}>
        <Img fixed={image} />
        <h2>{title}</h2>
      </Link>
      <P>{excerpt}</P>
    </BlogModuleContainer>
  )
}

function ProjectModule({
  image,
  span,
  title,
  children,
  technologies,
  link,
  github,
}) {
  return (
    <ProjectModuleWrapper>
      <div>
        <a href={link} target="_blank" rel="noreferrer">
          <Img fixed={image} />
        </a>
      </div>
      <ProjectModuleTextWrapper>
        <span>{span}</span>
        <h2>
          <a href={link} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <span>
          <a href={github} target="_blank" rel="noreferrer">
            View code
          </a>
        </span>
        {children}
        <SpanContainer>
          {technologies.map(tech => (
            <TechSpan>{tech}</TechSpan>
          ))}
        </SpanContainer>
      </ProjectModuleTextWrapper>
    </ProjectModuleWrapper>
  )
}
