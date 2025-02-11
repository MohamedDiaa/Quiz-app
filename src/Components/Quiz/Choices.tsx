import "./Choices.css";

interface Props {

  options: {name: string, img: string}[]
}

function Choices({options}:Props) {

  return (
    <ul>
      {options.map((option, index) => {
        return <li className="choice">{option.name}</li>;
      })}
    </ul>
  );
}

export default Choices;
