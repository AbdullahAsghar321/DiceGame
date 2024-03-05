import { useState } from "react"
import Startgame from "./components/Startgame"
import Gameplay from "./components/Gameplay";

function App() {

  const [isGameStarted , setisGameStarted] = useState(true)

  

  const toggleGamePlay = () => {
    setisGameStarted((prev) => !(prev))
  }

  return (
   <>
   
   {isGameStarted ? <Gameplay/>: <Startgame toggle={toggleGamePlay}/>}
   
   </>
  )
}

export default App


