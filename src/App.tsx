import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./assets/pages/LoginPage"
import { RegisterPage } from "./assets/pages/RegisterPage"


function App() {


  return (
    <Routes>
      <Route path="/" element={<h1 className='text-red-200'>Home</h1>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/tasks" element={<h1>Tasks Page</h1>} />
      <Route path="/add-task" element={<h1 className='text-red-200'>oi</h1>} />
      <Route path="/tasks/:id" element={<h1 className='text-red-200'>oi</h1>} />
      <Route path="/profile" element={<h1 className='text-red-200'>oi</h1>} />
    </Routes>
  )
}

export default App
