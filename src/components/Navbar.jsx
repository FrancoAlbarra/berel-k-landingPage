import React, { useState } from 'react';
import logo from '../assets/logo.png';
import descargar from '../assets/descargar.png';
import pdfFile from '../assets/CATALOGO_INVIERNO_2023.pdf';

const Navbar = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'CATALOGO_INVIERNO_2023.pdf';
    link.click();
  };
  const [nav, setNav] = useState(false);
  
  return (
    <div className='flex md:justify-between md:flex-row flex-col items-center md:mr-20 md:ml-20 h-24 max-w-[full] mx-auto md:pt-[100px] px-4 text-white'>
      <img className='w-[150px] my-4 ml-[10px]' src={logo} alt='/' />
      <button className='flex flex-row' onClick={handleDownload}>
        <button className='p-4 text-font font-bold text-[20px]'>Descargá nuestro catálogo</button>
        <img className='w-[35px] my-4' src={descargar} alt='/' />
      </button>
    </div>
  );
};

export default Navbar;
