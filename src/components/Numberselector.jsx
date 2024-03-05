import { useState } from "react";
import styled from "styled-components";

const Numberselector = ({error,setError, selectNumber , setselectNumber}) => {
  const array = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setselectNumber(value)
    setError("")
  }
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {array.map((value, i) => (
          <Box
            isSelected={value === selectNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default Numberselector;

const NumberSelectorContainer = styled.div`
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700;
    text-align: end;
  }

 .error {
   color  : red
}
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
