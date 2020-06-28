import styled from "styled-components"

export const FooterWrapper = styled.div`
  background: linear-gradient(
    180deg,
    white,
    ${props => props.theme.colors.main1}
  );
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
  text-align: center;

  p {
    text-align: center;
    flex: 0 0 100%;
    color: #000;
    font-weight: 700;
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;

  img {
    height: 35px;
    padding: 0 1rem;
    transition: filter 0.3s ease;
    border-radius: 45%;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  img:hover,
  img:focus {
    filter: brightness(50%);
  }
`
