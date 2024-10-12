import React from 'react';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Resume from './Components/Resume';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <AboutMe />
      <Resume />
      <Education />
      <Projects />
      <Contacts />
    </>
  )
}

export default App