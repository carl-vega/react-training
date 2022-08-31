
export default function RadioInput({ title, checked, handleChange }) {
    console.log(title)
    return (
        <div>
            <input type="radio" id={title} checked={checked} onChange={() => handleChange(title)} />
            <label style={{ textTransform: "capitalize" }} htmlFor={title}>{title}</label>
        </div>
    )
}
