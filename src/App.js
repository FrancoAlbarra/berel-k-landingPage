import React from 'react';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Poweredby from './components/Poweredby';
import Hero from './components/Hero';

import Newsletter from './components/Newsletter';
import AlertTop from './components/TopAlert';
import Productos from './components/Productos';

function App() {
  return (
    <div>
      {/* <AlertTop /> */}
      
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
