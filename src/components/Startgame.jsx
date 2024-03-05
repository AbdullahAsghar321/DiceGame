import styled from "styled-components";
import { Button } from "../button/Button";


const Startgame = ({toggle}) => {
  return (
    <Container>
      <div><img src="./images/dices.png" alt="" /></div>
      <div className="play-game">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now </Button>
      </div>
    </Container>
  );
};

export default Startgame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  
  .play-game h1{
    font-size: 96px;
    white-space: nowrap;
  }
  .play-game{
    margin: 0 auto;
    text-align: center;
  }
`;


