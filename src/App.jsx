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
        [inputIdentifier]: +newValue, // + means parse to number, bcs it's a string
      };
    });
  }

  return (
    <>
      <Input input={input} handleInput={handleInput} />
      {!inputIsValid ? (
        <p className="center" style={{ color: "red" }}>
          Duration must be greater than 0
        </p>
      ) : (
        inputIsValid && <Results input={input} />
      )}
    </>
  );
}

export default App;
