import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import aresaFooter from '../assets/images/aresafooter.png';

const menuItems = [
  { name: 'INICIO', path: '/' },
  { name: 'NOSOTROS', path: '/nosotros' },
  { name: 'SERVICIOS', path: '/servicios' },
  { name: 'PROYECTOS', path: '/proyectos' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACTO', path: '/contacto' }
];

interface FooterProps {
  onNavigate?: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <footer className="footer-wrapper">
      <div className="contact-cta-section">
        <button
          className="btn-pill-contact"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('/contacto');
            else window.location.href = '/contacto';
          }}
        >
          CONTACTANOS
        </button>
      </div>
      
      <div className="footer-section">
        <div className="footer-content">
        <div className="footer-left">
          <img src={aresaFooter} alt="Logo Aresa" className="footer-logo" />
          <div className="social-icons">
            <a href="#"><Facebook size={24} /></a>
            <a href="#"><Instagram size={24} /></a>
            <a href="#"><MessageCircle size={24} /></a>
          </div>
        </div>

        <div className="footer-links-grid">
          <div className="footer-nav">
            {menuItems.map(item => (
              <a 
                key={item.path} 
                href={item.path} 
                onClick={(e) => handleNav(e, item.path)}
              >
                {item.name.charAt(0) + item.name.slice(1).toLowerCase()}
              </a>
            ))}
          </div>

          <div className="footer-location">
            <h4>Ubicación</h4>
            <p>
              Avenida 5 de mayo 73-B, Santiago<br/>
              Yancuitlalpan, Mexico, Mexico 52766
            </p>
            
            <h4 className="mt-4">Teléfono:</h4>
            <p>55 7194 6210</p>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
