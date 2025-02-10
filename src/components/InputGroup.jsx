import UserInput from "./UserInput";

export default function InputGroup() {
    return <section id="user-input">
            <div className="input-group">

                <UserInput label="INITIAL INVESTMENT"/>
                <UserInput label="ANNUAL INVESTMENT"/>
            </div>
            <div className="input-group">
                <UserInput label="EXPECTED RETURN"/>
                <UserInput label="DURATION"/>

            </div>
            </section>
    
}