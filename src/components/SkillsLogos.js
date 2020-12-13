import React from "react"
import html from "../images/svg/html5.svg"
import css from "../images/svg/css-5.svg"
import sass from "../images/svg/sass-1.svg"
import js from "../images/svg/javascript-4.svg"
import mongodb from "../images/svg/mongodb.svg"
import node from "../images/svg/nodejs_logo.svg"
import express from "../images/svg/express-109.svg"
import react from "../images/svg/react-2.svg"
import redux from "../images/svg/redux.svg"
import gatsby from "../images/svg/gatsby.svg"
import python from "../images/svg/python-5.svg"
import firebase from "../images/svg/firebase-1.svg"
import php from "../images/svg/php.svg"

import styled from "styled-components"

export default function SkillsLogos() {
  return (
    <LogoContainer>
      <img src={html} alt="html logo" />
      <img src={css} alt="css logo" />
      <img src={js} alt="js logos" />
      <img src={sass} alt="sass logo" />
      <img src={mongodb} alt="mongodb logo" />
      <img src={express} alt="expressJS logo" />
      <img src={react} alt="reactJS logo" />
      <img src={node} alt="nodeJS logo" />
      <img src={redux} alt="redux logo" />
      <img src={gatsby} alt="gatsby logo" />
      <img src={python} alt="python logo" />
      <img src={firebase} alt="firebase logo" />
      <img src={php} alt="php logo" />
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 60px;
  margin-left: 15px;

  img {
    width: 80px;
    height: 80px;
    margin: 8px;

    :hover {
      filter: drop-shadow(5px 5px 4px #487ff5);
      cursor: grab;
    }
  }

  @media only screen and (max-width: 50rem) {
    img {
      width: 70px;
      height: 70px;
    }
  }
`
