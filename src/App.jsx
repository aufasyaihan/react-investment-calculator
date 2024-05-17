import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = input.duration > 0;

  function handleInput(inputIdentifier, newValue) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue, // parse to number, bcs it's a string
      };
    });
  }

  return (
    <>
      <Input input={input} handleInput={handleInput} valid={inputIsValid} />
      {inputIsValid && <Results input={input} />}
    </>
  );
}

export default App;
