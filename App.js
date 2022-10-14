
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from './Auth';
import RegisterForm from './RegisterForm'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Register" element={<RegisterForm/>} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App