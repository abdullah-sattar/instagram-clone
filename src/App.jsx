import './App.scss';
import users from "./data/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from './Components/UserProfile/UserProfile';
import { useState } from 'react/cjs/react.production.min';
import NavBar from './Components/NavBar/NavBar';
import UserList from './Components/UserList/UserList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState();

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <Router> 
      <NavBar searchTerm={searchTerm} handleInput={handleInput}/>
      <Routes>
        <Route path="/" element={<UserList searchTerm={searchTerm}/>}/>
        <Route path="/:name" element={<UserProfile users={users}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
