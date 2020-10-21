import styled from 'styled-components'
import Img from "gatsby-image"

export const WelcomeSection = styled.section`
  background-color: #000;
  padding: 50px;
  height: 85vh;
  display: flex;
  align-items: center; 
  
`
export const TextWrapper = styled.div`
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
