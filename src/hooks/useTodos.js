import { useState, useRef } from 'react'

export function useTodos() {
    const lastId = useRef(4)
    // 초기값 세팅: 기본 TODO 리스트를 설정
    const [todos, setTodos] = useState([
        { id: 3, text: '공부하기', checked: true },
        { id: 2, text: '코딩하기', checked: false },
        { id: 1, text: '운동하기', checked: true },
    ])
    // 추가 기능: 새로운 TODO를 리스트에 추가
    const addTodo = (text) => {
        const todo = { id: lastId.current, text, checked: false }
        setTodos([todo, ...todos])
        lastId.current++
    }
    // 삭제 기능: 선택된 ID의 TODO를 리스트에서 제거
    const removeTodo = (seletedId) => {
        const filterTodos = todos.filter((todo) => todo.id != seletedId)
        setTodos(filterTodos)
    }
    // 체크 기능: 선택된 ID의 TODO의 체크 상태를 토글
    const toggleTodo = (seletedId) => {
        const updateTodos = todos.map((todo) => (todo.id == seletedId ? { ...todo, checked: !todo.checked } : todo))
        setTodos(updateTodos)
    }

    return { todos, addTodo, removeTodo, toggleTodo }
}
