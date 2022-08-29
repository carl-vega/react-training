
export default function TodoItem({ onClick, id, title, selected }) {
    return (
        <div onClick={() => onClick(id)}>
            <p className={selected ? 'selected todo-title' : 'todo-title'}>{title}</p>
        </div>
    )
};
