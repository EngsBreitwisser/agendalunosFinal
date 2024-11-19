// frontend/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import AddReminderPage from './components/AddReminderPage';

function App() {
  const [userEmail, setUserEmail] = useState(null);

  const handleLogin = (email) => {
    setUserEmail(email);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Home userEmail={userEmail} />} />
        <Route path="/add-reminder" element={<AddReminderPage userEmail={userEmail} />} />
      </Routes>
    </Router>
  );
}

export default App;
