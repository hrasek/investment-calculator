export default function UserInput({ label }) {
    return (
        <p>
            <label>{label}</label>
            <input type="number" required/>
        </p>
    )
}