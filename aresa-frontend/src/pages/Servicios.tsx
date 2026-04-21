import React from 'react';
import Navbar from '../components/Navbar';

const Servicios: React.FC = () => {
  return (
    <div className="servicios-page">
      <Navbar />
      <div className="servicios-content">
        <h1>Servicios</h1>
        <p>Lista de servicios próximamente...</p>
      </div>
    </div>
  );
};

export default Servicios; 