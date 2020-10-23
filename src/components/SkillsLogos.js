import React from "react"
import html from "../images/skills/html5.svg"
import css from "../images/skills/css-5.svg"
import sass from "../images/skills/sass-1.svg"
import js from "../images/skills/javascript-4.svg"
import mongodb from "../images/skills/mongodb.svg"
import node from "../images/skills/nodejs_logo.svg"
import express from "../images/skills/express-109.svg"
import react from "../images/skills/react-2.svg"
import redux from "../images/skills/redux.svg"
import gatsby from "../images/skills/gatsby.svg"
import python from "../images/skills/python-5.svg"
import firebase from "../images/skills/firebase-1.svg"

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
