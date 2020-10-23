import styled from "styled-components"

export const FooterWrapper = styled.div`
  background: ${props => props.theme.colors.main1};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1.8rem;
`
export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${props => props.theme.colors.main1};

  p {
    text-align: center;
    flex: 0 0 100%;
    color: ${props => props.theme.colors.lightBlue};
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;

  img {
    height: 50px;
    transition: filter 0.3s ease;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-right: 20px;
  }

  img:hover,
  img:focus {
    filter: brightness(50%);
  }
`
