import React, { useEffect, useState } from 'react';
import {
  Shield,
  Scale,
  Lightbulb,
  Users,
  Lock,
  HeartHandshake,
  ChevronRight,
  X,
  Menu,
  Briefcase,
  Building2,
  Landmark,
  Gavel,
  Cpu,
  Send,
  CheckCircle2,
  Calendar,
  MapPin,
  Award,
  HelpCircle
} from 'lucide-react';
import './index.css';

const legalServices = [
  {
    icon: Shield,
    title: 'Derecho penal y defensa penal',
    desc: 'Representación y defensa técnica especializada en todas las etapas del proceso penal, garantizando el debido proceso y la protección de tus derechos.'
  },
  {
    icon: Scale,
    title: 'Amparo y derecho constitucional',
    desc: 'Juicios de amparo y medios de control constitucional para la protección efectiva de derechos fundamentales frente a actos de autoridad.'
  },
  {
    icon: Briefcase,
    title: 'Derecho mercantil',
    desc: 'Asesoría y litigio en operaciones comerciales, contratos mercantiles, títulos de crédito, cobranza y controversias entre comerciantes.'
  },
  {
    icon: Building2,
    title: 'Derecho corporativo y empresarial',
    desc: 'Constitución y gobierno corporativo, blindaje legal, contratos estratégicos y acompañamiento jurídico integral para empresas.'
  },
  {
    icon: Landmark,
    title: 'Asuntos bancarios y financieros',
    desc: 'Atención especializada en controversias bancarias, reestructuras financieras, regulación y defensa frente a instituciones de crédito.'
  },
  {
    icon: Gavel,
    title: 'Litigio contencioso',
    desc: 'Estrategia y representación firme en tribunales para la resolución de conflictos complejos con enfoque en resultados efectivos.'
  },
  {
    icon: Cpu,
    title: 'LegalTech y soluciones jurídicas con IA',
    desc: 'Innovación aplicada al derecho mediante inteligencia artificial y herramientas tecnológicas para optimizar procesos y democratizar la justicia.'
  }
];

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

const helpAreaOptions = [
  'Penal',
  'Amparo / Constitucional',
  'Mercantil',
  'Corporativo / Empresarial',
  'Bancario',
  'LegalTech',
  'Otro / No estoy seguro'
];

const beneficiaryOptions = [
  'Para mí',
  'Familiar',
  'Empresa',
  'Otra persona'
];

const specializationAreas = [
  'Derecho penal y contencioso',
  'Amparo',
  'Derecho mercantil',
  'Derecho corporativo y empresarial',
  'Asuntos bancarios',
  'LegalTech y herramientas jurídicas con IA'
];

