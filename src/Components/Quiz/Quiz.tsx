import Choices from "./Choices";
import Question from "./Question";
import cakesList from "../../json/cakes";
import { useState } from "react";
import "./Choices.css";

function Quiz() {
  const [count, SetCount] = useState(1);
  const [show, SetShow] = useState(true);
  const [imageLoaded, SetImageLoaded] = useState(true);

  const subset = [...Array(4).keys()].map(() => random(cakesList));
  const [answer, setAnswer] = useState(subset[0]);
  const [shuffled, setShuffled] = useState(shuffle(subset));

  const answersListDefault: {
    name: string;
    country: string;
    description: string;
    img: string;
    userChoice?: string;
  }[] = [];
  const [answersList, setAnswersList] = useState(answersListDefault);

  const handleOnAnswered = (userChoice: string) => {
    const answerWithChoice: {
      name: string;
      country: string;
      description: string;
      img: string;
      userChoice?: string;
    } = answer;

    answerWithChoice.userChoice = userChoice;
    answersList.push(answerWithChoice);
    setAnswersList(answersList);

    SetCount(count + 1);
    SetShow(false);
    setTimeout(() => {
      const newSubset = [...Array(4).keys()].map(() => random(cakesList));
      const newAnswer = newSubset[0];
      setAnswer(newAnswer);
      setShuffled(shuffle(newSubset));
      SetShow(true);
      SetImageLoaded(true);
    }, 1000);
  };

  return (
    <div id="quiz">
      {count > 10 ? (
        <div style={{ marginBottom: "30px" }}>
          <h1 style={{ margin: "0px 0", textAlign: "center" }}>
            Quiz is finished
          </h1>
          <div id="quiz-result">
            {answersList.map((answer) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "400px",
                }}
              >
                <img
                  src={answer.img}
                  alt=""
                  onLoad={() => SetImageLoaded(true)}
                  style={{ objectFit: "contain" }}
                />
                <h3>Correct: {answer.name}</h3>
                <h3
                  style={{
                    color: answer.name == answer.userChoice ? "green" : "red",
                  }}
                >
                  Choice: {answer.userChoice}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          <h1 id="quiz-title">Quiz</h1>

          {show ? (
            <div id="quiz-content">
              <img
                src={answer.img}
                alt=""
                onLoad={() => SetImageLoaded(true)}
              />
              <div style={{ pointerEvents: imageLoaded ? "auto" : "none" }}>
                <Question count={count} country={answer.country} />
                <Choices
                  answer={answer.name}
                  options={shuffled}
                  onAnswered={handleOnAnswered}
                />
              </div>{" "}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

export default Quiz;

function random(
  array: { name: string; country: string; description: string; img: string }[]
) {
  return array[Math.floor(Math.random() * array.length)];
}

function shuffle(array: { name: string; img: string }[]) {
  return array.sort(() => Math.random() - 0.5);
}
