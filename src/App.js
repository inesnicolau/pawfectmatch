import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShelterList from './components/ShelterList';
import ShelterDetails from './components/ShelterDetails';
import VolunteerForm from './components/VolunteerForm';
import CalendarView from './components/CalendarView';
import Profile from './components/Profile';
import Login from './components/Login';
import './styles.css'; // Ensure your global styles are imported

function App() {
  // Initialize user state and set it from localStorage if available
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Update localStorage whenever the user state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]); 


  return (
    <Router>
      <div>
        <Routes>
          {/* Login route is the default route */}
          <Route path="/pawfectmatch/" element={<Login setUser={setUser} />} />
          <Route path="/shelter" element={<ShelterList />} />
          <Route path="/shelter/:id" element={<ShelterDetails />} />
          <Route path="/volunteer/:id" element={<VolunteerForm />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>

        {/* Render navbar only if user is logged in */}
        {user && (
          <div className="navbar">
            <Link to="/shelter">Shelters</Link>
            <Link to="/calendar">My Experiences</Link>
            <Link to="/profile">Profile</Link>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
