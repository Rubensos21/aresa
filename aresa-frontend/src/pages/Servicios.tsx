import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/servicios.css';
import homeServicios from '../assets/images/homeServicios.png';
import homeProyectos1 from '../assets/images/homeProyectos1.jpg';
import homeProyectos2 from '../assets/images/homeProyectos2.jpg';
import homeProyectos3 from '../assets/images/homeProyectos3.jpg';

interface ServiciosProps {
  onNavigate?: (path: string) => void;
}

const servicios = [
  {
    titulo: 'DISEÑO ARQUITECTÓNICO',
    descripcion: 'Creamos espacios funcionales y estéticamente impactantes. Desde la conceptualización hasta los planos ejecutivos, cada diseño refleja la identidad y necesidades de nuestros clientes.',
    imagen: homeProyectos1
  },
  {
    titulo: 'CONSTRUCCIÓN RESIDENCIAL',
    descripcion: 'Ejecutamos proyectos de vivienda con los más altos estándares de calidad. Casas unifamiliares, departamentos y desarrollos habitacionales con acabados de primera.',
    imagen: homeProyectos2
  },
  {
    titulo: 'CONSTRUCCIÓN INDUSTRIAL',
    descripcion: 'Naves industriales, bodegas y plantas de producción. Utilizamos sistemas constructivos como Tilt-Up y estructura metálica para máxima eficiencia y durabilidad.',
    imagen: homeProyectos3
  },
  {
    titulo: 'HERRERÍA DE PRECISIÓN',
    descripcion: 'Fabricación e instalación de estructuras metálicas, protecciones, portones, escaleras y barandales. Herrería funcional con acabados de alta calidad.',
    imagen: homeServicios
  },
  {
    titulo: 'REMODELACIÓN',
    descripcion: 'Transformamos espacios existentes con intervenciones inteligentes. Ampliaciones, revestimientos, adecuaciones estructurales y actualización de instalaciones.',
    imagen: homeProyectos1
  },
  {
    titulo: 'CONSULTORÍA TÉCNICA',
    descripcion: 'Asesoramos en factibilidad, presupuestos, supervisión de obra y dictámenes estructurales. Respaldo profesional para decisiones informadas en cada etapa.',
    imagen: homeProyectos2
  }
];

const Servicios: React.FC<ServiciosProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="servicios-page">
      {/* Hero */}
      <header className="servicios-hero">
        <Navbar className="dark-text" onNavigate={onNavigate} showLogo={true} />

        <div className="servicios-title-wrapper">
          <div className="servicios-tag-pill">SERVICIOS</div>
        </div>

        <div className="servicios-subtitle-wrapper">
          <p className="servicios-subtitle">
            Soluciones integrales de ingeniería, diseño y<br />
            construcción para proyectos de cualquier escala.
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="servicios-grid-section">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className={`servicio-row ${index % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div className="servicio-image-col">
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                className="servicio-image"
              />
            </div>
            <div className="servicio-text-col">
              <span className="servicio-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="servicio-titulo">{servicio.titulo}</h3>
              <p className="servicio-descripcion">{servicio.descripcion}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="servicios-cta">
        <p className="servicios-cta-text">
          ¿Tienes un proyecto en mente? Cotiza sin compromiso<br />
          y déjanos transformar tu visión en realidad.
        </p>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Servicios;