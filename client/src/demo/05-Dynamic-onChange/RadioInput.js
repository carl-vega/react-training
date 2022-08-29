
export default function RadioInput({ title, checked, setSwitcher }) {
    console.log(title)

    const handleInputSwitch = () => {
        setSwitcher(title)
    }
    return (
        <div>
            <input type="radio" id={title} checked={checked} onChange={() => setSwitcher(title)} />
            <label style={{ textTransform: "capitalize" }} htmlFor={title}>{title}</label>
        </div>
    )
}
