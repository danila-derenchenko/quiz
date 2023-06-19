import React from 'react';
import { Result } from './components/result';
import { Game } from './components/game';

import './index.scss';

function App() {

  const questions = [
    {
      title: 'Столица Российской Федерации',
      variants: ['Москва', 'Ульяновск', 'Самара'],
      correct: 0,
    },
    {
      title: 'Индейцы это...',
      variants: ['коренные жители Индии', 'коренные жители Северной Америки'],
      correct: 1,
    },
    {
      title: 'Какое официальное название Северной Кореи?',
      variants: [ 'Корея', 'Республика Северная Корея', 'Республика Корея', 'Корейская Народно-Демократическая Республика'],
      correct: 3,
    },
  ];

  const [step, setStep] = React.useState(1);
  const [countCorrectAnswers, setCount] = React.useState(0);
  const [isFinished, setFinished] = React.useState(false);

  const onSetStep = () => {
    if(step < questions.length) {
      setStep(prev => prev + 1);
    } else {
      setFinished(true)
    }
  };

  const onCheckAnswer = (event) => {
    if(event.target.id == questions[step - 1].correct) {
      setCount(prev => prev + 1);
      onSetStep();
    } else {
      onSetStep();
    }
  };

  const restart = () => {
    setCount(0);
    setStep(1);
    setFinished(false);
  }

  return (
    <div className="App">
      {
        isFinished ? (
          <Result 
            countCorrectAnswers={countCorrectAnswers} 
            questionsLength={questions.length}
            restart={restart}
          />
        ) : (
          <Game 
            numberQuestion={step}
            onCheckAnswer={onCheckAnswer}
            questions={questions}
          />
        )
      }
    </div>
  );
}

export default App;
