import styled from "styled-components"
import Img from "gatsby-image"

const marginLeft = "70px"
const marginLeftAndRightMobile = "16px"
const breakPoint1 = "50rem"

// Welcome section
export const WelcomeSection = styled.section`
  background-color: ${props => props.theme.colors.main1};
  padding-top: 60px;
  padding-bottom: 50px;
  min-height: 95vh;
  display: flex;
  align-items: center;
`
export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: ${marginLeft};
  margin-right: ${marginLeftAndRightMobile};
  max-width: 800px;

  * {
    margin: 16px 0px !important;
  }

  span {
    color: ${props => props.theme.colors.lightBlue};
    font-size: 1.4rem;
  }

  h2 {
    color: #e3f1f3;
    font-size: 4rem;
    line-height: 4rem;
  }

  @media only screen and (max-width: ${breakPoint1}) {
    margin-left: ${marginLeftAndRightMobile};
  }
  @media only screen and (max-width: 550px) {
    span {
      font-size: 1.1rem;
    }

    h2 {
      font-size: 2.5rem;
      line-height: 3.2rem;
    }
  }
`

export const AboutContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 55rem) {
    flex-direction: column;
    align-items: center;
  }
`

export const AboutPWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  width: 60%;
  margin-left: 20px;

  @media only screen and (max-width: 55rem) {
    margin-left: 0;
    width: 100%;
    max-width: 740px;
  }
`

export const ProfileImg = styled(Img)`
  height: 100%;
  margin-left: 35px;
  margin-top: 90px;
  margin-right: 90px;
  margin-bottom: 100px;

  @media only screen and (max-width: 75rem) {
    margin-right: 40px;
  }
  @media only screen and (max-width: 55rem) {
    margin-bottom: 0px;
  }
`

// Project showcase section
export const ProjectModulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProjectModuleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;

  a {
    color: #dcedf0;
    transition: 0.3s ease;

    :hover {
      opacity: 0.7;
    }
  }

  @media only screen and (max-width: 55rem) {
    flex-direction: column;
    text-align: center;
  }
`

export const ProjectModuleImgWrapper = styled.div`
  margin-bottom: 25px !important;
  background-color: pink;
  width: 400px;

  @media only screen and (max-width: 55rem) {
    margin-left: 0px;
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 400px) {
    width: 300px;
  }
`

export const ProjectModuleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 600px;
  margin-left: 100px;

  span:first-child {
    color: ${props => props.theme.colors.lightBlue};
  }

  h2 {
    margin-bottom: 22px;
    margin-left: 0;
    font-size: 1.7rem !important;
    line-height: 140%;
    width: 100%;
  }

  span a {
    margin-left: 0;
  }

  ul {
    color: #d3ecf0;
    line-height: 180%;
    font-size: 1.2rem;
  }

  ul li {
    margin-top: 20px;
  }

  @media only screen and (max-width: 75rem) {
    width: 400px;
  }
  @media only screen and (max-width: 60rem) {
    margin-left: 40px;
    width: 350px;
  }
  @media only screen and (max-width: 55rem) {
    flex-direction: column;
    margin-left: 0;
    width: 400px;
  }
  @media only screen and (max-width: 400px) {
    width: 300px;
    ul {
      font-size: 1.1rem !important;
    }
  }
  @media only screen and (max-width: 340px) {
    width: 265px;
  }
`

export const SpanContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 55rem) {
    justify-content: center;
  }
`

export const TechSpan = styled.span`
  color: #86afb5 !important;
  margin-right: 40px;
  margin-top: 20px;
`

// Blog section
export const BlogModulesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 70px;

  @media only screen and (max-width: 1100px) {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media only screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: auto;
  }
`

export const BlogModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 40px;
  width: 300px;
  text-align: center;
  margin-bottom: 20px;

  h2 {
    line-height: 140%;
    margin-top: 30px;
    color: #041740;
  }

  span {
    color: rgba(0, 0, 0, 0.7);
  }

  p {
    margin-bottom: 0px;
    line-height: 170% !important;
  }

  a {
    color: inherit;
    transition: 0.3s ease;

    :hover {
      opacity: 0.6;
    }
  }
`

// Contact me section
export const ContactMeSection = styled.section`
  background-color: ${props => props.theme.colors.main1};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  padding-top: 50px;
  padding-bottom: 90px;

  h2 {
    text-align: center;
    width: 100%;
    font-size: 2.3rem;
    color: #e3f1f3;
  }

  span {
    color: ${props => props.theme.colors.lightBlue};
    width: 100%;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 50px;

    label {
      color: #aececd;
      margin-bottom: 3px;
      font-size: 1.2rem;
    }

    input {
      padding: 8px;
      margin-bottom: 30px;
      font-size: 1.2rem;
      border-radius: 5px;
    }

    textarea {
      height: 250px;
      font-size: 1.2rem;
      margin-bottom: 40px;
      font-family: helvetica;
      padding: 10px;
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 650px) {
    form {
      width: 100%;
    }
  }
`

// Home page shared styled components
export const Section = styled.section`
  background-color: ${props =>
    props.color === "dark"
      ? props.theme.colors.main1
      : props.theme.colors.main2};
  padding-top: 50px;
  padding-bottom: 50px;
`

export const H = styled.h2`
  font-size: 2.3rem;
  line-height: 2.3rem !important;
  color: ${props => (props.color === "light" ? "#E3F1F3" : "#041740")};
  margin-left: ${marginLeft} !important;

  @media only screen and (max-width: ${breakPoint1}) {
    margin-left: ${marginLeftAndRightMobile} !important;
  }
`
export const P = styled.p`
  font-size: 1.3rem !important;
  color: ${props => (props.color === "light" ? "#C5E2E7" : "#041740")};
  padding-bottom: 10px;
  line-height: 200% !important;
  min-width: 290px;

  @media only screen and (max-width: ${breakPoint1}) {
    font-size: 1.2rem !important;
  }
`

export const LinkBtn = styled.a`
  background-color: ${props =>
    props.color === "primary"
      ? props.theme.colors.lightBlue
      : props.theme.colors.main2};
  border-radius: 10px;
  padding: 15px 25px;
  transition: 0.3s ease;
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  color: "black";
  margin-right: ${props => (props.mr ? "32px !important" : 0)};
  text-align: center;
  text-decoration: none;

  :hover {
    cursor: pointer;
    color: #011515;
    transform: scale(1.05);
    box-shadow: ${props => props.theme.shadows.shadow1};
  }

  @media only screen and (max-width: ${breakPoint1}) {
    font-weight: normal;
  }
`

export const LinkBtnRow = styled.div`
  display: flex;
  width: 100%;

  @media only screen and (max-width: ${breakPoint1}) {
    flex-direction: column;
  }
`
