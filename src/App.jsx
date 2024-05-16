import Input from "./components/Input";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInput(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  return (
    <>
      <Input input={input} handleInput={handleInput} />
      <Results />
    </>
  );
}

export default App;
