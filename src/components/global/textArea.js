import styled from "styled-components"

const TextArea = styled.textarea`
  display: inline-block;
  width: 96%;
  border: 1px solid black;
  ::placeholder {
    color: darkgray; /* $ {setColor.mainGrey}; */
    font-size: 0.8rem;
    text-align: center;
  }
  &:focus {
    outline: 2px solid darkgray; /* $ {setColor.mainGrey}; */
    border-color: red;
  }
  /* $ {setFontFamily.main}; */
  padding: 0.3rem 1%;
`

export default TextArea
