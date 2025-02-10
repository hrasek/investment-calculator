import { calculateInvestmentResults, formatter } from "./../util/investment";

const initialInvestment = 15000;
const annualInvestment = 900;
const expectedReturn = 5.5;
const duration = 12;

const data = calculateInvestmentResults({
  initialInvestment: initialInvestment,
  annualInvestment: annualInvestment,
  expectedReturn: expectedReturn,
  duration: duration,
});

export default function Result() {
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
        {/* <tr>
          <th>1</th>
          <th>$16,725</th>
          <th>$825</th>
          <th>$825</th>
          <th>$15,900</th>
        </tr> */}
      </tbody>
    </table>
  );
}
