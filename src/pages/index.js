import React, { useState } from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import { Seo } from "../components/Seo"
import {
  WelcomeSection,
  WelcomeContainer,
  ProfileImg,
  Section,
  H,
  P,
  LinkBtn,
  LinkBtnRow,
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
      profileAbout: file(relativePath: { eq: "prof.PNG" }) {
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
                  fixed(width: 350, height: 200) {
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
        <WelcomeContainer>
          <span>Hi! I’m Danny 👋</span>
          <h2>I'm a Full-Stack Web Developer and Writer.</h2>
          <p style={{ color: "#fff" }}>
            If you're looking to learn about UI design, algorithms, and
            freelancing, you're in the right place!
          </p>
          <LinkBtnRow>
            <LinkBtn color="primary" mr onClick={() => navigate("/blog/")}>
              Articles
            </LinkBtn>
            <LinkBtn
              color="secondary"
              href="https://twitter.com/doabledanny"
              target="_blank"
            >
              Say hi on Twitter
            </LinkBtn>
          </LinkBtnRow>
        </WelcomeContainer>
      </WelcomeSection>
      <Section color="light">
        <H>About me</H>
        <AboutContainer>
          <ProfileImg fixed={data.profileAbout.childImageSharp.fixed} />
          <AboutPWrapper>
            <P>
              I am a freelance web developer who also loves to write articles,
              learn new technologies and build projects on the side.
            </P>
            <P>
              I've taught myself many technologies over the last few years, and
              have built numerous projects from this Gatsby blog to a React
              Native meditation app. It's been lots of fun!
            </P>
            <P>
              I have a masters degree in mechanical with biomedical engineering
              so logical scientific thinking is what I love to do. I'm currently
              studying algorithms and data structures in JavaScript, and delving
              deeper into React with TypeScript.
            </P>
          </AboutPWrapper>
        </AboutContainer>
        <H>Skills</H>
        <SkillsLogos />
      </Section>

      <Section color="dark">
        <H color="light">Here are some of my favourite projects...</H>
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
            link="https://breakout-game-danny.herokuapp.com/"
            github="https://github.com/DoableDanny/Breakout-Game-with-Online-Leader-Board"
            image={data.projImg3.childImageSharp.fluid}
            alt="Classic Breakout Game!"
            span="Full-stack"
            title="Classic Breakout Game!"
            technologies={["PHP", "MySQL", "JavaScript"]}
          >
            <ul>
              <li>Online leaderboard implemented with PHP and MySQL.</li>
              <li>Front-end built with HTML canvas and vanilla JS logic.</li>
              <li>Game was used to host a competition on Twitter!</li>
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
      name="contact"
      method="POST"
      action="https://formsubmit.co/47b18bd77788e64e48bcc3e00ef9332a"
    >
      <input
        type="hidden"
        name="_next"
        value="https://www.doabledanny.com/success/"
      />

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
      <LinkBtn type="submit" color="primary">
        Send
      </LinkBtn>
    </form>
  )
}

function BlogModule({ image, title, excerpt, slug, date }) {
  return (
    <BlogModuleContainer>
      <Link to={`../${slug}`}>
        <div
          style={{
            width: 300,
            margin: "0 auto",
            overflow: "hidden",
            position: "relative",
            height: 200,
          }}
        >
          <Img
            fixed={image}
            style={{ position: "absolute", left: "50%", marginLeft: -180 }}
          />
        </div>

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
