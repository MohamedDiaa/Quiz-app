import { MouseEventHandler, useState } from "react";
import "./Choices.css";

interface Props {
  options: { name: string; img: string }[];
  onAnswered: () => void
}

function Choices({ options, onAnswered }: Props) {
  // first option is the correct answer
  // we shuffle them
  const [answered, setAnswered] = useState(-1);

  let answer = options[0];
  let shuffled = shuffle(options);
  return (
    <ul>
      {shuffled.map((option, index) => {
        return (
          <li
            className="choice"
            style={
              answered == -1
                ? { backgroundColor: "white" }
                : option.name == answer.name
                ? { backgroundColor: "green", color: "white" }
                : { backgroundColor: "red", color: "white" }
            }
            onClick={() => {
              setAnswered(index);
              setTimeout(() => {
                onAnswered()
              }, 1000);
            }}
          >
            {option.name}
          </li>
        );
      })}
    </ul>
  );
}

export default Choices;

function shuffle(array: { name: string; img: string }[]) {
  return array.sort(() => Math.random() - 0.5);
}
