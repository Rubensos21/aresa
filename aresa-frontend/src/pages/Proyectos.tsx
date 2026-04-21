import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/proyectos.css';
import homeHero from '../assets/images/homeServicios.png'; // They use standard warehouse background
import homeProyectos1 from '../assets/images/homeProyectos1.jpg';
import homeProyectos2 from '../assets/images/homeProyectos2.jpg';
import homeProyectos3 from '../assets/images/homeProyectos3.jpg';
import homeProyectos4 from '../assets/images/homeProyectos4.jpg';

interface ProyectosProps {
  onNavigate?: (path: string) => void;
}

const Proyectos: React.FC<ProyectosProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('TODO');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const proyectos = [
    {
      id: 1,
      imagen: homeProyectos1,
      descripcion: 'Sistema tilt-up en construcción\nde muros de concreto',
      categoria: 'INDUSTRIAL'
    },
    {
      id: 2,
      imagen: homeProyectos2,
      descripcion: 'Protecciones de acero\npersonalizadas',
      categoria: 'COMERCIAL'
    },
    {
      id: 3,
      imagen: homeProyectos3,
      descripcion: 'Fabricación y montaje de\npuertas con persiana louver',
      categoria: 'DOMESTICO'
    },
    {
      id: 4,
      imagen: homeProyectos4,
      descripcion: 'Creación de puertas',
      categoria: 'DOMESTICO'
    }
  ];

  const filtros = ['TODO', 'DOMESTICO', 'INDUSTRIAL', 'COMERCIAL'];

  const proyectosFiltrados = activeFilter === 'TODO' 
    ? proyectos 
    : proyectos.filter(p => p.categoria === activeFilter);

  return (
    <div className="proyectos-page">
      {/* Hero Section */}
      <section className="proyectos-hero-section">
        <div 
          className="proyectos-hero-bg"
          style={{ backgroundImage: `url(${homeHero})` }}
        >
          <div className="proyectos-hero-overlay">
            
            <Navbar className="dark-text" onNavigate={onNavigate} />

            <div className="proyectos-hero-content">
              <div className="proyectos-tag-pill-hero">PROYECTOS</div>
              <h1 className="proyectos-huge-title">NUESTROS TRABAJOS</h1>
              
              <div className="proyectos-filter-bar">
                {filtros.map((filtro) => (
                  <button
                    key={filtro}
                    className={`filter-btn ${activeFilter === filtro ? 'active' : ''}`}
                    onClick={() => setActiveFilter(filtro)}
                  >
                    {filtro}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="proyectos-main-grid-section">
        <div className="proyectos-dynamic-grid">
          {proyectosFiltrados.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-item-card">
              <div className="proyecto-img-container">
                <img src={proyecto.imagen} alt={proyecto.descripcion} />
              </div>
              <p className="proyecto-desc-text">
                {proyecto.descripcion.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}<br/>
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA and Base */}
      <section className="proyectos-cta-wrapper">
        <p className="cta-question">
          ¿Necesitas asesoría técnica gratuita? Agenda una consultoría o cotiza tu<br/>trabajo con nosotros
        </p>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Proyectos;