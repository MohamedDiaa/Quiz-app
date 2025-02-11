import { useState } from "react";
import "./App.css";
import Boarding from "./Components/Boarding/Boarding";
import Quiz from "./Components/Quiz/Quiz";

function App() {
  const [bordingFinished, setBoardingFinished] = useState(false);

  return (
    <div className="Container">
      <div>
        {bordingFinished ? (
          <Quiz />
        ) : (
          <Boarding
            onFinish={() => {
              setBoardingFinished(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
