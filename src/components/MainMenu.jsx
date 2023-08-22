import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
// import '../App.css'

function MainMenu() {

  const { gameState, setgameState } = useContext(QuizContext);

  return (
    <div className='Menu'>
      <button onClick={
        () => { setgameState("quiz") }
      }>
        Start Quiz</button>
    </div>
  )
}

export default MainMenu