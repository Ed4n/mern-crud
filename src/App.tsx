import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage"
import { RegisterPage } from "./pages/RegisterPage"
import { TaskPage } from "./pages/TaskPage"
import { TaskFormPage } from "./pages/TaskFormPage"
import { ProfilePage } from "./pages/ProfilePage"
import { ProtectedRoutes } from "./ProtectedRoutes"

import { Home } from "./pages/HomePage"
import { Nav } from "./components/Nav"


function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/tasks" element={<TaskPage />} />
          <Route path="/add-task" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
