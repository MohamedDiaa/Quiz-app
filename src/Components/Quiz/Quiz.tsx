import Choices from "./Choices";
import Question from "./Question";
import cakesList from "../../json/cakes";

function Quiz() {

  let subset = [1,2,3,4].map(() => random(cakesList))

  return (
    <div id="quiz">
      <h1 id="quiz-title">Quiz</h1>
      <div id="quiz-content">
        <img
          src= {subset[0].img}
          alt=""
        />
        <div>
          <Question />
          <Choices options={subset} />
        </div>
      </div>
    </div>
  );
}

export default Quiz;

 function random(array:  { name: string, country: string, description: string, img: string  }[]) {
  return array[Math.floor((Math.random()*array.length))];
}
