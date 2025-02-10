import "./Choices.css";

function Choices() {
  let choices = ["answer1", "answer2", "answer3", "answer4"];

  return (
    <ul>
      {choices.map((option, index) => {
        return <li className="choice">{option}</li>;
      })}
    </ul>
  );
}

export default Choices;
