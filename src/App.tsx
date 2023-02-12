import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Particle from './components/Particle/Particle';

export const App = () => (
  <>
    <Particle />
    <Header />
    <Main />
    <Skills />
    <Projects />
    <WorkExperience />
    <Contacts />
    <Footer />
  </>
);
