import React from 'react';
import GTMImg from '../assets/GTM.jpg';
import AnalyticsImg from '../assets/analytics.jpeg';
import DevImg from '../assets/dev.jpg';
import FormationImg from '../assets/formation.webp';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-inner">
        <h1>Mes Compétences</h1>
        <div className="skills-underline" aria-hidden="true" />

        <div className="skills-grid">
          <div className="skill-card variant--filled">
            <div className="skill-frame">
              <img src={GTMImg} alt="Google Tag Manager" />
            </div>
            <h2 className="skill-title">Tag Management</h2>
            <div className="skill-chips">
              <span className="chip">GTM</span>
              <span className="chip">Server-to-server</span>
              <span className="chip">Server-to-client</span>
              <span className="chip">Commanders Act</span>
              <span className="chip">Intégration personnalisée</span>
              <span className="chip">S2S</span>
              <span className="chip">AppsFlyer</span>
              <span className="chip">Adjust</span>
              <span className="chip">Branch</span>
              <span className="chip">Shopify</span>
              <span className="chip">Prestashop</span>
              <span className="chip">WooCommerce</span>
              <span className="chip">Flux de produits</span>
            </div>
          </div>

          <div className="skill-card variant--outline">
            <div className="skill-frame">
              <img src={AnalyticsImg} alt="Analytics Platforms" />
            </div>
            <h2 className="skill-title">Analytics</h2>
            <div className="skill-chips">
              <span className="chip">GA4</span>
              <span className="chip">Adobe Analytics</span>
              <span className="chip">Eulerian</span>
              <span className="chip">Piano</span>
              <span className="chip">QS score</span>
              <span className="chip">Match Types</span>
            </div>
          </div>

          <div className="skill-card variant--filled">
            <div className="skill-frame">
              <img src={DevImg} alt="Technologies Web" />
            </div>
            <h2 className="skill-title">Technologies Web</h2>
            <div className="skill-chips">
              <span className="chip">JavaScript</span>
              <span className="chip">HTML/CSS</span>
              <span className="chip">API</span>
              <span className="chip">DataLayer</span>
              <span className="chip">PHP</span>
              <span className="chip">React</span>
            </div>
          </div>


          <div className="skill-card variant--outline">
            <div className="skill-frame">
              <img src={FormationImg} alt="Méthodologies et Formations" />
            </div>
            <h2 className="skill-title">Learnix</h2>
            <div className="skill-chips">
              <span className="chip">Audit</span>
              <span className="chip">Politique de sécurité</span>
              <span className="chip">RGPD</span>
              <span className="chip">Formations internes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


