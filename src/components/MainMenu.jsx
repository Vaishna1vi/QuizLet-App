import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'

function MainMenu() {

  const { gameState, setgameState } = useContext(QuizContext);

  return (
    <div className='container'>
      <button onClick={
        () => { setgameState("quiz") }
      }>
        Start Quiz</button>
    </div>
  )
}

export default MainMenu