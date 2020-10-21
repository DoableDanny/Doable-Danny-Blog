import styled from 'styled-components'
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
      color: #E3F1F3;
      font-size: 4rem;
      line-height: 4rem;
      margin: 35px 0;
  }

  h2 {
      color: #CBDEE1;
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
    padding: 55px;
`
export const AboutPWrapper = styled.div`
    margin-top: 60px;
    margin-bottom: 60px;
    width: 60%;
`

// Home page shared styled components
export const H = styled.h2`
    font-size: 2rem;
    color:#032F35;
`
export const P = styled.p`
    font-size: 2.5rem;
    color:#032F35;
    padding-bottom: 20px;
    line-height: 200% !important;
    min-width: 290px
`

export const FlexRow = styled.div`
    display: flex;
`