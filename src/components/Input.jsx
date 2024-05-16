import { useState } from "react";

export default function input() {
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="Initial Investment">Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={handleInput}
            name="initialInvestment"
          />
        </p>
        <p>
          <label htmlFor="Annual Investment">Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={handleInput}
            name="annualInvestment"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="Expected Return">Expected Return</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={handleInput}
            name="expectedReturn"
          />
        </p>
        <p>
          <label htmlFor="Duration">Duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={handleInput}
            name="duration"
          />
        </p>
      </div>
    </section>
  );
}
