import React from "react";
import questionData from "./questionData";

const QuizResult = () => {
  return (
    <div className="score-section">
      <h2>Completed!</h2>
      <h4>Total Score {props.score}/20</h4>
      <h4>
        Your Correct Question {props.CorrectAns} out of {questionData.length}
      </h4>
      <button onClick={props.handlePlayAgain}>Play Again</button>
    </div>
  );
};

export default QuizResult;
