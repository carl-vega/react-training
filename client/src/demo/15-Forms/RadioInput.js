
export default function RadioInput({ title, checked, setSwitcher }) {

    const handleInputSwitch = (event) => {
        setSwitcher(title)
    }
    return (
        <div>
            <input type="radio" id={title} checked={checked} onChange={handleInputSwitch} />
            <label style={{ textTransform: "capitalize" }} htmlFor={title}>{title}</label>
        </div>
    )
}
