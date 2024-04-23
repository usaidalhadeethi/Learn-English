import './App.css';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './components/kart/Todo';
import TodoList from './components/kart/TodoList';
import { TodosContext } from "./contexts/todosContext";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },

  palette: {
    primary: {
      main: "#dd2c00",
    },
  },
});

// const initialTodos = [
//   // {
//   //   id: uuidv4(),
//   //   title: "قراءة كتاب",
//   //   details: "تيسمبتيس يتسبميتس بيمستب",
//   // },
//   // {
//   //   id: uuidv4(),
//   //   title: "قراءة كتاب",
//   //   details: "تيسمبتيس يتسبميتس بيمستب",
//   // },
//   {
//     id: uuidv4(),
//     word: "", // English word
//     translation: "", // Translation
//     sentences: [], // Array of sentences
//     picture: null, // Picture
// },
// ];


function App() {
  const [todos, setTodos] = useState([]);
  return (
    <Router> {/* Wrap your Routes with Router */}
      <div className="App">

        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/kelime-ekleme" element={
            <TodosContext.Provider value={{ todos, setTodos }}>
              <TodoList />
            </TodosContext.Provider>
          } />
        </Routes>
        
      </div>
    </Router> 
  );
}

export default App;
