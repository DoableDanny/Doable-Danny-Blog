import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import {
  WelcomeSection,
  WelcomeTextWrapper,
  ProfileImg,
  Section,
  H,
  P,
  BtnPrimary,
  AboutPWrapper,
  AboutContainer,
  ProjectModulesContainer,
  ProjectModuleWrapper,
  ProjectModuleImgWrapper,
  ProjectModuleTextWrapper,
  SpanContainer,
  TechSpan,
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
          fluid(maxWidth: 400, maxHeight: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projImg2: file(relativePath: { eq: "blog.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      projImg3: file(relativePath: { eq: "proj1.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 280) {
            ...GatsbyImageSharpFluid
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

  return (
    <Layout thisPage={"home"}>
      <Seo title={"Doable Danny | Home"} />
      <WelcomeSection>
        <WelcomeTextWrapper>
          <span>Hi, my name is</span>
          <h1>Danny Adams</h1>
          <h2>Full-Stack Web Developer</h2>
        </WelcomeTextWrapper>
      </WelcomeSection>
      <Section color="light">
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
      </Section>

      <Section color="dark">
        <H color="light">My Projects</H>
        <ProjectModulesContainer>
          <ProjectModule
            link="https://play.google.com/store/apps/details?id=com.navalsmeditations"
            github="https://github.com/DoableDanny/Meditation-App-ReactNative"
            image={data.projImg1.childImageSharp.fluid}
            alt="meditation app"
            span="Featured project"
            title="60 Days of Meditation App"
            technologies={["React Native", "Firebase"]}
          >
            <ul>
              <li>
                A React Native app published to the Google play store with 100s
                of active users.
              </li>
              <li>
                Meditation gamified: complete the current day to unlock the
                next. Bonus meditations for day streaks and stars!
              </li>
              <li>
                Stats such as day streak and average session time saved to local
                storage.
              </li>
            </ul>
          </ProjectModule>

          <ProjectModule
            link="https://www.doabledanny.com/blog/"
            github="https://github.com/DoableDanny/Doable-Danny-Blog"
            image={data.projImg2.childImageSharp.fluid}
            alt="Calculator"
            span="Front-end"
            title="Personal Blog"
            technologies={["Gatsby", "ReactJS", "GraphQL"]}
          >
            <ul>
              <li>New page created programatically for every nth blog post.</li>
              <li>Images and article metadata pulled in with GraphQL.</li>
              <li>Includes comments section and email subscribe form.</li>
            </ul>
          </ProjectModule>

          <ProjectModule
            link="https://exercise-logger-danny.herokuapp.com/"
            github="https://github.com/DoableDanny/Exercise-Tracker-Express-MongoDB"
            image={data.projImg3.childImageSharp.fluid}
            alt="Exercsie tracker"
            span="Full-stack"
            title="Exercise Tracker"
            technologies={["Node", "Express", "MongoDB"]}
          >
            <ul>
              <li>
                Built to pass Freecodecamp's APIs and microservices certificate.
              </li>
              <li>
                Users and exercises stored to and accessed from database using
                mongoose.
              </li>
              <li>Express handles post and get requests.</li>
            </ul>
          </ProjectModule>
        </ProjectModulesContainer>
      </Section>

      <Section color="light">
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
            date={data.allMdx.edges[0].node.frontmatter.date}
          />
          <BlogModule
            image={
              data.allMdx.edges[1].node.frontmatter.featureImage.childImageSharp
                .fixed
            }
            title={data.allMdx.edges[1].node.frontmatter.title}
            excerpt={data.allMdx.edges[1].node.frontmatter.excerpt}
            slug={data.allMdx.edges[1].node.frontmatter.slug}
            date={data.allMdx.edges[1].node.frontmatter.date}
          />
          <BlogModule
            image={
              data.allMdx.edges[2].node.frontmatter.featureImage.childImageSharp
                .fixed
            }
            title={data.allMdx.edges[2].node.frontmatter.title}
            excerpt={data.allMdx.edges[2].node.frontmatter.excerpt}
            slug={data.allMdx.edges[2].node.frontmatter.slug}
            date={data.allMdx.edges[2].node.frontmatter.date}
          />
        </BlogModulesWrapper>
      </Section>

      <ContactMeSection>
        <h2 color="light">Contact Me</h2>
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
    <form
      // action="/success"
      // name="contact"
      method="post"
      // data-netlify="true"
      // data-netlify-honeypot="bot-field"
      action="https://formsubmit.co/doabledanny@gmail.com"
    >
      {/* Input needed for netlify forms */}
      {/* <input type="hidden" name="form-name" value="contact" /> */}
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
      <BtnPrimary type="submit">Send</BtnPrimary>
    </form>
  )
}

function BlogModule({ image, title, excerpt, slug, date }) {
  return (
    <BlogModuleContainer>
      <Link to={`../${slug}`}>
        <Img fixed={image} />
        <h2>{title}</h2>
      </Link>
      <P>{excerpt}</P>
      <span>- {date}</span>
    </BlogModuleContainer>
  )
}

function ProjectModule({
  image,
  alt,
  span,
  title,
  children,
  technologies,
  link,
  github,
}) {
  return (
    <ProjectModuleWrapper>
      <ProjectModuleImgWrapper>
        <a href={link} target="_blank" rel="noreferrer">
          <Img fluid={image} alt={alt} />
        </a>
      </ProjectModuleImgWrapper>
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
