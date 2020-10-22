import styled from "styled-components"
import Img from "gatsby-image"

// Welcome section
export const WelcomeSection = styled.section`
  background-color: #000;
  padding: 50px;
  height: 85vh;
  display: flex;
  align-items: center;
`
export const WelcomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 18px;

  span {
    color: ${props => props.theme.colors.lightBlue};
    margin-left: 3px;
    font-size: 1.3rem;
  }

  h1 {
    color: #e3f1f3;
    font-size: 4rem;
    line-height: 4rem;
    margin: 35px 0;
  }

  h2 {
    color: #cbdee1;
    margin-left: 3px;
    font-size: 2rem;
  }
`

export const ProfileImg = styled(Img)`
  height: 100%;
  margin-left: 100px;
`

// About me section
export const AboutSection = styled.section`
  background-color: ${props => props.theme.colors.homeSection};
  padding: 30px;
`
export const AboutPWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  width: 60%;
  margin-left: 20px;
`

// My projects section
export const ProjectsSection = styled.section`
  background-color: #000;
  padding: 30px;
`

export const ProjectModulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProjectModuleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;

  div:first-child {
    margin-left: 40px;
  }

  @media only screen and (max-width: 55rem) {
    flex-direction: column;

    div:first-child {
      margin-left: 0px;
      margin-bottom: 20px;
    }
  }

  @media only screen and (max-width: 400px) {
    div:first-child {
      width: 300px;
    }
    div:first-child img {
      width: 300px !important;
      height: 230px !important;
    }
  }
`

export const ProjectModuleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  ${"" /* background-color: blue; */}
  width: 600px;
  margin-left: 100px;

  span:first-child {
    color: ${props => props.theme.colors.lightBlue};
    margin-left: 15px;
  }

  h2 {
    color: #dcedf0;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 75rem) {
    width: 400px;
  }
  @media only screen and (max-width: 65rem) {
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
  }
`

export const TechSpan = styled.span`
  color: #86afb5 !important;
  margin-right: 40px;
  margin-left: 15px;
`

// Blog section
export const BlogSection = styled.section`
  background-color: ${props => props.theme.colors.homeSection};
  padding: 30px;
`

export const BlogModulesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;

  @media only screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BlogModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width: 300px;
  text-align: center;
  ${"" /* background-color: blue; */}
  }
`

// Contact me section
export const ContactMeSection = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  padding-bottom: 90px;

  span {
    color: ${props => props.theme.colors.lightBlue};
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
      padding: 10px;
      margin-bottom: 30px;
      font-size: 1.2rem;
    }

    textarea {
      height: 300px;
      font-size: 1.4rem;
      margin-bottom: 40px;
    }

    input[type="submit"] {
      background-color: ${props => props.theme.colors.lightBlue};
      outline: none;
      border: none;
      border-radius: 10px;
      padding: 15px;
    }
  }

  @media only screen and (max-width: 650px) {
    form {
      width: 100%;
    }
  }
`

// Home page shared styled components
export const H = styled.h2`
  font-size: 2.3rem;
  color: ${props => (props.color === "light" ? "#E3F1F3" : "#032F35")};
  padding-left: 20px;
`
export const P = styled.p`
  font-size: 2.5rem;
  color: ${props => (props.color === "light" ? "#C5E2E7" : "#032F35")};
  padding-bottom: 10px;
  line-height: 200% !important;
  min-width: 290px;
`

export const FlexRow = styled.div`
  display: flex;
`
