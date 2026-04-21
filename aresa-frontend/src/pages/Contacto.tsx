import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/contacto.css';

interface ContactoProps {
  onNavigate?: (path: string) => void;
}

const Contacto: React.FC<ContactoProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Future: connect to backend API
    alert('Gracias por contactarnos. Nos comunicaremos contigo pronto.');
  };

  return (
    <div className="contacto-page">
      {/* Hero */}
      <header className="contacto-hero">
        <Navbar className="dark-text" onNavigate={onNavigate} showLogo={true} />

        <div className="contacto-title-wrapper">
          <div className="contacto-tag-pill">CONTACTO</div>
        </div>

        <div className="contacto-subtitle-wrapper">
          <p className="contacto-subtitle">
            ¿Listo para dar el primer paso? Escríbenos y<br />
            construyamos juntos tu próximo proyecto.
          </p>
        </div>
      </header>

      {/* Main Grid: Form + Info */}
      <section className="contacto-main-grid">
        <div className="contacto-form-col">
          <h2 className="contacto-form-title">ENVÍANOS UN MENSAJE</h2>
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">NOMBRE COMPLETO</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label htmlFor="email">CORREO ELECTRÓNICO</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">TELÉFONO</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="55 1234 5678"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="servicio">SERVICIO DE INTERÉS</label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
              >
                <option value="">Selecciona un servicio</option>
                <option value="arquitectonico">Diseño Arquitectónico</option>
                <option value="residencial">Construcción Residencial</option>
                <option value="industrial">Construcción Industrial</option>
                <option value="herreria">Herrería de Precisión</option>
                <option value="remodelacion">Remodelación</option>
                <option value="consultoria">Consultoría Técnica</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">MENSAJE</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className="contacto-submit-btn">
              ENVIAR MENSAJE
            </button>
          </form>
        </div>

        <div className="contacto-info-col">
          <div className="contacto-info-block">
            <h3>UBICACIÓN</h3>
            <p>
              Avenida 5 de mayo 73-B, Santiago<br />
              Yancuitlalpan, México, México 52766
            </p>
          </div>

          <div className="contacto-info-block">
            <h3>TELÉFONO</h3>
            <p>55 7194 6210</p>
          </div>

          <div className="contacto-info-block">
            <h3>CORREO</h3>
            <p>contacto@aresa.com.mx</p>
          </div>

          <div className="contacto-info-block">
            <h3>HORARIO</h3>
            <p>
              Lunes a Viernes: 9:00 – 18:00<br />
              Sábado: 9:00 – 14:00
            </p>
          </div>
        </div>
      </section>

      <Footer onNavigate={onNavigate} />
    </div>
  );
};

export default Contacto;