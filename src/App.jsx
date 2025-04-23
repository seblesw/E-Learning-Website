import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './i18n'; 
import Courses from './pages/Courses/Courses';
import Discussions from './pages/Discussions/Discussions';
import Resources from './pages/Resources/Resources';
import Assignments from './pages/Assignments/Assignments';
import Signup from './pages/Signup/signup';
import SoftwareEssentials from './pages/curriculum/SoftwareEngi';
import DataScience from './pages/curriculum/Data Science';
import AI from './pages/curriculum/AI';
import AIBootcamp from './pages/curriculum/AI';
import Cybersecurity from './pages/curriculum/Cybersecurity';
import ProductDesign from './pages/curriculum/Product Design';


function App() {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Resources" element={< Resources/>} />
        <Route path="/Assignments" element={<Assignments />} />
        <Route path="/discussions" element={<Discussions />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/curriculum/software-engineering" element={<SoftwareEssentials />} />
        <Route path="/curriculum/Data-Science" element={<DataScience />} />
        <Route path="/curriculum/artificial-intelligence" element={<AIBootcamp />} />
        <Route path="/curriculum/cybersecurity" element={<Cybersecurity />} />
        <Route path="/curriculum/product-design" element={<ProductDesign />} />
        </Routes>
    </Router>
  );
}

export default App;
