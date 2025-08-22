import React from 'react';

const About = () => {
  const goToNext = () => {
    const preferred = ['experience', 'skills', 'contact'];
    for (const id of preferred) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const idx = sections.findIndex(s => s.id === 'about');
    if (idx > -1 && sections[idx + 1]) {
      sections[idx + 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="about-container">
      <div className="about-hero">
        <div className="about-hero__inner">
          <h1 className="about-title">Faisons connaissance :)</h1>
          <div className="about-underline" aria-hidden="true" />

          <div className="about-lead">
            <p>
              Après cinq années d’expérience dans le domaine de la <strong>Sécurité Incendie</strong>, j’ai choisi de me reconvertir vers un secteur qui me passionne : le <strong>développement web</strong> et l’<strong>intégration technique</strong>.
              En 2023-2024, j’ai suivi une formation en <strong>Développement Web</strong> puis en <strong>Conception et Développement d’Applications</strong>, ce qui m’a permis d’acquérir une solide base technique.
            </p>

            <p>
              Aujourd’hui, je suis en charge de la <strong>mise en place</strong>, du <strong>suivi</strong> et de la <strong>maintenance</strong> des solutions de tracking.
            </p>

            {/* Blocs à puces */}
            <div className="about-bullets">
              <h3 className="about-subtitle">Implémentation & intégration technique</h3>
              <ul className="about-list">
                <li>
                  Mise en place de solutions de tracking côté <strong>client</strong> et <strong>serveur</strong> (Google Tag Manager, API, S2S, C2S).
                </li>
                <li>
                  Intégrations personnalisées sur <strong>Shopify</strong>, <strong>PrestaShop</strong>, <strong>WooCommerce</strong> et outils d’attribution
                  (<strong>AppsFlyer</strong>, <strong>Adjust</strong>).
                </li>
                <li>Gestion et optimisation des <strong>flux produits</strong>.</li>
              </ul>

              <h3 className="about-subtitle">Maintenance & sécurité</h3>
              <ul className="about-list">
                <li>Suivi et optimisation des tags/scripts (<strong>JavaScript</strong> / <strong>PHP</strong>).</li>
                <li>Gestion des problématiques liées à la <strong>sécurité des données</strong> et au respect des politiques internes.</li>
              </ul>

              <h3 className="about-subtitle">Support & formation</h3>
              <ul className="about-list">
                <li>Intervention auprès de l’équipe <strong>Customer Success</strong> pour résoudre des problèmes techniques de tracking.</li>
                <li><strong>Formation interne</strong> des nouveaux collaborateurs (bases du tracking, flux produits).</li>
              </ul>

              <h3 className="about-subtitle">Analyse & optimisation</h3>
              <ul className="about-list">
                <li>Analyse des données de tracking (<strong>QS score</strong>, <strong>match types</strong>).</li>
                <li>Contribution à l’amélioration continue des solutions dans un contexte <strong>affiliation</strong>, <strong>influence</strong> et <strong>marketing digital</strong>.</li>
              </ul>
            </div>
          </div>

          <button type="button" className="about-cta" onClick={goToNext}>
            Continuer
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;

