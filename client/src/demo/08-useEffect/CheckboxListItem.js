
export default function CheckboxListItem({ defaultChecked, handleChange, checked, uuid, email, name }) {

    return (
        <li>
            <input type="checkbox"
                defaultChecked={defaultChecked}
                checked={checked}
                onChange={handleChange}
                id={uuid}
                name={uuid}
                value={checked} />
            <label htmlFor={uuid} >{name}</label>
        </li>
    )
}
