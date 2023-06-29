import React, { useState, useEffect, useRef } from 'react';
import Analytics from './components/Analytics';
import Footer from './components/Footer';
import Poweredby from './components/Poweredby';
import Hero from './components/Hero';
import CirculoWhatsApp from './components/botonwp';
import Newsletter from './components/Newsletter';
import AlertTop from './components/TopAlert';
import Productos from './components/Productos';

function App() {
  const [showCirculoWhatsApp, setShowCirculoWhatsApp] = useState(false);
  const productosRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const productosElement = productosRef.current;
      const productosRect = productosElement.getBoundingClientRect();
      const shouldShowCirculoWhatsApp = productosRect.top <= window.innerHeight; // Verifica si Productos está en la pantalla

      setShowCirculoWhatsApp(shouldShowCirculoWhatsApp);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* <AlertTop /> */}
      <div id="hero">
        <Hero />
      </div>
      <div className={`circulo-whatsapp${showCirculoWhatsApp ? ' show' : ''}`}>
        {showCirculoWhatsApp && <CirculoWhatsApp />}
      </div>
    
      <div ref={productosRef}>
        <Productos />
      </div>
      <Analytics />
      <Newsletter />
      <Footer />
      <Poweredby />
    </div>
  );
}

export default App;
