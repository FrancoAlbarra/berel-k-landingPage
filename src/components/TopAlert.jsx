import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../assets/bg.jpg';
import box from '../assets/BOX.png';  // Ruta del asset de la imagen de fondo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const handleRedirect = () => {
  window.open('https://api.whatsapp.com/send?phone=5491148653833&text=Hola%21+Quisiera+solicitar+informaci%C3%B3n+sobre+sus+productos', '_blank');
};

const AlertTop = () => {
  return (
    <div className='sm:marquee text-white w-full text-[13px] md:text-[20px] bg-black py-3 md:pl-[50px] pl-[10px]'>
      <p> No podes perderte nuestra oferta del dia del Padre 10% OFF en productos Seleccionados!🔥 - Descargá el Catalogo y mandanos un mensaje via WhatsApp o Instagram 🛒</p>
       
    </div>
  );
};

export default AlertTop;
