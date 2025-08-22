import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

const SECTIONS = [
  { id: 'header', label: 'Accueil' },
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'skills', label: 'Compétences' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [activeId, setActiveId] = useState('header');

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const targets = SECTIONS.map(s => document.getElementById(s.id)).filter(Boolean);
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );

    targets.forEach(t => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <section id="header" className="about-container">
      <div className="header-hero">

        <div className="header-logo" aria-label="Logo">
          <img src={logo} alt="Logo" loading="eager" />
        </div>

        <div className="header-content">

          <h1 className="header-hello" aria-label="HELLO">
            <span className="hello-line">
              <span className="hello-chunk">HE</span>
            </span>
            <span className="hello-line">
              <span className="hello-chunk">LLO</span>
              <span className="hello-dot" aria-hidden="true" />
            </span>
          </h1>

          <h2 className="header-name">Amandine Leporace</h2>
          <h3 className="header-title">Tracking &amp; Tag Management Specialist</h3>
        </div>


        <nav className="dotnav" aria-label="Sections">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              className={`dotnav__dot ${activeId === id ? 'is-active' : ''}`}
              aria-label={label}
              title={label}
              onClick={() => scrollToSection(id)}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Header;


