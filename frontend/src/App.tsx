import React, { RefObject } from 'react';
import { I18nextProvider } from 'react-i18next';
import { i18nInstance } from './i18n';

import Navigation from './components/Navigation/Navigation';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Skills from './components/Skills/Skills';

function App() {
  const homeRef: RefObject<HTMLDivElement> = React.createRef();
  const aboutMeRef: RefObject<HTMLDivElement> = React.createRef();
  const skillsRef: RefObject<HTMLDivElement> = React.createRef();
  const portfolioRef: RefObject<HTMLDivElement> = React.createRef();
  const contactRef: RefObject<HTMLDivElement> = React.createRef();

  const scrollToRef = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <I18nextProvider i18n={i18nInstance}>
      <Navigation
        scrollToRef={scrollToRef}
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        skillsRef={skillsRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={portfolioRef}>
        <Portfolio />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </I18nextProvider>
  );
}

export default App;
