import styled from "styled-components"

export const AdvertsAsideContainer = styled.aside`
  height: ${props => props.articleHeight + "px"};
  width: 180px;
  position: absolute;
  left: -220px;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  ${"" /* Hacky way of preventing adverts from overflowing the bottom of short articles */}
  flex-flow: column wrap;
  overflow: hidden;

  @media only screen and (max-width: 1100px) {
    left: -180px;
  }

  @media only screen and (max-width: 995px) {
    display: none;
  }
`

export const AdvertContainer = styled.div`
  margin-top: ${props => (props.marginTop ? props.marginTop + "px" : 0)};
  background-color: #e1eafd;
  padding: 32px 8px;
  border-radius: 3px;

  h6 {
    font-size: 22px;
    margin: 24px 0 24px 0 !important;
    padding: 0px !important;
    line-height: 1.5;

    a {
      text-decoration: none;
      color: black;
    }
  }

  p {
    font-size: 18px;
    margin: 0 0 24px 0 !important;
    padding: 0px !important;
  }

  .cta {
    font-size: 20px;
    background-color: #ff90e8;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 3px;
    color: black;
    border: 0.5px solid black;
    text-decoration: none;

    &:hover {
      background-color: #ff56dd;
    }
  }
`
