import React, { useState, useEffect } from 'react';
import './Navbar.css';

const menuItems = [
  { name: 'INICIO', path: '/' },
  { name: 'NOSOTROS', path: '/nosotros' },
  { name: 'SERVICIOS', path: '/servicios' },
  { name: 'PROYECTOS', path: '/proyectos' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACTO', path: '/contacto' }
];

interface NavbarProps {
  className?: string;
  onNavigate?: (path: string) => void;
  showLogo?: boolean;
  logoId?: string;
  logoStyle?: React.CSSProperties;
}

const Navbar: React.FC<NavbarProps> = ({
  className = '',
  onNavigate,
  showLogo = true,
  logoId,
  logoStyle
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`global-header-wrapper ${className} ${isMenuOpen ? 'menu-open' : ''}`}>
        {showLogo ? (
          <h2 id={logoId} className="global-header-logo" style={logoStyle}>ARESA</h2>
        ) : (
          <div />
        )}

        {/* Desktop nav */}
        <nav className="global-navbar desktop-nav" style={{ position: 'relative' }}>
          <span className="nav-corner top-left"></span>
          <span className="nav-corner top-right"></span>
          <span className="nav-corner bottom-left"></span>
          <span className="nav-corner bottom-right"></span>
          <div className="global-nav-items">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="global-nav-link"
                onClick={(e) => handleNav(e, item.path)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          <span className="nav-corner top-left"></span>
          <span className="nav-corner top-right"></span>
          <span className="nav-corner bottom-left"></span>
          <span className="nav-corner bottom-right"></span>
          <span className="mobile-menu-label">{isMenuOpen ? 'CERRAR' : 'MENU'}</span>
        </button>
      </header>

      {/* Full-screen black overlay */}
      <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-overlay-nav">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="mobile-nav-link"
              onClick={(e) => handleNav(e, item.path)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;