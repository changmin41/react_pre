import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import List from './pages/List'
import Form from './pages/Form'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="/list" element={<List />}></Route>
                <Route path="/new" element={<Form />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
