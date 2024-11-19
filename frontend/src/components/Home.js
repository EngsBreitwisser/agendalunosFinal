// frontend/src/components/Home.js
import React from 'react';
import CalendarComponent from './calendar';

const Home = ({ userEmail }) => {
  return (
    <div>
      <h1>Bem-vindo à sua Agenda</h1>
      <CalendarComponent userEmail={userEmail} />
    </div>
  );
};

export default Home;