const faqItems = [
  {
    question: '¿Cómo funciona una asesoría?',
    answer: 'El cliente llena el formulario o contacta al despacho, explica brevemente su situación y el equipo identifica el área jurídica correspondiente para darle seguimiento.'
  },
  {
    question: '¿Tiene costo?',
    answer: 'Los alcances y condiciones se determinan según la materia y las necesidades de cada caso. Al contactarnos, nuestro equipo te brindará toda la información correspondiente antes de iniciar.'
  },
  {
    question: '¿Atienden urgencias?',
    answer: 'Brindamos atención prioritaria para situaciones que requieren acción inmediata, especialmente en asuntos penales y de amparo. Indica si tu caso es urgente al enviarnos tu solicitud o comunícate directamente a nuestro teléfono.'
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    cityState: '',
    area: '',
    beneficiary: 'Para mí',
    description: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Solicitud de Asesoría Jurídica - ${formData.area || 'General'} (${formData.fullName})`;
    const lines = [
      'Solicitud de asesoría jurídica:',
      '',
      'Datos personales:',
      `- Nombre completo: ${formData.fullName}`,
      `- Teléfono / WhatsApp: ${formData.phone}`,
      `- Correo electrónico: ${formData.email}`,
      `- Ciudad y estado: ${formData.cityState}`,
      '',
      `¿En qué podemos ayudarte?: ${formData.area || 'No especificado'}`,
      `¿Para quién solicita la asesoría?: ${formData.beneficiary}`,
      '',
      'Situación:',
      formData.description.trim() || 'Sin descripción adicional.'
    ];
    const mailtoUrl = `mailto:ejemplo@ejemplo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\r\n'))}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper">
      <div className="glow-blob glow-1" aria-hidden="true"></div>
      <div className="glow-blob glow-2" aria-hidden="true"></div>

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <a href="#" className="logo">
            <img src="/images/logo-2.png" alt="Logo" className="logo-img" />
            G<span>&</span>B
          </a>
          
          {/* Desktop Links */}
          <div className="nav-links desktop-links">
            <a href="#mision">Misión & Visión</a>
            <a href="#experiencia">Experiencia</a>
            <a href="#servicios">Servicios Jurídicos</a>
            <a href="#equipo">Equipo</a>
            <a href="#faq">Preguntas Frecuentes</a>
            <a href="#asesoria" className="nav-cta">Contratar Asesoría</a>
          </div>

          {/* Hamburger Menu Toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-nav-overlay ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#mision" onClick={() => setIsMenuOpen(false)}>Misión & Visión</a>
          <a href="#experiencia" onClick={() => setIsMenuOpen(false)}>Experiencia</a>
          <a href="#servicios" onClick={() => setIsMenuOpen(false)}>Servicios Jurídicos</a>
          <a href="#valores" onClick={() => setIsMenuOpen(false)}>Valores</a>
          <a href="#equipo" onClick={() => setIsMenuOpen(false)}>Equipo</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)}>Preguntas Frecuentes</a>
          <a href="#asesoria" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>
            Contratar Asesoría
          </a>
        </div>
      </div>

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
            <a href="#asesoria" className="btn btn-primary">
              Contratar Asesoría <ChevronRight size={18} />
            </a>
            <a href="#servicios" className="btn btn-outline">
              Servicios Jurídicos
            </a>
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

      {/* Experiencia del Despacho */}
      <section id="experiencia" className="section container">
        <div className="section-header text-center">
          <h2>Experiencia del Despacho</h2>
          <p className="text-muted section-subtitle">
            Trayectoria, cobertura y especialización al servicio de quienes requieren respaldo jurídico de primer nivel.
          </p>
        </div>

        <div className="experience-grid">
          <div className="glass-card value-card">
            <div className="value-icon">
              <Calendar size={24} />
            </div>
            <h4>Desde 2015</h4>
            <p>
              Operamos de manera continua desde el año <strong>2015</strong>, consolidando una práctica jurídica sólida, ética y enfocada en resultados.
            </p>
          </div>

          <div className="glass-card value-card">
            <div className="value-icon">
              <MapPin size={24} />
            </div>
            <h4>Presencia</h4>
            <p>
              Contamos con presencia estratégica en <strong>Ciudad de México</strong> y en <strong>Cancún, Quintana Roo</strong> para brindar atención oportuna.
            </p>
          </div>

          <div className="glass-card value-card">
            <div className="value-icon">
              <Users size={24} />
            </div>
            <h4>Tipos de Clientes Atendidos</h4>
            <p>
              Atendemos a <strong>personas físicas, empresarios, empresas</strong> y clientes que requieren representación o asesoría jurídica especializada.
            </p>
          </div>

          <div className="glass-card value-card">
            <div className="value-icon">
              <Award size={24} />
            </div>
            <h4>Áreas de Especialización</h4>
            <div className="experience-tags">
              {specializationAreas.map((area, idx) => (
                <span key={idx} className="experience-tag">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Jurídicos */}
      <section id="servicios" className="section container">
        <div className="section-header text-center">
          <h2>Servicios Jurídicos</h2>
          <p className="text-muted section-subtitle">
            Especialidades respaldadas por las áreas y direcciones de nuestro despacho para brindarte defensa y asesoría integral.
          </p>
        </div>

        <div className="services-grid">
          {legalServices.map((srv, idx) => (
            <div className="glass-card service-card" key={idx}>
              <div className="value-icon">
                <srv.icon size={24} />
              </div>
              <h4>{srv.title}</h4>
              <p>{srv.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Valores */}
      <section id="valores" className="section container">
        <div className="section-header text-center">
          <h2>Nuestros Valores</h2>
          <p className="text-muted section-subtitle">
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
        <div className="section-header text-center">
          <h2>Nuestro Equipo de Profesionales</h2>
          <p className="text-muted section-subtitle">
            Un bastión de excelencia jurídica desde 2015
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, idx) => (
            <div className="team-card" key={idx} onClick={() => setSelectedMember(member)}>
              <div className="team-image" style={{ backgroundImage: `url(${member.image})`, backgroundPosition: 'top center' }}></div>
              <div className="team-info">
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contratar Asesoría - Formulario */}
      <section id="asesoria" className="section container">
        <div className="section-header text-center">
          <h2>Contratar Asesoría</h2>
          <p className="text-muted section-subtitle">
            Completa el siguiente formulario y un especialista de nuestra firma se pondrá en contacto contigo a la brevedad.
          </p>
        </div>

        <div className="form-wrapper glass-card">
          <form onSubmit={handleSubmit} className="advisory-form">
            <div className="form-block">
              <h3 className="form-section-title">Datos personales</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="fullName">Nombre completo <span className="required">*</span></label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Ej. Juan Pérez Hernández"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Teléfono / WhatsApp <span className="required">*</span></label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Ej. 55 1234 5678"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico <span className="required">*</span></label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cityState">Ciudad y estado <span className="required">*</span></label>
                  <input
                    id="cityState"
                    name="cityState"
                    type="text"
                    required
                    placeholder="Ej. Ciudad de México, CDMX"
                    value={formData.cityState}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-block">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="area">¿En qué podemos ayudarte? <span className="required">*</span></label>
                  <select
                    id="area"
                    name="area"
                    required
                    value={formData.area}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>Selecciona un área...</option>
                    {helpAreaOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>¿Para quién solicita la asesoría? <span className="required">*</span></label>
                  <div className="radio-pills">
                    {beneficiaryOptions.map((option) => (
                      <label
                        key={option}
                        className={`radio-pill ${formData.beneficiary === option ? 'active' : ''}`}
                      >
                        <input
                          type="radio"
                          name="beneficiary"
                          value={option}
                          checked={formData.beneficiary === option}
                          onChange={handleInputChange}
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="form-block">
              <div className="form-group">
                <label htmlFor="description">Describe brevemente tu situación</label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Cuéntanos brevemente qué ocurrió y qué necesitas resolver."
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
                <span className="form-hint">
                  Un resumen breve es suficiente; los detalles los revisaremos de forma confidencial durante tu asesoría.
                </span>
              </div>
            </div>

            <div className="form-submit-row">
              <button type="submit" className="btn btn-primary btn-submit">
                Solicitar Asesoría <Send size={18} />
              </button>
              {submitted && (
                <p className="form-success-msg">
                  <CheckCircle2 size={18} /> ¡Datos listos! Se ha abierto tu cliente de correo para enviar la solicitud a ejemplo@ejemplo.com.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section id="faq" className="section container">
        <div className="section-header text-center">
          <h2>Preguntas Frecuentes</h2>
          <p className="text-muted section-subtitle">
            Resolvemos las dudas más comunes sobre nuestro proceso de atención y asesoría jurídica.
          </p>
        </div>

        <div className="faq-grid">
          {faqItems.map((item, idx) => (
            <div className="glass-card faq-card" key={idx}>
              <div className="value-icon">
                <HelpCircle size={24} />
              </div>
              <h4>{item.question}</h4>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clientes */}
      <section id="clientes" className="section container">
        <div className="section-header text-center">
          <h2>Algunos de nuestros apreciables clientes y aliados</h2>
          <p className="text-muted section-subtitle">
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
            <div className="footer-section footer-brand">
              <div className="logo footer-logo">
                <img src="/images/logo-2.png" alt="Logo" className="logo-img" />
                G<span>&</span>B
              </div>
              <h3 className="footer-ready-text">Estamos listos para trabajar contigo.</h3>
            </div>
            
            <div className="footer-section">
              <h4>Contacto</h4>
              <p><strong>Teléfonos:</strong> 55 96674973</p>
              <p className="footer-emails"><strong>Correo Electrónico:</strong> <br/>
                <a href="mailto:CorporativoGutierrezbernal@hotmail.com">CorporativoGutierrezbernal@hotmail.com</a><br/>
                <a href="mailto:Jmb@gutierrezbernal.com">Jmb@gutierrezbernal.com</a>
              </p>
              <a href="#asesoria" className="btn btn-primary mt-2">
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
              <h4>Presencia</h4>
              <ul>
                <li>Ciudad de México</li>
                <li>Cancún, Quintana Roo</li>
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
    </div>
  );
}

export default App;
