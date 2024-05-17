export default function input({ input, handleInput, valid }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="Initial Investment">Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) =>
              handleInput("initialInvestment", event.target.value)
            }
            name="initialInvestment"
          />
        </p>
        <p>
          <label htmlFor="Annual Investment">Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(event) =>
              handleInput("annualInvestment", event.target.value)
            }
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
            onChange={(event) =>
              handleInput("expectedReturn", event.target.value)
            }
            name="expectedReturn"
          />
        </p>
        <p>
          <label htmlFor="Duration">Duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(event) => handleInput("duration", event.target.value)}
            name="duration"
          />
          {!valid && (
            <p style={{ color: "red" , fontSize : 12}}>Duration must be greater than 0</p>
          )}
        </p>
      </div>
    </section>
  );
}
