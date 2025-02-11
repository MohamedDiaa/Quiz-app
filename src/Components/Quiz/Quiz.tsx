import Choices from "./Choices";
import Question from "./Question";
import cakesList from "../../json/cakes";
import { useState } from "react";

function Quiz() {
  let [count, SetCount] = useState(1);
  let [show, SetShow] = useState(true);
  let [imageLoaded, SetImageLoaded] = useState(false);

  let subset = [...Array(4).keys()].map(() => random(cakesList));
  let [answer, setAnswer] = useState(subset[0]);
  let [shuffled, setShuffled] = useState(shuffle(subset));

  return (
    <div id="quiz">
      {count > 10 ? (
        <h1>Quiz is finished</h1>
      ) : (
        <>
          <h1 id="quiz-title">Quiz</h1>

          {show ? (
            <div id="quiz-content">
              <img src={answer.img} alt="" onLoad={ () => SetImageLoaded(true)}/>
              <div style={{pointerEvents: imageLoaded ? "auto" : "none"}}>
                <Question count={count} />
                <Choices
                  answer={answer.name}
                  options={shuffled}
                  onAnswered={() => {
                    SetCount(count + 1);
                    SetShow(false);
                    setTimeout(() => {
                      let newSubset = [...Array(4).keys()].map(() =>
                        random(cakesList)
                      );
                      setAnswer(newSubset[0])
                      setShuffled(shuffle(newSubset));
                      SetShow(true);
                      SetImageLoaded(false);
                    }, 1000);
                  }}
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
