
import styled from "styled-components"

const RollDiece = ({roleDice , currentDice}) => {
  return (
    <DiceContainer>
        <div>
        <div className="Dice" onClick={ roleDice}>
        <img src={`images/dice_${currentDice}.png`} alt="This is an image" />
        </div>
            <p>Click on Dice to Roll</p> 
      </div>
    </DiceContainer>
  )
}

export default RollDiece

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 48px;
   p{
    font-size: 24px;
    text-align: center;

   }
   .Dice{
    cursor: pointer;

   }
`
