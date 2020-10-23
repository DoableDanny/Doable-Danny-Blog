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

import styled from "styled-components"

export default function SkillsLogos() {
  return (
    <LogoContainer>
      <img src={html} />
      <img src={css} />
      <img src={js} />
      <img src={sass} />
      <img src={mongodb} />
      <img src={express} />
      <img src={react} />
      <img src={node} />
      <img src={redux} />
      <img src={gatsby} />
      <img src={python} />
      <img src={firebase} />
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
      filter: drop-shadow(5px 5px 4px #4444dd);
      cursor: grab;
    }
  }
`
