import React from 'react';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Poweredby from './components/Poweredby';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import AlertTop from './components/TopAlert';
import Productos from './components/Productos';

function App() {
  return (
    <div>
      {/* <AlertTop /> */}
      <Navbar />
      <Hero />
      <Productos />
      <Analytics />
      <Newsletter />
      <Footer />
      <Poweredby />
    </div>
  );
}

export default App;
