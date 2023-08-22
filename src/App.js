import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu'
import { useState, useContext } from 'react';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './helpers/Contexts';

function App() {

  const [gameState, setgameState] = useState("menu");
  const [score, setscore] = useState(0);

  return (
    <div className="App">
      <h1 className='--bs-success-text-emphasis' >QUIZLET</h1>
<QuizContext.Provider value={{gameState, setgameState, score, setscore}}>
      {gameState==="menu" &&<MainMenu />}
      {gameState==="quiz" &&<Quiz />}
      {gameState==="end" &&<EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
