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
            image={data.projImg1.childImageSharp.fixed}
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
            link="https://codepen.io/DoableDanny/full/zYrJybR"
            github="https://github.com/DoableDanny/ReactJS-Calculator"
            image={data.projImg2.childImageSharp.fixed}
            alt="Calculator"
            span="Front-end"
            title="Calculator"
            technologies={["ReactJS"]}
          >
            <ul>
              <li>
                Built to pass Freecodecamp's front-end-libraries certificate.
              </li>
              <li>Immediate execution logic e.g. 3 + 5 x 6 - 2 / 4 = 11.5.</li>
              <li>Watermelon theme!</li>
            </ul>
          </ProjectModule>

          <ProjectModule
            link="https://exercise-logger-danny.herokuapp.com/"
            github="https://github.com/DoableDanny/Exercise-Tracker-Express-MongoDB"
            image={data.projImg3.childImageSharp.fixed}
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
      action="mailto:doabledanny@gmail.com"
      method="post"
      enctype="text/plain"
    >
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
          <Img fixed={image} alt={alt} />
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
