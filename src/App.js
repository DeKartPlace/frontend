import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { Navigate } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home';
import Mainform from './pages/addprod/Mainform';
import Profile from './pages/profile/profile';
import AboutUs from './pages/AboutUs'; 

import './App.css'

function App() {
  const { user } = useAuthContext();
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user?<Login/>:<Navigate to="/home"/>}/>
          <Route path="/home" element={user?<Home/>:<Navigate to="/"/>}/>
          <Route path="/sell" element={user?<Mainform/>:<Navigate to="/"/>}/>
          <Route path="/dashboard" element={user?<Profile/>:<Navigate to="/"/>}/>
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
