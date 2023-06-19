import React from "react";

export const Game = ({ numberQuestion, questions, onCheckAnswer }) => {
    return (
      <>
        <div className="progress">
          <div style={{ width: `${(numberQuestion / questions.length) * 100}%` }} className="progress__inner"></div>
        </div>
        <h1>{ questions[numberQuestion - 1].title }</h1>
        <ul>
            {
                questions[numberQuestion - 1].variants.map((obj, index) => (
                    <li id={index} onClick={onCheckAnswer}>{ obj }</li>
                ))
            }
        </ul>
      </>
    );
  }