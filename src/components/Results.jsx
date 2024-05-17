import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const results = calculateInvestmentResults({
    initialInvestment: parseInt(input.initialInvestment),
    annualInvestment: parseInt(input.annualInvestment),
    expectedReturn: parseInt(input.expectedReturn),
    duration: parseInt(input.duration),
  });

  console.log(input);
  return (
    <section>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear + item.interest)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
              </tr>
            );
          })}
          {/* <td>{results.year}</td>
            <td>{results.interest}</td>
            <td>{results.valueEndOfYear}</td>
            <td>{results.annualInvestment}</td>
            <td>sadasdasd</td> */}
        </tbody>
      </table>
    </section>
  );
}
