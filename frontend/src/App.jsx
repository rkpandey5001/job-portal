import Navbar from './components/shared/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Browse from './components/Browse';
import Jobs from './components/Jobs';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';



function App() {

  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="/browse" element={<Browse/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;
