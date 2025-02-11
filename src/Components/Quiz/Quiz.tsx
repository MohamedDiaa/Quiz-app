import Choices from "./Choices";
import Question from "./Question";
import cakesList from "../../json/cakes";
import { useState } from "react";

function Quiz() {
  const [count, SetCount] = useState(1);

  let subset = [1, 2, 3, 4].map(() => random(cakesList));

  return (
    <div id="quiz">
      {count > 3 ? (
        <h1>Quiz is finished</h1>
      ) : (
        <>
          <h1 id="quiz-title">Quiz {count}</h1>
          <div id="quiz-content">
            <img src={subset[0].img} alt="" />
            <div>
              <Question />
              <Choices
                options={subset}
                onAnswered={() => {
                  SetCount(count + 1);
                }}
              />
            </div>
          </div>
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
