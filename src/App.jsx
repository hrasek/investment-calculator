import { useState } from "react";

import Header from "./components/Header/Header";
import InputGroup from "./components/InputGroup";
import Result from "./components/Result";

function App() {
  const [calculationInput, setCalculationInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  function handleInputChange(inputName, inputValue) {
    setCalculationInput((prevInputs) => ({
      ...prevInputs,
      [inputName]: inputValue,
    }));
  }
  return (
    <>
      <Header />

      <main>
        <InputGroup
          label="INITIAL INVESTMENT"
          onChangeInput={handleInputChange}
        />
        <Result calculationInput={calculationInput} />
      </main>
    </>
  );
}

export default App;
