import React from 'react';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;