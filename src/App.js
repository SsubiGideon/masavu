
import './App.css';
import Navbar from './components/navbar';
import './components/about.css'
import './components/member.css'
import Register from './pages/register';
import './pages/register.css'
import './components/wwd.css'
import Footer from './components/footer';
import './components/footer.css'
import './components/header.css'
import './components/navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage  from "./pages/homepage"
import MoreAoutUs from './pages/more-aboutus'; 
import MoreMembership from './pages/more-membership';
import LogIn from'./pages/LogIn';
import './pages/log-in.css'
import BecomeMember from './pages/BecomeMember';
import './pages/become-member.css';


function App() {

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about-us' element={<MoreAoutUs />} />
          <Route path='/membership' element={<MoreMembership />} />
          <Route path='/contact-us' element={''} />
          <Route path='register' element={<Register />} />
          <Route path='/log in' element=
          {<LogIn />} ></Route>
          <Route path='/becomemember' element={<BecomeMember />} />
         </Routes>
         <Footer />
        </Router> 
    </div>
  );
}

export default App;
