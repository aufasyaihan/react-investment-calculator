import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleInput(inputIdentifier, newValue) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <Input input={input} handleInput={handleInput} />
      <Results input={input} />
    </>
  );
}

export default App;
