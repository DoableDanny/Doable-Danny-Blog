import React from "react"

export const FormInput = ({ title, id, type, value, onChange }) => (
  <>
    <label htmlFor={id}>{title}</label>
    <input id={id} type={type} value={value} onChange={onChange} required />
  </>
)

export const Message = ({ id, title, value, onChange }) => (
  <>
    <label htmlFor={id}>{title}</label>
    <textarea value={value} onChange={onChange} required />
  </>
)
