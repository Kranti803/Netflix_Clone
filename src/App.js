import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./styles/app.scss"
import NetflixUI from './pages/NetflixUI';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Hero from './pages/Hero';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/netflixui' element={<NetflixUI/>}/>
      <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
   </Router>
  );
}

export default App;