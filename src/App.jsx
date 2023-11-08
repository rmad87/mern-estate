import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import profile from './pages/profile'
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<About />} />
        <Route path="/profile" element={<profile />} />
 
      </Routes>
    </BrowserRouter>
  )
}
