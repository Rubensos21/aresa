import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/nosotros.css';
import homeNosotros from '../assets/images/homeNosotros.jpg';
import homeServicios from '../assets/images/homeServicios.png'; // Same bg used for filosofia

interface NosotrosProps {
  onNavigate?: (path: string) => void;
}

const Nosotros: React.FC<NosotrosProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nosotros-page">
      {/* Top Header with Navbar and Title */}
      <header className="nosotros-header">
        <Navbar className="dark-text" onNavigate={onNavigate} showLogo={true} />

        <div className="nosotros-title-wrapper">
          <div className="nosotros-tag-pill">NOSOTROS</div>
        </div>
      </header>

      {/* 2-Column Main Section */}
      <section className="nosotros-main-grid">
        <div className="nosotros-image-col">
          <img
            src={homeNosotros}
            alt="Edificio en construcción"
            className="nosotros-image-full"
          />
        </div>

        <div className="nosotros-info-col">
          <div className="info-block">
            <h3>¿QUIENES SOMOS?</h3>
            <p>
              ARESA es una firma especializada en ingeniería y<br />
              arquitectura con base en Huixquilucan Estado de México.<br />
              Combinamos expertise técnico con creatividad para<br />
              ofrecer soluciones constructivas integrales, desde diseño<br />
              conceptual hasta ejecución, garantizando calidad y<br />
              funcionalidad en cada proyecto.
            </p>
          </div>

          <div className="info-block">
            <h3>MISIÓN</h3>
            <p>
              Proporcionar soluciones de ingeniería y construcción<br />
              con excelencia técnica e innovación, transformando<br />
              ideas en estructuras sostenibles que superen<br />
              expectativas. Nos comprometemos a entregar<br />
              proyectos seguros, funcionales y estéticamente<br />
              valiosos para nuestros clientes.
            </p>
          </div>

          <div className="info-block">
            <h3>VISIÓN</h3>
            <p>
              Ser el referente en ingeniería y arquitectura en<br />
              México, reconocidos por nuestra capacidad para<br />
              resolver desafíos complejos, nuestro profesionalismo<br />
              y nuestra contribución al desarrollo urbano de calidad<br />
              en la región.
            </p>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="valores-grid-section">
        <div className="valores-title-col">
          <h2 className="valores-title-big">
            NUESTROS<br />VALORES
          </h2>
        </div>

        <div className="valores-cards-col">
          <div className="valor-box">
            <h4>EXCELENCIA TÉCNICA</h4>
            <p>
              Garantizamos precisión en cada cálculo, selección de materiales premium y procesos constructivos optimizados para resultados impecables.
            </p>
          </div>
          <div className="valor-box">
            <h4>INTEGRIDAD</h4>
            <p>
              Actuamos con honestidad y transparencia en todas las etapas, desde el presupuesto hasta la entrega final del proyecto.
            </p>
          </div>
          <div className="valor-box">
            <h4>INNOVACIÓN</h4>
            <p>
              Implementamos tecnologías vanguardistas y metodologías sustentables para crear soluciones constructivas eficientes y ecoamigables.
            </p>
          </div>
          <div className="valor-box">
            <h4>TRABAJO EN EQUIPO</h4>
            <p>
              Fomentamos la sinergia entre arquitectos, ingenieros y clientes para lograr proyectos cohesionados y personalizados.
            </p>
          </div>
        </div>
      </section>

      {/* Filosofía Section */}
      <section className="filosofia-section">
        <div
          className="filosofia-bg"
          style={{ backgroundImage: `url(${homeServicios})` }}
        >
          <div className="filosofia-overlay">
            <div className="filosofia-text">
              <h2>FILOSOFÍA EMPRESARIAL</h2>
              <p>
                Creemos en construir relaciones sólidas tanto con nuestros clientes como en nuestras estructuras.
              </p>
              <p>
                Nuestro trabajo se rige por tres principios: precisión técnica, honestidad en cada proceso y búsqueda constante de innovación sustentable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Nosotros;