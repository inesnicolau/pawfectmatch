// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ShelterList from './components/ShelterList';
import ShelterDetails from './components/ShelterDetails';
import VolunteerForm from './components/VolunteerForm';
import CalendarView from './components/CalendarView';
import Profile from './components/Profile';
import Login from './components/Login';
import './styles.css'; // Ensure your global styles are imported

function App() {
  const [user, setUser] = useState(null); // Initialize user state

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
