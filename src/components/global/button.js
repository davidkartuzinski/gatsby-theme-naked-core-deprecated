import styled from "styled-components"

const Button = styled.button`
  display: inline-block;
  width: 100%;
  padding: 0.25rem 0;
  /* background-color: $ {setColor.accentColor}; */
  color: #111; /*$ {setColor.offWhite};*/
  text-transform: capitalize;
  padding: 0.25em 1em;
  font-size: 1rem;
  /* $ {setFontFamily.main}; */
  border: 1px solid darkgray; /* $ {setColor.accentColor};*/
  border-radius: 0;
  &:hover {
    background: lightgray; /* $ {setColor.mainGrey};*/
    /* $ {setTransition()}; */
  }
  text-decoration: none;
  cursor: pointer;
  margin: 0.5rem 0;
`

export default Button
