import styled from "styled-components"

export const FORM = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 48px auto;
`

export const SubscribeInput = styled.input.attrs({ type: "submit" })`
  padding: 8px 11px;
  background-color: green;
  -webkit-appearance: none;
  color: #fff;
  font-size: 20px;
  display: block;
  width: 100%;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 32px;

  :hover {
    transform: scale(1.05);
    background-color: #006400;
  }
`
export const UserInput = styled.input`
  margin-bottom: 6px;
  padding: 8px;
  font-size: 15px;
  width: 100%;
`
