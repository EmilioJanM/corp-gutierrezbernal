import React, { useEffect, useState } from 'react';
import { Shield, Scale, Lightbulb, Users, Lock, HeartHandshake, ChevronRight, X, Menu } from 'lucide-react';
import './index.css';

const teamMembers = [
  {
    name: 'Maestro Aldo Alfredo Gutiérrez Bernal',
    role: 'Fundador y Director General',
    image: '/images/image7-1-768x1024.png',
    description: ''
  },
  {
    name: 'Lic. Oscar Torres Nuñez',
    role: 'Dirección de Asuntos Bancarios',
    image: '/images/image19-768x1024.png',
    description: ''
  },
  {
    name: 'Lic. Marco Antonio Amaya López',
    role: 'Coordinador Jurídico de Amparo y Legaltech',
    image: '/images/image20-895x1024.jpeg',
    description: ''
  },
  {
    name: 'Lic. Francisco Camela Solís',
    role: 'Dirección de Asuntos Mercantiles',
    image: '/images/image18-768x1024.png',
    description: ''
  },
  {
    name: 'Lic. Jorge Felipe Martínez-Ballesteros Bernal',
    role: 'Coordinador Derecho Corporativo y Empresarial',
    image: '/images/image14-768x1024.png',
    description: ''
  },
  {
    name: 'Lic. Cesar U. Mendoza Galicia',
    role: 'Abogado Jr. Penal',
    image: '/images/image17-768x1024.png',
    description: ''
  },
  {
    name: 'Lic. Javier Noé Velázquez Herrera',
    role: 'Dirección de Asuntos Penales y Contenciosos',
    image: '/images/image16-2-768x1024.png',
    description: ''
  },
  {
    name: 'Lic. Gabriel Rodríguez Rodríguez',
    role: 'Asistente Dir. Gral. Jurídica',
    image: '/images/image15-768x1024.png',
    description: ''
  }
];

const values = [
  { icon: Shield, title: 'Integridad', desc: 'Actuamos con honestidad y transparencia, garantizando que nuestros clientes confíen en nuestra representación.' },
  { icon: Scale, title: 'Compromiso', desc: 'Nos dedicamos a la defensa de los derechos, utilizando tecnología avanzada para lograr los mejores resultados.' },
  { icon: HeartHandshake, title: 'Excelencia', desc: 'Buscamos la excelencia en nuestro trabajo y en el servicio al cliente, esforzándonos por superar las expectativas.' },
  { icon: Lightbulb, title: 'Innovación', desc: 'Fomentamos la innovación mediante la implementación de inteligencia artificial y nuestra colaboración con LegalX.' },
  { icon: Users, title: 'Democratización', desc: 'Ofrecemos soluciones legales efectivas y accesibles, eliminando barreras al acceso a la justicia.' },
  { icon: Lock, title: 'Confidencialidad', desc: 'Respetamos la privacidad de la información de nuestros clientes como un principio fundamental.' },
];

