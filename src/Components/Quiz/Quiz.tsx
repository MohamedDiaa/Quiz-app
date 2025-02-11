import Choices from "./Choices";
import Question from "./Question";
import cakesList from "../../json/cakes";
import { useState } from "react";

function Quiz() {
  let [count, SetCount] = useState(1);
  let [show, SetShow] = useState(true);
  let [imageLoaded, SetImageLoaded] = useState(true);

  let subset = [...Array(4).keys()].map(() => random(cakesList));
  let [answer, setAnswer] = useState(subset[0]);
  let [shuffled, setShuffled] = useState(shuffle(subset));

  let answersListDefault: {
    name: string;
    country: string;
    description: string;
    img: string;
    userChoice?: string;
  }[] = [answer];
  let [answersList, setAnswersList] = useState(answersListDefault);

  const handleOnAnswered = (userChoice: string) => {
    console.log("I am heremdkdfnsoinhoihworhoig")
    let answerWithChoice:{
      name: string;
      country: string;
      description: string;
      img: string;
      userChoice?: string;
    } = answer 
    
    answerWithChoice.userChoice = userChoice
    answersList.push(answerWithChoice);
    setAnswersList(answersList);

    SetCount(count + 1);
    SetShow(false);
    setTimeout(() => {
      let newSubset = [...Array(4).keys()].map(() => random(cakesList));
      let newAnswer= newSubset[0];
      setAnswer(newAnswer);
      setShuffled(shuffle(newSubset));
      SetShow(true);
      SetImageLoaded(true);
    }, 1000);
  };

  return (
    <div id="quiz">
      {count > 10 ? (
        <div style={{marginBottom:"30px"}}>
          <h1 style={{marginBottom:"10px"}}>Quiz is finished</h1>
          <div style={{display:"grid",gridTemplateColumns:"auto auto auto", padding:"100px"}}>
          {answersList.map((answer) => (
            <div style={{display:"flex", flexDirection:"column"}}>
              <img
                src={answer.img}
                alt=""
                onLoad={() => SetImageLoaded(true)}
                style={{width:"400px", objectFit:"contain"}}
              />
              <h3>Correct: {answer.name}</h3>
              <h3>Choice: {answer.userChoice}</h3>
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
                <Question count={count} />
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
