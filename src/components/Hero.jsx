import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../assets/bgd.jpg';
import boton from '../assets/boton.png';
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
    <div className='flex lg:justify-between lg:flex-row flex-col items-center lg:mr-20 lg:ml-20 h-[80px] lg:h-[100px] max-w-[full] mx-auto mb-[170px] lg:pt-[100px] lg:pb-[40px] px-4 text-white'>
      <img className='w-[150px] my-4 ml-[10px]' src={logo} alt='/' />
      <button className='bg-[#244596] lg:mr-[40px] text-white rounded-lg font-medium w-[200px] my-6 px-6 py-3' type="button" onClick={handleDownload}>
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
      <div className='w-full lg:mt-[-250px] md:mt-[-250px] mt-[-200px] flex flex-col lg:flex-row h-screen justify-center items-center lg:px-[100px] px-[20px]'>
        <div className='w-full md:pt-[350px] mt-[10px] lg:pt-[90px] mx-auto flex flex-col justify-center lg:items-start items-center'>
          <p className='text-[#e80083] text-[3vh] font-bold p-2'>
            <span className="text-[#ffffff]">SOMOS</span> BEREL-K
          </p>
          <h1 className='lg:text-7xl text-[6vh] font-bold py-7 lg:py-3 leading-[1] md:text-center lg:text-left'>
            VENTA MAYORISTA <br />DE CALZADOS
          </h1>
          <p className='lg:text-2xl text-[2vh] font-semiBold text-white mb-4'>Somos fabricantes de pantuflas y ojotas.<br />Realizamos envíos a todo el país.</p>
        </div>
        <div className='flex flex-col items-center lg:mt-[150px] md:mt-[60px]'>
          {/* <img className='md:w-[60vh] md:pt-[120px] w-[40vh] pb-[20px]' src={box} alt='/' /> */}
          <div className='flex md:flex-row flex-col mb-[50px] justify-between items-center'>
            <div className='flex flex-col'>
              <h1 className='leading-none font-bold font-poppins lg:text-[6vh] text-[6vh]'>Envianos un<br /> WhatsApp</h1>
              <p className='font-seminormal leading-none font-poppins lg:text-[3vh] text-[2vh] mt-4'>Nos encantaría asesorarte y<br /> responder todas tus inquietudes</p>
            </div>
            <img className='lg:w-[9vh] lg:h-[9vh] md:ml-[30px] w-[12vh]' src={boton} alt='/' />
          </div>
          <button className="flex items-center md:mb-[1px] lg:mb-[0px] mb-[-250px] justify-center bg-[#25d366] h-[60px] md:h-[80px] md:w-[500px] w-[300px] text-[20px] md:text-[25px] rounded-md font-medium mb-4" type="button"  onClick={handleRedirect}>
            <FontAwesomeIcon icon={faWhatsapp} className="mr-5 text-[40px] lg:text-[60px]" />
            Enviar Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
