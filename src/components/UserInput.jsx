import { useState } from "react";

export default function UserInput({ label, onChangeInput, name }) {
  const [value, setValue] = useState("");

  function handleInputChange(event) {
    let newValue = Number(event.target.value);
    newValue = Math.abs(newValue);
    setValue(newValue);
    onChangeInput(name, newValue);
  }
  return (
    <p>
      <label>{label}</label>
      <input
        type="number"
        required
        min="0"
        value={value}
        onChange={handleInputChange}
      />
    </p>
  );
}
