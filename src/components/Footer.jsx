import React from 'react';
import location from '../assets/location.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ReactGA from 'react-ga';
const Footer = () => {
  const handleRedirect = () => {
    ReactGA.event({
      category: 'Boton_WhatsApp_Inferior',
      action: 'Click',
      label: 'Boton_WhatsApp_Inferior',
    });
    window.open('https://api.whatsapp.com/send?phone=5491148653833&text=Hola%21+Quisiera+solicitar+informaci%C3%B3n+sobre+sus+productos', '_blank');
  };
  return (
    <div className='max-w-[1240px] mx-auto py-10 px-4 flex flex-col md:flex-row md:gap-40 gap-10 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#ffffff]'>BEREL-K.</h1>
        <p className='py-4'>Somos una empresa familiar de hace más de 50 años que estamos en constante evolución y desarrollo de nuevos productos. Estamos permanentemente en búsqueda de innovar en todos los aspectos de la producción y diseño.</p>
        <p className='py-1 mb-5'>Nuestro horario de atención es <strong>lunes</strong> a <strong>viernes</strong> de 8.45 a 18.15 <strong>y sábados</strong> de 9.45 a 14.15hs. ¡Venite a conocernos cuando quieras!</p>
        <div className='flex flex-row items-center'>
          <img className='h-12 md:w-17 md:h-12 w-[50px] mr-5' src={location} alt='/' />
          <p className='py-4'>Sarmiento 2885, C1196 AAA, Buenos Aires</p>
        </div>
        <button className='flex flex-row pt-5 items-center' onClick={handleRedirect}>
          <FontAwesomeIcon icon={faWhatsapp} className="mr-5 ml-1 text-[50px] " />
          <p className='py-4'>+54 9 11 4865-3833</p>
        </button>
        
      </div>
      <iframe className='pr-[100px] md:pl-[-50px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.90646054365!2d-58.4095343234434!3d-34.60652675764802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb582b791c997%3A0x181082b67967cef!2sBerel-K!5e0!3m2!1ses-419!2sar!4v1686783910028!5m2!1ses-419!2sar" width="450" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Footer;
