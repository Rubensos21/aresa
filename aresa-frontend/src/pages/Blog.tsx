import React from 'react';
import Navbar from '../components/Navbar';

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      <Navbar />
      <div className="blog-content">
        <h1>Blog</h1>
        <p>Contenido del blog próximamente...</p>
      </div>
    </div>
  );
};

export default Blog; 