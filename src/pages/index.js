import React, { useState } from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import Img from "gatsby-image"

import ProjectModule, { projects } from "../components/Pages/Home/ProjectModule"
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
  FormBtn,
  LinkBtnRow,
  AboutPWrapper,
  AboutContainer,
  ProjectModulesContainer,
  BlogModulesWrapper,
  BlogModuleContainer,
  ContactMeSection,
  UL,
} from "../elements/HomePageElements"
import SkillsLogos from "../components/SkillsLogos"
import { FormInput, Message } from "../components/FormComponents"
import theme from "../themes/theme"

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
      projImg4: file(relativePath: { eq: "customerlift-app2.png" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      carbonCalculator: file(
        relativePath: { eq: "clinical-trials-carbon-calculator.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      atomicMeditation: file(relativePath: { eq: "atomic-meditation.png" }) {
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
              I am a freelance fullstack web developer based in the UK,
              specializing in building frontends with JavaScript frameworks such
              as React, Next.js, and Gatsby, and backends/APIs with Node.js,
              Laravel and Spring.
            </P>

            <P>
              Over the past six years, I have built many projects for clients
              and for personal side projects. Some examples of what clients have
              asked me to do:
              <UL>
                <li>
                  Build a Shopify App with TypeScript, Next.js, TailwindCSS,
                  Laravel, Postgres, Shopify REST + GraphQL API, Oath, Chart.js
                  + HTML Canvas for complex dashboard.
                </li>
                <li>Integrate Google Analytics and Facebook pixel</li>
                <li>Send email upon signup with MailGun</li>
                <li>
                  Build a multistep form with TypeScript, React + Vite, Zod for
                  validation, Zustand for state management, AntDesign for UI.
                </li>
                <li>Create username/pw login with ability to reset password</li>
                <li>
                  Upgrade a website to latest version of Gatsby and Node on
                  Netlify.
                </li>
                <li>
                  Build a WordPress custom PHP theme and custom PHP plugin.
                </li>
                <li>
                  I have also built WordPress sites with Elementor and Beaver
                  Builder page builders, integrated LearnDash for video courses,
                  and WP Fusion for Zoho CRM integration.
                </li>
              </UL>
            </P>

            <P>
              Due to the success of my blogs (DoableDanny & Dev.to), I was
              invited to write articles for{" "}
              <MyLink href="https://www.freecodecamp.org/">FreeCodeCamp</MyLink>
              , and recently published an in-depth 12-hour course on{" "}
              <MyLink href="https://www.youtube.com/watch?v=rylaiB2uH2A&t=939s">
                Mastering OOP Programming, SOLID Principles and The 23
                Gang-of-Four Design Patterns in C#.
              </MyLink>{" "}
            </P>

            <P>
              I am always learning new technologies, and when I get spare time I
              like to write articles, usually on <Link to="/blog">my blog</Link>
              , to explore new topics in-depth.
            </P>

            <P>
              I also love building side projects to learn new technologies,
              practice my marketing skills, and just for the sake and enjoyment
              of building something, such as my React Native app,{" "}
              <MyLink href="https://play.google.com/store/apps/details?id=com.doabledanny.atomicmeditation&hl=en&pli=1">
                Atomic Meditation
              </MyLink>
              .
            </P>

            <P>
              I have a masters degree in mechanical with biomedical engineering,
              and have always enjoyed scientific research, building, and problem
              solving. Currently, I'm delving deeper into backend and devops,
              such as Microservice architecture, Kubernetes and the MANY Spring
              Boot Dependencies.
            </P>

            <div style={{ display: "flex", marginTop: 60 }}>
              Looking for a developer?
              <LinkBtn color="primary" href="#contact">
                Contact Me
              </LinkBtn>
            </div>
          </AboutPWrapper>
        </AboutContainer>
        <H>Skills</H>
        <SkillsLogos />
      </Section>

      <Section color="dark">
        <H color="light">Here are some of my favourite projects...</H>

        <ProjectModulesContainer>
          {projects.map(
            ({
              title,
              url,
              github,
              imgNameForGraphQl,
              imgAlt,
              span,
              technologies,
              bulletPoints,
            }) => (
              <ProjectModule
                link={url}
                image={data[imgNameForGraphQl].childImageSharp.fluid}
                alt={imgAlt}
                span={span}
                title={title}
                technologies={technologies}
                github={github}
              >
                <ul>
                  {bulletPoints.map(bp => (
                    <li>{bp}</li>
                  ))}
                </ul>
              </ProjectModule>
            )
          )}
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

      <ContactMeSection id="contact">
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
      // action="https://formsubmit.co/47b18bd77788e64e48bcc3e00ef9332a"
      action="https://getform.io/f/29cd2e5e-4cc9-4832-8a32-4ebb818c2aa0"
    >
      {/* <input
        type="hidden"
        name="_next"
        value="https://www.doabledanny.com/success/"
      /> */}

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
      <input
        type="hidden"
        name="_gotcha"
        style={{
          display: "none !important",
        }}
      />
      <Message
        id="message"
        title="Message:"
        onChange={event => setMessage(event.currentTarget.value)}
        value={message}
      />
      <FormBtn type="submit" color="primary">
        Send
      </FormBtn>
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

const MyLink = ({ children, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{ color: theme.colors.lightBlue2 }}
    >
      {children}
    </a>
  )
}
