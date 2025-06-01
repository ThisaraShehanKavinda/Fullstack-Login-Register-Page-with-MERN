import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { UserContextProvider } from '../context/userContext';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true
function App() {
  

  return (
    <>
    <UserContextProvider>
      <Navbar />
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      </UserContextProvider>
    </>
  )
}

export default App;
