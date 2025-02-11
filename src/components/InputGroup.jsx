import UserInput from "./UserInput";

export default function InputGroup({ onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput
          label="INITIAL INVESTMENT"
          name="initialInvestment"
          onChangeInput={onChangeInput}
        />
        <UserInput
          label="ANNUAL INVESTMENT"
          name="annualInvestment"
          onChangeInput={onChangeInput}
        />
      </div>
      <div className="input-group">
        <UserInput
          label="EXPECTED RETURN"
          name="expectedReturn"
          onChangeInput={onChangeInput}
        />
        <UserInput
          label="DURATION"
          name="duration"
          onChangeInput={onChangeInput}
        />
      </div>
    </section>
  );
}
