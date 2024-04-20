import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Router> {/* Wrap your Routes with Router */}
      <div className="App">
        <Routes>
        <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
