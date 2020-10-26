import styled from "styled-components"

export const AboutPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;

  @media only screen and (max-width: 58rem) {
    flex-direction: column;
  }
`

export const AboutCard = styled.div`
  float: left;
  margin: 20px;
  max-width: 600px;
`
