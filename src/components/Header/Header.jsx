import logo from "./../../assets/investment-calculator-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <img src={logo} className="img"></img>
      <h1>Investment Calculator</h1>
    </header>
  );
}
