import { MouseEventHandler, useState } from "react";
import "./Choices.css";

interface Props {
  answer: string
  options: { name: string; img: string }[];
  onAnswered: () => void
}

function Choices({ answer, options, onAnswered }: Props) {
  // first option is the correct answer
  // we shuffle them
  let [answered, setAnswered] = useState(-1);

  return (
    <>
    <ul>
      {options.map((option, index) => {
        return (
          <li
            className="choice"
            style={
              answered == -1
                ? { backgroundColor: "white" , color:"black" }
                : option.name == answer
                ? { backgroundColor: "green", color: "white" }
                :
                answered == index ?
               { backgroundColor: "red", color: "white" } 
               :
               { backgroundColor: "white" , color:"black", opacity: 0.5}
            }
            onClick={() => {
              if(answered != -1) return;
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
    {/* <h1>{answer}</h1> */}
    </>
  );
}

export default Choices;


