import React from 'react';
import cvPdf from '../assets/CV.pdf';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <header className="contact-header">
          <h1 className="contact-title">Connectons-nous</h1>
          <div className="contact-underline" aria-hidden="true" />
        </header>

        <div className="contact-board">
          <div className="contact-col contact-col--cv">
            <div className="accent-block">
              <a
                href={cvPdf}
                target="_blank"
                rel="noreferrer"
                className="cv-link"
                aria-label="Ouvrir mon CV (nouvelle fenêtre)"
              >
                <h2 className="accent-title">CV</h2>
              </a>
              <p className="accent-text">
                Mes antécédents professionnels et ce que j'ai accompli dans un CV rapide et facile à consulter.
                Cliquez sur "CV" pour l'ouvrir dans une nouvelle fenêtre.
              </p>

              <p>Mon profil Linkedin est accessible via le bouton ci-dessous.
              </p>

              <div className="cv-actions">
                <a
                  className="btn btn--linkedin"
                  href="https://www.linkedin.com/in/amandine-leporace-aa023222a/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Voir mon profil LinkedIn (nouvelle fenêtre)"
                >
                  <svg
                    className="btn__icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.2 2.3-2.46 4.73-2.46 5.06 0 5.99 3.33 5.99 7.66V24h-5V16.4c0-1.8-.03-4.12-2.51-4.12-2.51 0-2.9 1.96-2.9 3.99V24h-5V8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-col contact-col--info">
            <div className="info-block">
              <h3 className="info-title">Portfolio</h3>
              <p>Amandine Leporace - Copyright © 2025</p>
            </div>

            <div className="info-block">
              <h3 className="info-title">Localisation</h3>
              <p>📍 Bordeaux.</p>
            </div>

            <div className="info-block">
              <h3 className="info-title">N'hésitez pas à me contacter !</h3>
              <p className="contact-mail">leporace.amandine@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
