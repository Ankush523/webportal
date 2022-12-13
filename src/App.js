import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Papers from './pages/Papers';
import Patents from './pages/Patents';
import NewData from './pages/NewData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/papers" element={<Papers/>}/>
          <Route path="/patents" element={<Patents/>}/>
          <Route path="/newdata" element={<NewData/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
