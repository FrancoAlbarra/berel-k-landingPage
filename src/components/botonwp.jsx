import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const CirculoWhatsApp = () => {
    const handleRedirect = () => {
        window.open('https://api.whatsapp.com/send?phone=5491148653833&text=Hola%21+Quisiera+solicitar+informaci%C3%B3n+sobre+sus+productos', '_blank');
      };
    return (
        <button
          className="fixed bottom-5 right-5 z-10 flex items-center justify-center bg-[#25d366] hover:bg-white-200 text-white p-4 rounded-full shadow"
        onClick={handleRedirect}
        >
         <FontAwesomeIcon icon={faWhatsapp} className="text-[35px] md:text-[50px]" />

        </button>
      );
    };

export default CirculoWhatsApp;
