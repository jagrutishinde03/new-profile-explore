// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component
import Admin from './components/Admin'; // Import Admin component
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/admin" element={<Admin />} /> {/* Route for the Admin page */}
      </Routes>
    </Router>
  );
};

export default App;
