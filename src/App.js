import React, { useState, useEffect } from 'react';
import './App.css';

//test comment
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const heroStyles = {
    backgroundImage: `linear-gradient(rgba(17, 17, 17, 0.7), rgba(17, 17, 17, 0.7)), url('/api/placeholder/1920/1080')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const popularServices = [
    { name: "Strzyżenie krótkich włosów, boki maszynką", price: "90,00 zł", time: "45 min" },
    { name: "Combo (Strzyżenie + broda)", price: "130,00 zł", time: "1g 15min" },
    { name: "Same boki / Just FADE", price: "60,00 zł", time: "30 min" }
  ];

  const allServices = [
    { name: "Broda / Beard", price: "70,00 zł", time: "30 min" },
    { name: "Combo (Strzyżenie + broda)", price: "130,00 zł", time: "1g 15min" },
    { name: "Strzyżenie krótkich włosów, boki maszynką", price: "90,00 zł", time: "45 min" },
    { name: "Strzyżenie długich włosów, całość nożyczkami", price: "100,00 zł", time: "1g" },
    { name: "Combo strzyżenie długich włosów + broda", price: "140,00 zł", time: "1g 30min" },
    { name: "Strzyżenie Syna (od 4 do 12 lat)", price: "70,00 zł", time: "30 min" },
    { name: "Buzz cut", price: "70,00 zł", time: "30 min" },
    { name: "Same boki / Just FADE", price: "60,00 zł", time: "30 min" },
    { name: "Tata + Syn (do 12 lat) strzyżenie", price: "130,00 zł", time: "1g 15min" },
    { name: "Tata + Syn (do 12 lat) combo", price: "170,00 zł", time: "1g 30min" },
    { name: "Tata + Syn (do 12 lat) broda", price: "110,00 zł", time: "1g" },
    { name: "Odświeżanie (włosy + broda)", price: "120,00 zł", time: "45 min" },
    { name: "Odświeżanie (włosy)", price: "70,00 zł", time: "30 min" },
    { name: "Odświeżanie (broda)", price: "70,00 zł", time: "30 min" },
    { name: "Golenie głowy brzytwą", price: "90,00 zł", time: "45 min" },
    { name: "Mycie głowy z modelowaniem", price: "40,00 zł", time: "15 min" },
    { name: "Wosk / Wax", price: "20,00 zł", time: "15 min" },
    { name: "Strzyżenie maszynką na jedną długość", price: "40,00 zł", time: "15 min" },
    { name: "Maska oczyszczająca", price: "40,00 zł", time: "30 min" },
    { name: "Wąs / Mustache", price: "40,00 zł", time: "10 min" },
    { name: "SPA dla twarzy (pod parą)", price: "80,00 zł", time: "30 min" },
    { name: "Konsultacja do systemu włosów", price: "1,00 zł", time: "20 min" },
    { name: "Serwis systemu włosów", price: "270,00 zł", time: "2g 30min" }
  ];

  const workingHours = [
    { day: "Poniedziałek", hours: "10:00–20:00" },
    { day: "Wtorek", hours: "10:00–20:00" },
    { day: "Środa", hours: "10:00–20:00" },
    { day: "Czwartek", hours: "10:00–20:00" },
    { day: "Piątek", hours: "10:00–20:00" },
    { day: "Sobota", hours: "10:00–15:00" },
    { day: "Niedziela", hours: "Zamknięte" }
  ];

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/logo.png" alt="Octagon Barber Shop" />
            <span>Octagon Barber Shop</span>
          </div>
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('home');}}>Strona główna</a>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('about');}}>O nas</a>
            <a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('services');}}>Usługi</a>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}>Kontakt</a>
          </div>
          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <section id="home" className="hero" style={heroStyles}>
        <div className="hero-content">
          <h1>Octagon Barber Shop</h1>
          <p>Profesjonalne usługi fryzjerskie dla mężczyzn w samym sercu Katowic</p>
          <div className="hero-buttons">
            <a href="https://booksy.com/pl-pl/109663_octagon-barber-shop_barber-shop_11597_katowice" target="_blank" rel="noopener noreferrer" className="btn-primary">Umów wizytę</a>
            <button onClick={() => scrollToSection('services')} className="btn-secondary">Nasze usługi</button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <div className="section-header">
            <h2>O nas</h2>
            <p>Profesjonalna obsługa na najwyższym poziomie</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Witaj w Octagon Barber Shop</h3>
              <p>Jesteśmy nowoczesnym barbershopem, który łączy tradycyjne techniki fryzjerskie z najnowszymi trendami. Nasze doświadczenie i pasja do rzemiosła gwarantują, że każdy klient opuści nasz salon w pełni zadowolony.</p>
              <p>Oferujemy pełen zakres usług dla mężczyzn - od klasycznych strzyżeń po nowoczesne stylizacje, pielęgnację brody i specjalne zabiegi SPA dla twarzy.</p>
              <div className="features">
                <div className="feature">
                  <h4>Doświadczenie</h4>
                  <p>Profesjonalni barberzy z wieloletnim doświadczeniem</p>
                </div>
                <div className="feature">
                  <h4>Jakość</h4>
                  <p>Używamy tylko najwyższej jakości produkty i narzędzia</p>
                </div>
                <div className="feature">
                  <h4>Indywidualne podejście</h4>
                  <p>Każdy klient otrzymuje spersonalizowaną usługę</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Nasze usługi</h2>
            <p>Kompleksowa oferta usług dla mężczyzn</p>
          </div>
          
          <div className="services-popular">
            <h3>Popularne usługi</h3>
            <div className="services-grid">
              {popularServices.map((service, index) => (
                <div key={index} className="service-card featured">
                  <h4>{service.name}</h4>
                  <div className="service-details">
                    <span className="price">{service.price}</span>
                    <span className="time">{service.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="services-all">
            <h3>Wszystkie usługi</h3>
            <div className="services-list">
              {allServices.map((service, index) => (
                <div key={index} className="service-item">
                  <div className="service-name">{service.name}</div>
                  <div className="service-line"></div>
                  <div className="service-info">
                    <span className="price">{service.price}</span>
                    <span className="time">{service.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="booking-section">
            <h3>Gotowy na nową fryzurę?</h3>
            <p>Umów się na wizytę już dziś!</p>
            <a href="https://booksy.com/pl-pl/109663_octagon-barber-shop_barber-shop_11597_katowice" target="_blank" rel="noopener noreferrer" className="btn-primary">Rezerwuj przez Booksy</a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Kontakt</h2>
            <p>Znajdź nas i umów wizytę</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-item">
                <h4>📍 Adres</h4>
                <p>ul. Opolska 22<br />40-084 Katowice</p>
              </div>
              <div className="info-item">
                <h4>📞 Telefon</h4>
                <p><a href="tel:884644966">884 644 966</a></p>
              </div>
              <div className="info-item">
                <h4>🕒 Godziny otwarcia</h4>
                <div className="hours">
                  {workingHours.map((item, index) => (
                    <div key={index} className="hour-item">
                      <span className="day">{item.day}:</span>
                      <span className={`hours ${item.hours === 'Zamknięte' ? 'closed' : ''}`}>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="contact-actions">
              <h4>Umów się na wizytę</h4>
              <div className="contact-buttons">
                <a href="https://booksy.com/pl-pl/109663_octagon-barber-shop_barber-shop_11597_katowice" target="_blank" rel="noopener noreferrer" className="btn-primary">Booksy</a>
                <a href="tel:884644966" className="btn-secondary">Zadzwoń</a>
              </div>
              <div className="social-links">
                <h4>Śledź nas</h4>
                <div className="social-buttons">
                  <a href="https://www.facebook.com/octagonbarber/" target="_blank" rel="noopener noreferrer" className="social-btn facebook">Facebook</a>
                  <a href="https://www.instagram.com/octagon_barber_shop/" target="_blank" rel="noopener noreferrer" className="social-btn instagram">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h4>Octagon Barber Shop</h4>
              <p>ul. Opolska 22, 40-084 Katowice</p>
              <p>Tel: <a href="tel:884644966">884 644 966</a></p>
            </div>
            <div className="footer-links">
              <h4>Szybkie linki</h4>
              <a href="#home" onClick={(e) => {e.preventDefault(); scrollToSection('home');}}>Strona główna</a>
              <a href="#about" onClick={(e) => {e.preventDefault(); scrollToSection('about');}}>O nas</a>
              <a href="#services" onClick={(e) => {e.preventDefault(); scrollToSection('services');}}>Usługi</a>
              <a href="#contact" onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}>Kontakt</a>
            </div>
            <div className="footer-social">
              <h4>Social Media</h4>
              <a href="https://www.facebook.com/octagonbarber/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/octagon_barber_shop/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://booksy.com/pl-pl/109663_octagon-barber-shop_barber-shop_11597_katowice" target="_blank" rel="noopener noreferrer">Booksy</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Octagon Barber Shop. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;