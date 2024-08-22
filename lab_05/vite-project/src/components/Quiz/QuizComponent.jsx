import { useState } from "react";
import "./QuizComponent.css";
import AnswerTimer from "../AnswerTimer/AnswerTimer";

const QuizComponent = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);
  const [showAnswerTimer, setShowAnswerTimer] = useState(true);

  const { question, choices, correctAnswer } = props.questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);

    if (answer === correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  const onClickNext = (isFinalAnswer) => {
    setAnswerIdx(null);
    setShowAnswerTimer(false);

    setResult((prev) => {
      return isFinalAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          };
    });

    if (currentQuestion !== props.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setCurrentQuestion(0);
      setShowResult(true);
    }

    setTimeout(() => setShowAnswerTimer(true));
  };

  const onTryAgain = () => {
    setShowResult(false);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
  };

  const handleTimeUp = () => {
    setAnswer(false);
    onClickNext(false);
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          {showAnswerTimer && (
            <AnswerTimer duration={8} onTimeUp={handleTimeUp} />
          )}
          <span className="active-question-no">{currentQuestion + 1}</span>
          <span className="total-question">/{props.questions.length}</span>
          <h2>{question}</h2>
          <ul>
            {choices.map((answer, index) => (
              <li
                onClick={() => onAnswerClick(answer, index)}
                key={answer}
                className={answerIdx === index ? "selected-answer" : ""}
              >
                {answer}
              </li>
            ))}
          </ul>
          <div className="footer">
            <button
              onClick={() => onClickNext(answer !== null)}
              disabled={answerIdx == null}
            >
              {currentQuestion === props.questions.length - 1
                ? "Finish"
                : "Next"}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="result">
            <h3>Result</h3>
            <p>
              Total questions: <span>{props.questions.length}</span>
            </p>
            <p>
              Total Score: <span>{result.score}</span>
            </p>
            <p>
              Total correct answers: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Total wrong answers: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={onTryAgain}>Try Again</button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComponent;