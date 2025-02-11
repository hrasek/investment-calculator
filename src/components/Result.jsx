import { calculateInvestmentResults, formatter } from "./../util/investment";

export default function Result({ calculationInput }) {
  const data = calculateInvestmentResults({
    initialInvestment: calculationInput.initialInvestment,
    annualInvestment: calculationInput.annualInvestment,
    expectedReturn: calculationInput.expectedReturn,
    duration: calculationInput.duration,
  });
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.year}>
            <th>{row.year}</th>
            <th>{formatter.format(row.valueEndOfYear)}</th>
            <th>{formatter.format(row.interest)}</th>
            <th>{formatter.format(row.totalInterest)}</th>
            <th>{formatter.format(row.investedCapital)}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
