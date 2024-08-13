import { Route, Routes } from "react-router-dom"
import { LoginPage } from "./assets/pages/LoginPage"
import { RegisterPage } from "./assets/pages/RegisterPage"
import { TaskPage } from "./assets/pages/TaskPage"
import { TaskFormPage } from "./assets/pages/TaskFormPage"
import { ProfilePage } from "./assets/pages/ProfilePage"
import { ProtectedRoutes } from "./ProtectedRoutes"
import { Nav } from "./assets/components/Nav"
import { Home } from "./assets/pages/HomePage"


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
