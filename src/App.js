import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Papers from './pages/Papers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/papers" element={<Papers/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
