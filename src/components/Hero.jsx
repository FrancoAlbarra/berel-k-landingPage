import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../assets/bgd.jpg';
import box from '../assets/BOX.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import descargar from '../assets/descargar.png';
import pdfFile from '../assets/CATALOGO_INVIERNO_2023.pdf';

const handleRedirect = () => {
  window.open('https://api.whatsapp.com/send?phone=5491148653833&text=Hola%21+Quisiera+solicitar+informaci%C3%B3n+sobre+sus+productos', '_blank');
};

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'CATALOGO_INVIERNO_2023.pdf';
  link.click();
};

const Navbar = () => {
  return (
    <div className='flex md:justify-between md:flex-row flex-col items-center md:mr-20 md:ml-20 h-[80px] md:h-[100px] max-w-[full] mx-auto mb-[170px] md:pt-[100px] md:pb-[40px] px-4 text-white'>
      <img className='w-[150px] my-4 ml-[10px]' src={logo} alt='/' />
      <button className='bg-[#244596] mr-[40px] text-white rounded-md font-medium w-[200px] my-6 px-6 py-3' type="button" onClick={handleDownload}>
              Descargar Catálogo 
            </button>
    </div>
  );
};

const Hero = () => {
  return (
    <div className='text-white bg-cover bg-no-repeat bg-center' style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      <Navbar />
      <div className='w-full md:mt-[-250px] flex flex-col md:flex-row h-screen justify-center items-center md:px-[100px] px-[20px]'>
        <div className='w-full pt-[200px] md:pt-[90px] mx-auto text-start flex flex-col justify-center items-start'>
          <p className='text-[#e80083] text-[2vh] font-bold p-2'>
            <span className="text-[#ffffff]">SOMOS</span> BEREL-K
          </p>
          <h1 className='md:text-7xl text-[8vh] font-bold md:py-3 leading-[1]'>
            VENTA MAYORISTA <br />DE CALZADOS
          </h1>
          <p className='md:text-2xl text-[2vh] font-semiBold text-white mb-4'>Somos fabricantes de pantuflas y ojotas. Realizamos envíos a todo el país.</p>
        </div>
        <div className='flex flex-col items-center'>
          <img className='md:w-[60vh] md:pt-[120px] w-[35vh] pb-[20px]' src={box} alt='/' />
          <button className="flex items-center justify-center bg-[#25d366] h-[60px] md:h-[80px] md:w-[500px] w-[300px] text-[20px] md:text-[25px] rounded-md font-medium mb-4" type="button"  onClick={handleRedirect}>
            <FontAwesomeIcon icon={faWhatsapp} className="mr-5 text-[40px] md:text-[60px]" />
            Enviar Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