const clientImages = [
  '/images/image29.png',
  '/images/image26.png',
  '/images/image25.png',
  '/images/image33.png',
  '/images/image23.png',
  '/images/image27.jpeg',
  '/images/image32.png',
  '/images/image30.png',
  '/images/image24.png',
  '/images/image31.png'
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="glow-blob glow-1"></div>
      <div className="glow-blob glow-2"></div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/images/logo-2.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
            G<span>&</span>B
          </div>
          
          {/* Desktop Links */}
          <div className="nav-links desktop-links">
            <a href="#mision">Misión & Visión</a>
            <a href="#valores">Valores</a>
            <a href="#equipo">Equipo</a>
          </div>

          {/* Hamburger Menu Toggle */}
          <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-links">
            <a href="#mision" onClick={() => setIsMenuOpen(false)}>Misión & Visión</a>
            <a href="#valores" onClick={() => setIsMenuOpen(false)}>Valores</a>
            <a href="#equipo" onClick={() => setIsMenuOpen(false)}>Equipo</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container hero-content">
          <h1 className="hero-title animate-fade-in-up">
            Firma Legal<br /><span>Corporativo Gutiérrez & Bernal</span>
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-1">
            Una firma líder enfocada en brindar representación legal integral y de alta calidad mediante innovación y LegalTech, democratizando el acceso a la justicia en México.
          </p>
          <div className="hero-actions animate-fade-in-up delay-2">
            <a href="https://wa.me/525512920315?text=%C2%A1Hola!,%20Me%20interesa%20m%C3%A1s%20informaci%C3%B3n..." target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ textDecoration: 'none' }}>
              Contactar Asesoría <ChevronRight size={18} />
            </a>
            <a href="#equipo" className="btn btn-outline" style={{ textDecoration: 'none' }}>Conoce el equipo</a>
          </div>
        </div>
      </header>

      {/* Misión y Visión */}
      <section id="mision" className="section container">
        <div className="mission-vision">
          <div className="glass-card mv-card">
            <h3>Nuestra Misión</h3>
            <p>
              Brindar representación legal integral y de alta calidad en diversas disciplinas del derecho, actuando como defensores comprometidos de nuestros clientes. Utilizamos tecnología innovadora, como la inteligencia artificial, para optimizar nuestros servicios y facilitar el acceso a la justicia. Creemos que el acceso a la justicia es un derecho humano fundamental, y trabajamos para democratizarlo.
            </p>
          </div>
          <div className="glass-card mv-card">
            <h3>Nuestra Visión</h3>
            <p>
              Ser una firma legal líder, reconocida no solo por nuestra excelencia en representación y asesoramiento jurídico, sino también por nuestra capacidad de innovar en el acceso a la justicia. A través de nuestra alianza con LegalX y el uso de herramientas LegalTech, buscamos transformar la práctica legal, manteniendo un compromiso firme con la ética y la responsabilidad social.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="section container">
        <div className="text-center">
          <h2>Nuestros Valores</h2>
          <p className="text-muted" style={{ marginTop: '1rem', maxWidth: '600px', margin: '1rem auto' }}>
            Los principios que guían nuestra excelencia jurídica y nuestro compromiso social.
          </p>
        </div>
        
        <div className="values-grid">
          {values.map((val, idx) => (
            <div className="glass-card value-card" key={idx}>
              <div className="value-icon">
                <val.icon size={24} />
              </div>
              <h4>{val.title}</h4>
              <p>{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipo */}
      <section id="equipo" className="section container">
        <div className="text-center">
          <h2>Nuestro Equipo de Profesionales</h2>
          <p className="text-muted" style={{ marginTop: '1rem' }}>
            Un bastión de excelencia jurídica desde 2015
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={idx} onClick={() => setSelectedMember(member)} style={{ cursor: 'pointer' }}>
              <div className="team-image" style={{ backgroundImage: `url(${member.image})`, backgroundPosition: 'top center' }}></div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="section container">
        <div className="text-center">
          <h2>Algunos de nuestros apreciables clientes y aliados</h2>
          <p className="text-muted" style={{ marginTop: '1rem' }}>
            Agradecemos la confianza depositada en nosotros
          </p>
        </div>

        <div className="clients-grid">
          {clientImages.map((src, idx) => (
            <div className="client-logo-wrapper" key={idx}>
              <img src={src} alt={`Cliente o aliado ${idx + 1}`} className="client-logo" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container footer-content">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="logo" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <img src="/images/logo-2.png" alt="Logo" style={{ height: '40px', marginRight: '10px' }} />
                G<span>&</span>B
              </div>
              <h3 className="footer-ready-text">Estamos listos para trabajar contigo.</h3>
            </div>
            
            <div className="footer-section">
              <h4>Contacto</h4>
              <p><strong>Teléfonos:</strong> 55 96674973</p>
              <p><strong>Correo Electrónico:</strong> <br/>
                <a href="mailto:CorporativoGutierrezbernal@hotmail.com">CorporativoGutierrezbernal@hotmail.com</a><br/>
                <a href="mailto:Jmb@gutierrezbernal.com">Jmb@gutierrezbernal.com</a>
              </p>
              <a href="https://wa.me/525512920315?text=%C2%A1Hola!,%20Me%20interesa%20m%C3%A1s%20informaci%C3%B3n..." target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-2">
                ¡Contáctanos!
              </a>
            </div>

            <div className="footer-section">
              <h4>Oficina Principal</h4>
              <p>
                INSURGENTES SUR No. 682, OFICINA 104,<br/>
                COLONIA DEL VALLE CENTRO, ALCALDÍA BENITO JUAREZ,<br/>
                C.P. 03100, CIUDAD DE MÉXICO.
              </p>
            </div>

            <div className="footer-section">
              <h4>Oficinas Adicionales</h4>
              <ul>
                <li>Ciudad de México</li>
                <li>Cancún, Quintana Roo</li>
                <li>Monterrey, Nuevo León</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Corporativo Gutiérrez & Bernal. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Team Member Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>
              <X size={24} />
            </button>
            <div className="modal-image" style={{ backgroundImage: `url(${selectedMember.image})` }}></div>
            <div className="modal-info">
              <h3>{selectedMember.name}</h3>
              <h4>{selectedMember.role}</h4>
              <div className="modal-description">
                {selectedMember.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
