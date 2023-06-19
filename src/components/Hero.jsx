import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../assets/bgd.jpg';
import box from '../assets/BOX.png';  // Ruta del asset de la imagen de fondo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const handleRedirect = () => {
  window.open('https://api.whatsapp.com/send?phone=5491148653833&text=Hola%21+Quisiera+solicitar+informaci%C3%B3n+sobre+sus+productos', '_blank');
};

const Hero = () => {
  return (
    <div className='text-white bg-cover bg-no-repeat bg-center' style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      <div className='w-full mt-[-100px] flex flex-col md:flex-row h-screen justify-center items-center md:px-[100px] px-[20px]  '>
        <div className='w-full pt-[300px] md:pt-[100px] mx-auto text-start flex flex-col justify-center items-start'>
          <p className='text-[#e80083] sm:text-3xl font-bold p-2'>
            <span className="text-[#ffffff]">SOMOS</span> BEREL-K
          </p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-3'>
            VENTA MAYORISTA <br />DE CALZADOS
          </h1>
          <p className='md:text-2xl text-xl font-semiBold text-white mb-4'>Somos fabricantes de pantuflas y ojotas. Realizamos envíos a todo el país.</p>
          
        </div>
        <div className='flex flex-col items-center'>
        <img className='md:w-[500px] md:pt-[100px] w-[350px] pb-[20px]' src={box} alt='/' />
        <button className="flex items-center justify-center bg-[#25d366]  h-[60px] md:h-[80px] md:w-[500px] w-[300px] text-[20px] md:text-[25px] rounded-md font-medium mb-4" onClick={handleRedirect}>
              <FontAwesomeIcon icon={faWhatsapp} className="mr-5 text-[40px] md:text-[60px]" />
              Enviar Whatsapp
            </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
