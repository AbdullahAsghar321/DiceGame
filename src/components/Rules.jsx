
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to Play Dice Game</h1>
        <div className="text">
      <p>Select Any Number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
background-color: #FBF1F1;
max-width: 800px;
padding: 20px;
margin-top: 40px;
margin: auto 0;
position: absolute;
top: 72%;
left: 30%;
text-align: center;
border-radius: 10px;
h1{
    font-size: 24px;
    
}
.text{
    margin-top  : 20px;
}
;
`

