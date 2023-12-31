import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='bg-slate-900'>
      <Header />
      <Banner />
      {/* <Nav /> */}
      <About />
      <Services />
      <Work />
      <Skills/>
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;
// className='bg-site bg-no-repeat bg-cover overflow-hidden'