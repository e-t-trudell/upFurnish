import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
    <>
        <div className="app">
            <div className="card">
                <h1>Vite + React</h1>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path='/users' default element={<Main/>}/>
                    <Route path='/user/:id' element={<OneUser/>}/>
                    <Route path='/user/update/:id' default element={<UpdateUser/>}/>
                </Routes>
            </BrowserRouter>
        </div>
        
    </>
    )
}

export default App
