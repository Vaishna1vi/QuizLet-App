/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-whitespace-before-property */
/* eslint-disable no-undef */
import React, {useState, useContext} from 'react'
import { Questions } from '../helpers/QuestionBank';
import { QuizContext } from '../helpers/Contexts';


function Quiz() {
  const [currQuestion, setcurrQuestion] = useState(0);
  const [optionChosen, setoptionChosen] = useState("");
  const {score, setscore, gameState, setgameState} = useContext(QuizContext);

  const nextQuestion = () => {
if(Questions[currQuestion].answer == optionChosen) {
  setscore(score+1);
}
// alert(score);
setcurrQuestion(currQuestion+1);
  };

  const previousQuestion = () => {
    if(Questions[currQuestion] == Questions[0]) {
      setcurrQuestion(currQuestion);
    } else {
      setcurrQuestion(currQuestion-1);
    } 
    
  }


const finishQuiz = () => {
  if(Questions[currQuestion].answer == optionChosen) {
    setscore(score+1);
  }
  setgameState("end");
}

const handleClick = event => {
  event.currentTarget.style.backgroundColor = 'green';
}

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button onClick={() => {setoptionChosen("Option A");} }>{Questions[currQuestion].optionA}</button>
        <button onClick={() => setoptionChosen("Option B")}>{Questions[currQuestion].optionB}</button>
        <button onClick={() => setoptionChosen("Option C")}>{Questions[currQuestion].optionC}</button>
        <button onClick={() => setoptionChosen("Option D")}>{Questions[currQuestion].optionD}</button>
      </div>

      {
      currQuestion == Questions.length-1 ? <div>
      <button onClick={previousQuestion}>Previous Question</button>
      <button style={
      {
        width: '250px',
        height: '40px',
        margin: '15px',
        border: 'solid 0.5px rgb(48, 13, 80)',
        borderRadius: '50px',
        fontSize: '20px',
        cursor: 'pointer',
        backgroundColor: 'rgb(175, 53, 64)',
        marginTop: '60px',
      }
      } 
      onClick={finishQuiz}>Finish Quiz</button>
      </div> : 
      <div>
        {
          Questions[currQuestion] == Questions[0] ? <button style={{marginTop: '60px'}} onClick={nextQuestion}>Next Question</button> : 
          <div className='change'>
            <button onClick={previousQuestion}>Previous Question</button> 
      <button onClick={nextQuestion}>Next Question</button>
      </div>
        }
        </div>
}

    </div>
  )
}

export default Quiz