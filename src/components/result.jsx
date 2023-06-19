import React from "react";

export const Result = ({ countCorrectAnswers, questionsLength, restart }) => {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Вы отгадали { countCorrectAnswers } ответа из { questionsLength }</h2>
        <button onClick={restart}>Попробовать снова</button>
      </div>
    );
  }