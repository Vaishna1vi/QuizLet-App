/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
// import '../App.css'

function MainMenu() {

  const { gameState, setgameState } = useContext(QuizContext);

  return (
    <div className='Menu'>
      <img style={{height: '300px', width: '400px', margin: '50px', border: 'none', borderRadius: '150px'}} src="https://cdn.leverageedu.com/blog/wp-content/uploads/2020/10/19230342/brand-logo-quiz.png" alt="" />
      <button onClick={
        () => { setgameState("quiz") }
      }>
        Start Quiz</button>
    </div>
  )
}

export default MainMenu