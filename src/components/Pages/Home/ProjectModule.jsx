import React from "react"
import Img from "gatsby-image"
import {
  ProjectModuleWrapper,
  ProjectModuleImgWrapper,
  ProjectModuleTextWrapper,
  SpanContainer,
  TechSpan,
} from "../../../elements/HomePageElements"

/**
 * Project data for looping through and displaying on the home page's "My Projects" section
 */
export const projects = [
  {
    title: "CustomerLift Shopify App",
    url: "https://apps.shopify.com/customer-lift",
    github: null,
    imgNameForGraphQl: "projImg4",
    imgAlt: "CustomerLift screenshot",
    span: "Featured project",
    technologies: ["Next.js", "TypeScript", "Laravel", "Postgres"],
    bulletPoints: [
      "Published to the Shopify App store.",
      "When store signs up, initiate request to download all store's orders (potentially millions of rows), Shopify sends the backend a webhook upon completion, dispatch Laravel job to download JSONL data and store to Postgres.",
      "Multi-tenant Postgres structure for fast queries -- one schema per store.",
      "TypeScript, Tailwind and Next.js frontend. Chart.js and HTML Canvas for the dashboard's complex charts, graphs and displays.",
    ],
  },
  {
    title: "Atomic Meditation",
    url:
      "https://play.google.com/store/apps/details?id=com.doabledanny.atomicmeditation&hl=en",
    github: "https://github.com/DoableDanny/Atomic-Meditations",
    imgNameForGraphQl: "atomicMeditation",
    imgAlt: "Atomic Meditation app screenshot",
    span: "Mobile development",
    technologies: ["React Native", "Firebase", "Google Play"],
    bulletPoints: [
      "A React Native app published to the Google play store with 100s of active users.",
      "Meditation gamified: meditate for at least 2 mins to unlock the next day.",
      "Stats such as day streak and average session time saved to local storage.",
      "Firebase for analytics and crashlytics.",
    ],
  },
  {
    title: "Clinical Trials Carbon Calculator",
    url: "https://ichdcarbon.org/",
    imgNameForGraphQl: "carbonCalculator",
    imgAlt: "Carbon calculator form screenshot",
    span: "Fullstack",
    technologies: ["React", "AntDesign", "Zustand", "Zod"],
    bulletPoints: [
      "Multi-step form for medical clinics to estimate their carbon usage.",
      "Frontend: Vite + React + TypeScript + Ant Design",
      "Form schemas and validation with Zod",
      "Local storage state management with Zustand for persisting user's form progress",
      "Backend with DotNet for calculations once form data submitted",
    ],
  },
  {
    title: "Personal Blog",
    url: "https://www.doabledanny.com/blog/",
    github: "https://github.com/DoableDanny/Doable-Danny-Blog",
    imgNameForGraphQl: "projImg2",
    imgAlt: "DoableDanny blog",
    span: "Frontend",
    technologies: ["Gatsby", "ReactJS", "GraphQL"],
    bulletPoints: [
      "Markdown blog.",
      "Images and article metadata pulled in with GraphQL.",
      "Includes comments section and Mailchimp email subscribe form.",
    ],
  },
  {
    title: "Classic Breakout Game!",
    url: "https://breakout-game-danny.herokuapp.com/",
    github:
      "https://github.com/DoableDanny/Breakout-Game-with-Online-Leader-Board",
    imgNameForGraphQl: "projImg3",
    imgAlt: "Classic Breakout Game!",
    span: "Fullstack",
    technologies: ["PHP", "MySQL", "JavaScript"],
    bulletPoints: [
      "Online leaderboard implemented with PHP and MySQL.",
      "Front-end built with HTML canvas and vanilla JS logic.",
      "Game was used to host a competition on Twitter!",
    ],
  },
]

export default function ProjectModule({
  image,
  alt,
  span,
  title,
  children,
  technologies,
  link,
  github = null,
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
        {github !== null && (
          <span>
            <a href={github} target="_blank" rel="noreferrer">
              View code
            </a>
          </span>
        )}

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
