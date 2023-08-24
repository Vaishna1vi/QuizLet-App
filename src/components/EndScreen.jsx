import React, { useContext } from 'react'
import { QuizContext } from '../helpers/Contexts'
import { Questions } from '../helpers/QuestionBank'
// import '../App.css'

function EndScreen() {

const {score, setscore, setgameState} = useContext(QuizContext)

const restart = () => {
  setscore(0);
setgameState("menu");
}

  return (
    <div className='EndScreen'>
      <h1 
      // style={{color: 'white', fontSize: '50px'}}
      >Quiz Finished!!</h1>
      <img 
      // style={{ height: '200px', width: '200px' }} 
      src="https://cdn-icons-png.flaticon.com/256/4359/4359741.png" alt="" />
      <h2 style={{color: 'navy', fontSize: '30px'}} >Your Score is: {score} / {Questions.length} </h2>
      <button onClick={restart}
      // style={
       
      // }
      >Restart Quiz</button>
    </div>
  )
}

export default EndScreen