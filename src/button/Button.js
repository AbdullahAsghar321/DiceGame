import styled from "styled-components"

export const Button = styled.button`

color: white;
padding: 10px 18px;
background-color: #000000;
border-radius: 5px;
min-width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: all ease-in-out 0.2s;

&:hover{
  cursor: pointer;
  background-color: white;
  color: black;
  border: 1px solid black;
  transition: all ease-in-out 0.2s;
}

`;

export const OutlineButton = styled(Button)`
background-color: white;
color: black;
border: 1px solid black;

&:hover{
    background-color: black;
    color: white;

}
`