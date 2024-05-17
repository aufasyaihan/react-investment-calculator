import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const results = calculateInvestmentResults(input);

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
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(input.annualInvestment + input.initialInvestment + item.interest)}</td>
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
