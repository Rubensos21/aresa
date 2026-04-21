import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/App.css';

import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Proyectos from './pages/Proyectos';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import homeServicios from './assets/images/homeServicios.png';
import homeProyectos1 from './assets/images/homeProyectos1.jpg';
import homeProyectos2 from './assets/images/homeProyectos2.jpg';
import homeProyectos3 from './assets/images/homeProyectos3.jpg';
import homeProyectos4 from './assets/images/homeProyectos4.jpg';
import homeProyectos5 from './assets/images/homeProyectos5.jpg';
import videoHome from './assets/vids/videoHome.mp4';
import homeNosotros from './assets/images/homeNosotros.jpg';

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  { name: 'INICIO', path: '/' },
  { name: 'NOSOTROS', path: '/nosotros' },
  { name: 'SERVICIOS', path: '/servicios' },
  { name: 'PROYECTOS', path: '/proyectos' },
  { name: 'BLOG', path: '/blog' },
  { name: 'CONTACTO', path: '/contacto' }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.slice(1);
    return path || 'inicio';
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (path: string) => {
    const target = path.slice(1) || 'inicio';
    setCurrentPage(target);
    window.history.pushState({}, '', path);
    window.scrollTo(0, 0);
  };

  const imagenes = [
    homeProyectos1,
    homeProyectos2,
    homeProyectos3,
    homeProyectos4,
    homeProyectos5,
  ];

  useEffect(() => {
    // Intervalo para cambiar imagenes
    const interval = setInterval(goToNextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  // GSAP: Animación dinámica de Hero "ARESA" hacia el Navbar fijo
  useEffect(() => {
    if (currentPage !== 'inicio' && currentPage !== '') return;

    const ctx = gsap.context(() => {
      const navLogo = document.getElementById('home-nav-logo');
      const heroTitle = document.querySelector('.hero-title');
      
      if (!navLogo || !heroTitle) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-main-section",
          start: "top top",
          end: "+=500", // Gradual hasta 500px
          scrub: true,
          invalidateOnRefresh: true
        }
      });

      tl.to(heroTitle, {
        x: () => {
          const navRect = navLogo.getBoundingClientRect();
          const heroRect = heroTitle.getBoundingClientRect();
          return navRect.left - heroRect.left;
        },
        y: () => {
          const navRect = navLogo.getBoundingClientRect();
          const heroRect = heroTitle.getBoundingClientRect();
          return navRect.top - heroRect.top;
        },
        scale: () => {
          const navRect = navLogo.getBoundingClientRect();
          const heroRect = heroTitle.getBoundingClientRect();
          return navRect.width / heroRect.width; 
        },
        transformOrigin: "top left",
        opacity: 0,
        ease: "none"
      }, 0);

      tl.to(navLogo, {
        opacity: 1,
        ease: "power1.inOut" // Crossfade suave en la llegada
      }, 0); 
      
      // Cambio de color al pasar el hero video
      gsap.to(".global-header-wrapper", {
        scrollTrigger: {
          trigger: ".nosotros-section",
          start: "top 80px", // Justo antes de que choque con el header
          toggleActions: "play none none reverse"
        },
        color: "#000",
        duration: 0.3
      });
    });

    return () => ctx.revert();
  }, [currentPage]);

  const goToPrevImage = () => {
    setCurrentIndex(prev => {
      const next = prev === 0 ? imagenes.length - 1 : prev - 1;
      animateGalleryImage();
      return next;
    });
  };

  const goToNextImage = () => {
    setCurrentIndex(prev => {
      const next = prev === imagenes.length - 1 ? 0 : prev + 1;
      animateGalleryImage();
      return next;
    });
  };

  const animateGalleryImage = () => {
    gsap.fromTo('.gallery-image-main',
      { opacity: 0.5, x: 20 },
      { opacity: 1, x: 0, duration: 0.5 }
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'nosotros':
        return <Nosotros onNavigate={handleNavigation} />;
      case 'servicios':
        return <Servicios onNavigate={handleNavigation} />;
      case 'proyectos':
        return <Proyectos onNavigate={handleNavigation} />;
      case 'blog':
        return <Blog onNavigate={handleNavigation} />;
      case 'contacto':
        return <Contacto onNavigate={handleNavigation} />;
      default:
        return (
          <div className="home-page-content">
            {/* HERO SECTION */}
            <div className="hero-main-section dark-background">
              <video
                className="background-video"
                src={videoHome}
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="overlay" />

              {/* TOP NAVBAR (UNIFIED GLOBAL) */}
              <Navbar 
                className="light-text" 
                onNavigate={handleNavigation} 
                showLogo={true} 
                logoId="home-nav-logo"
                logoStyle={{ opacity: 0 }} /* Oculto de arranque para el crossfade */
              />

              {/* HERO TEXT */}
              <div className="hero-content grid-hero">
                <h1 className="hero-title">ARESA</h1>
                <div className="hero-desc">
                  INGENIERÍA, DISEÑO ARQUITECTÓNICO Y<br />
                  CONSTRUCCIÓN EN SANTIAGO YANCUITLALPAN.<br />
                  ESPECIALISTAS EN PROYECTOS RESIDENCIALES,<br />
                  INDUSTRIALES Y HERRERÍA DE ALTA PRECISIÓN.
                </div>
              </div>
            </div>

            {/* NOSOTROS SECTION */}
            <section className="nosotros-section">
              <div className="nosotros-header">
                <div className="tag-pill">NOSOTROS</div>
                <h2 className="section-main-title">UNA CONSTRUCTORA COMPROMETIDA</h2>
              </div>

              <div className="nosotros-content grid-2-col">
                <div className="image-column">
                  <img src={homeNosotros} alt="Edificio en construcción" className="content-image" />
                </div>
                <div className="text-column">
                  <p className="content-text">
                    En ARESA somos especialistas en ingeniería y
                    arquitectura dedicados a construir soluciones a
                    medida con calidad e innovación.
                  </p>
                  <p className="content-text">
                    Nuestra misión es proporcionar soluciones
                    integrales de construcción con excelencia técnica y
                    compromiso, transformando visiones en estructuras
                    funcionales y sostenibles que superen expectativas.
                  </p>

                  <p className="content-text">
                    Aspiramos a ser referentes en el sector en México,
                    reconocidos por nuestro profesionalismo y
                    capacidad para ejecutar proyectos desafiantes,
                    contribuyendo al desarrollo arquitectónico de la
                    región.
                  </p>

                  <button
                    className="action-link text-bold"
                    onClick={() => handleNavigation('/nosotros')}
                  >
                    CONOCER MAS +
                  </button>
                </div>
              </div>
            </section>

            {/* PROYECTOS SECTION */}
            <section className="proyectos-section">
              <div className="proyectos-content grid-2-col-proyectos">
                <div className="proyectos-left-col">
                  <div className="tag-pill">PROYECTOS</div>
                  <h2 className="section-big-title">NUESTROS<br />TRABAJOS</h2>
                  <p className="content-text-small">
                    En nuestro despacho de arquitectura e<br />
                    ingeniería, diseñamos protecciones de<br />
                    acero que combinan funcionalidad y<br />
                    belleza para tu espacio.
                  </p>

                  <div className="carousel-arrows">
                    <button className="carousel-arrow" onClick={goToPrevImage}>
                      <span className="arrow-line"></span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    </button>
                    <button className="carousel-arrow" onClick={goToNextImage}>
                      <span className="arrow-line"></span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                    </button>
                  </div>
                </div>

                <div className="proyectos-right-col">
                  <div className="carousel-images">
                    <img
                      src={imagenes[currentIndex]}
                      alt={`Proyecto ${currentIndex + 1}`}
                      className="gallery-image-main"
                    />
                    <img
                      src={imagenes[(currentIndex + 1) % imagenes.length]}
                      alt={`Proyecto ${(currentIndex + 1) % imagenes.length + 1}`}
                      className="gallery-image-secondary"
                    />
                    <img
                      src={imagenes[(currentIndex + 2) % imagenes.length]}
                      alt={`Proyecto ${(currentIndex + 2) % imagenes.length + 1}`}
                      className="gallery-image-tertiary"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* SERVICIOS SECTION */}
            <section className="servicios-home-section">
              <div
                className="servicios-bg"
                style={{ backgroundImage: `url(${homeServicios})` }}
              >
                <div className="servicios-overlay">
                  <div className="servicios-content-box">
                    <div className="tag-pill dark">SERVICIOS</div>
                    <h2 className="servicios-big-title">SOLUCIONES<br />INTEGRALES</h2>
                    <p className="servicios-desc">
                      ARESA ofrece soluciones integrales en ingeniería y<br />
                      construcción, especializados en diseño<br />
                      arquitectónico, estructuras metálicas, montaje<br />
                      industrial y herrería de precisión para proyectos<br />
                      residenciales, comerciales e industriales.<br />
                      Transformamos tus ideas en realidades sólidas y<br />
                      funcionales.
                    </p>
                    <button
                      className="action-link dark-link"
                      onClick={() => handleNavigation('/servicios')}
                    >
                      CONOCE NUESTROS SERVICIOS +
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <Footer onNavigate={handleNavigation} />
          </div>
        );
    }
  };

  return (
    <div className="app-main-wrapper">
      {renderPage()}
    </div>
  );
}