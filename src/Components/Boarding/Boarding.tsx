import { useState, useEffect } from "react";
import "./Boarding.css";

interface Props {

    onFinish: () => void; 
}

function Boarding({onFinish}: Props) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) {
        onFinish()
    }
      setTimeout(() => {
        console.log(count);
        setCount((count) => count + 1);
      }, 1200);
    
  });

  return (
    <div id="boarding-div">
      <h1>{count}</h1>
    </div>
  );
}

export default Boarding;
