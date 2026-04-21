import React from 'react';
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
}

const Navbar: React.FC<NavbarProps> = ({ 
  className = '', 
  onNavigate,
  showLogo = true
}) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <header className={`global-header-wrapper ${className}`}>
      {showLogo ? (
        <h2 className="global-header-logo">ARESA</h2>
      ) : (
        <div />
      )}
      <nav className="global-navbar" style={{ position: 'relative' }}>
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
    </header>
  );
};

export default Navbar;