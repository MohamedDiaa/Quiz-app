import Choices from "./Choices";
import Question from "./Question";

function Quiz() {
  return (
    <div>
      <h1>Quiz</h1>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Mastaba-faraoun-3.jpg"
          alt=""
        />
        <div>
          <Question />
          <Choices />
        </div>
      </div>
    </div>
  );
}

export default Quiz;
