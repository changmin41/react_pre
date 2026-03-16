import { useRef, useState } from 'react'
import TodoWriteForm from './components/TodoWriteForm'

function App() {
    const lastId = useRef(4)
    // 초기값 설정
    const [todos, setTodos] = useState([
        { id: '3', text: '공부하기', checked: true },
        { id: '2', text: '야구보기', checked: false },
        { id: '1', text: '운동하기', checked: false },
    ])
    //추가 기능
    const hadleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        setTodos([{ id: lastId.current, text: form.todo.value, checked: false }, ...todos])
        lastId.current++
    }
    //삭제 기능
    const removeTodo = (selectId) => {
        //기능
        const fileterTodos = todos.filter((todo, index) => todo.id != selectId)
        console.log(fileterTodos)
        setTodos(fileterTodos)
    }
    //체크 기능
    const toggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    return (
        <>
            //할일등록
            <TodoWriteForm hadleOnSubmit={hadleOnSubmit} />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            onChange={() => {
                                toggleTodo(todo.id)
                            }}
                            checked={todo.checked}
                        />
                        {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
                        <button onClick={() => removeTodo(todo.id)}> X</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
