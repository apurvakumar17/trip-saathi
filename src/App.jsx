import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import LoginSignup from './LoginSignup'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  )
}

export default App
