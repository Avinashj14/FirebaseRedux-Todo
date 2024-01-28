//AllRoutes.js.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import SignIn from '../auth/SignIn';
import SignUp from '../auth/SignUp';
import NavBar from '../nav/Navbar';
import NotFound from '../notfound/Notfound';
import Dashboard from '../dashboard/dashboard';
import Home from '../Home';






const AllRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path= "/Navbar" element={<NavBar/>}/>
      <Route path="/SignIn" element={<SignIn/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="*" element={<NotFound/>} />
    
    </Routes>
  </Router>
  );
};

export default AllRoutes;