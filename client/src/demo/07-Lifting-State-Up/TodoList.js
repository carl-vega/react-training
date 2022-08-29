import { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
    const [todoInput, setTodoInput] = useState('')
    const [todos, setTodos] = useState([
        { title: "Fight Gravity", selected: false, id: 0 },
        { title: "Make Pyramid", selected: false, id: 1 },
        { title: "Wash T-rex", selected: false, id: 2 },
        { title: "Drill holes plates", selected: false, id: 3 },
        { title: "Shorten one leg on chairs", selected: false, id: 4 }
    ])
    const handleNewTodo = (e) => {
        e.preventDefault();
        const newTodo = { title: todoInput, selected: false, id: todos[todos.length - 1].id + 1 }
        setTodos([...todos, newTodo])
        setTodoInput('')
    }
    const handleTodoSelection = (todoId) => {
        const todoIndex = todos.findIndex(({ id }) => id === todoId)
        const todo = todos.find(({ id }) => id === todoId)
        const currentTodos = [...todos]
        currentTodos[todoIndex].selected = !todo.selected
        setTodos([...currentTodos])
    }
    const handleDelete = () => {
        const currentTodos = [...todos]
        const filteredTodos = currentTodos.filter(({ selected }) => (!selected))
        setTodos([...filteredTodos])
    }
    return (
        <div className='todo-container'>
            {todos.map((todo) => (<TodoItem key={todo.id} {...todo} onClick={handleTodoSelection} />))}
            <button onClick={handleDelete}>
                delete
            </button>
            <form onSubmit={handleNewTodo}>
                <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    )
}
