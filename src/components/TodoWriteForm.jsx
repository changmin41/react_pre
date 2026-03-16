//ffc
function TodoWriteForm({ hadleOnSubmit }) {
    return (
        <>
            <form onSubmit={hadleOnSubmit}>
                <input type="text" name="todo" />
                <button type="submit">등록</button>
            </form>
        </>
    )
}

export default TodoWriteForm
