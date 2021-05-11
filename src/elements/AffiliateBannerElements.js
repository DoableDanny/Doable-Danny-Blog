import styled from "styled-components"

export const SideBannerContainerDiv = styled.div`
  height: ${props => props.articleHeight + "px"};
  width: 160px;
  position: absolute;
  left: -220px;
  top: 0;
  bottom: 0;

  @media only screen and (max-width: 1100px) {
    left: -180px;
  }
`
