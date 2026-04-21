import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/blog.css';
import homeNosotros from '../assets/images/homeNosotros.jpg';
import homeProyectos1 from '../assets/images/homeProyectos1.jpg';
import homeProyectos2 from '../assets/images/homeProyectos2.jpg';
import homeProyectos3 from '../assets/images/homeProyectos3.jpg';
import homeProyectos4 from '../assets/images/homeProyectos4.jpg';

interface BlogProps {
  onNavigate?: (path: string) => void;
}

const articulos = [
  {
    id: 1,
    imagen: homeProyectos1,
    categoria: 'CONSTRUCCIÓN',
    titulo: 'Sistema Tilt-Up: Innovación en Muros de Concreto',
    extracto: 'Descubre cómo esta técnica revoluciona la construcción industrial reduciendo tiempos y costos sin sacrificar resistencia estructural.',
    fecha: '15 Abril, 2026'
  },
  {
    id: 2,
    imagen: homeProyectos2,
    categoria: 'HERRERÍA',
    titulo: 'Herrería de Precisión: Del Diseño a la Instalación',
    extracto: 'Conoce el proceso meticuloso detrás de cada pieza de herrería personalizada que fabricamos en nuestro taller.',
    fecha: '10 Abril, 2026'
  },
  {
    id: 3,
    imagen: homeProyectos3,
    categoria: 'ARQUITECTURA',
    titulo: 'Tendencias en Diseño Residencial 2026',
    extracto: 'Espacios abiertos, materiales sustentables y domótica: las claves del diseño residencial contemporáneo en México.',
    fecha: '02 Abril, 2026'
  },
  {
    id: 4,
    imagen: homeProyectos4,
    categoria: 'INGENIERÍA',
    titulo: 'Supervisión de Obra: Garantía de Calidad',
    extracto: 'La importancia de contar con supervisión profesional en cada etapa del proceso constructivo.',
    fecha: '28 Marzo, 2026'
  },
  {
    id: 5,
    imagen: homeNosotros,
    categoria: 'INDUSTRIA',
    titulo: 'Naves Industriales: Factores Clave de Diseño',
    extracto: 'Desde la cimentación hasta la cubierta: aspectos técnicos esenciales para una nave industrial funcional y duradera.',
    fecha: '20 Marzo, 2026'
  }
];

const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page">
      {/* Hero */}
      <header className="blog-hero">
        <Navbar className="dark-text" onNavigate={onNavigate} showLogo={true} />

        <div className="blog-title-wrapper">
          <div className="blog-tag-pill">BLOG</div>
        </div>

        <div className="blog-subtitle-wrapper">
          <p className="blog-subtitle">
            Artículos, guías técnicas y novedades sobre<br />
            ingeniería, arquitectura y construcción.
          </p>
        </div>
      </header>

      {/* Featured Article */}
      <section className="blog-featured-section">
        <div className="blog-featured-grid">
          <div className="blog-featured-image-col">
            <img
              src={articulos[0].imagen}
              alt={articulos[0].titulo}
              className="blog-featured-image"
            />
          </div>
          <div className="blog-featured-text-col">
            <span className="blog-cat-pill">{articulos[0].categoria}</span>
            <h2 className="blog-featured-title">{articulos[0].titulo}</h2>
            <p className="blog-featured-extracto">{articulos[0].extracto}</p>
            <span className="blog-fecha">{articulos[0].fecha}</span>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="blog-grid-section">
        <div className="blog-articles-grid">
          {articulos.slice(1).map((art) => (
            <article key={art.id} className="blog-card">
              <div className="blog-card-img-wrapper">
                <img src={art.imagen} alt={art.titulo} className="blog-card-img" />
              </div>
              <div className="blog-card-body">
                <span className="blog-cat-pill small">{art.categoria}</span>
                <h3 className="blog-card-title">{art.titulo}</h3>
                <p className="blog-card-extracto">{art.extracto}</p>
                <span className="blog-fecha">{art.fecha}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Blog;