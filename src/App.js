import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu'
import { useState, useContext } from 'react';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { QuizContext } from './helpers/Contexts';

function App() {

  const [gameState, setgameState] = useState("menu");

  return (
    <div className="App bg-slate-600">
      <h1 className='bg-slate-500 hover:border-x-2 hover:border-blue-100' >QUIZLET</h1>
<QuizContext.Provider value={{gameState, setgameState}}>
      {gameState==="menu" &&<MainMenu />}
      {gameState==="quiz" &&<Quiz />}
      {gameState==="end" &&<EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
