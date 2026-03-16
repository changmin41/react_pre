import TodoWriteForm from './components/TodoWriteForm'
import TodoList from './components/TodoList'
import { useTodos } from './hooks/useTodos'

function App() {
    const { todos, addTodo, removeTodo, toggleTodo } = useTodos()

    return (
        <>
            {/* 할일등록 */}
            <TodoWriteForm addTodo={addTodo} />
            <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </>
    )
}

export default App
