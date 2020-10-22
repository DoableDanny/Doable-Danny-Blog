import React from "react"

export const FormInput = ({ title, id, type }) => (
  <>
    <label htmlFor={id}>{title}</label>
    <input id={id} type={type} />
  </>
)

export const Message = ({ id, title }) => (
  <>
    <label htmlFor={id}>{title}</label>
    <textarea />
  </>
)
