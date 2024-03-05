import styled from "styled-components";
import Numberselector from "./Numberselector";
import Totalscore from "./Totalscore";
import RollDiece from "./RollDiece";
import { useState } from "react";
import { Button, OutlineButton } from "../button/Button";
import Rules from "./Rules";

const Gameplay = () => {
  const [score, setScore] = useState(0);
  const [selectNumber, setselectNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error , setError] = useState();
  const[showRules , setShowRules] = useState(false)
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const roleDice = () => {
    if(!selectNumber){
    setError("Youu have not selected any Number")
      return;
    } 
    setError("")
         
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);


    if (selectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setselectNumber(undefined)
  };

  const resetScore = () => {
    setScore(0)
  }

  return (
    <TopSection>
      <div className="flex">
        <Totalscore score={score} />
        <Numberselector
          error = {error}
          setError={setError}
          selectNumber={selectNumber}
          setselectNumber={setselectNumber}
        />
      </div>
      <RollDiece currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore} >Reset</OutlineButton>   
        <OutlineButton onClick={() => setShowRules((prev) => !(prev)) }>{showRules ? "Hide " : "Show "}Rules</OutlineButton>   
        
           </div>
           {showRules && <Rules/>}
           

    </TopSection>
  );
};

export default Gameplay;

const TopSection = styled.div`
  .flex {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns{
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .btns .btn1{
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;