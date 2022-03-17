import './App.scss';
import users from "./data/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from './Components/UserProfile/UserProfile';
import { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import UserList from './Components/UserList/UserList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState([]);

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  }
  
  useEffect(() => {
    setUser(users.filter(user => {return user.name.includes(searchTerm)}));
  }, [searchTerm])

  return (
    <Router> 
      <NavBar handleInput={handleInput}/>
      <Routes>
        <Route path="/" element={<UserList user={user}/>}/>
        <Route path="/:name" element={<UserProfile users={users}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
