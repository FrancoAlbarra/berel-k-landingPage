import React from 'react';
import Typed from 'react-typed';
import backgroundImage from '../assets/bgd.jpg';
import boton from '../assets/boton.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png';
import ReactGA from 'react-ga';
import descargar from '../assets/descargar.png';
import pdfFile2 from '../assets/CATALOGO_VERANO_2023.pdf';
import pdfFile from '../assets/CATALOGO_INVIERNO_2023.pdf';
import { faSnowflake , faUmbrellaBeach, faDownload } from '@fortawesome/free-solid-svg-icons';
import { initGoogleTagManager } from '../GoogleTagManager';

function handleRedirect() {
  initGoogleTagManager();
  // Envía el evento de clic a Google Analytics
  ReactGA.event({
    category: 'click_whatsapp_superior',
    action: 'click_whatsapp_superior',
    //label: 'Boton_Whatsapp_Superior',
  });
  window.open('https://api.whatsapp.com/send?phone=5491148653833&text=Hola%21+Quisiera+solicitar+informaci%C3%B3n+sobre+sus+productos', '_blank');

}
function handleDownload() {
  initGoogleTagManager();
  // Envía el evento de clic a Google Analytics
  ReactGA.event({
    category: 'Boton_Catalogo_Invierno_Superior',
    action: 'click',
  });
  const link = document.createElement('a');
  link.href = pdfFile;
  link.download = 'CATALOGO_INVIERNO_2023.pdf';
  link.click();
  // Agrega aquí la lógica adicional para el clic
}
const handleDownloadV = () => {
  ReactGA.event({
    category: 'Boton_Catalogo_Verano_Superior',
    action: 'Click',
    //label: 'Boton_Catalogo_Verano_Superior',
  });
  const link = document.createElement('a');
  link.href = pdfFile2;
  link.download = 'CATALOGO_VERANO_2023.pdf';
  link.click();
};
const Navbar = () => {

  return (
    <div className='flex lg:justify-between lg:flex-row flex-col items-center lg:mr-20 lg:ml-20 h-[80px] lg:h-[100px] max-w-[full] mx-auto mb-[170px] lg:pt-[100px] lg:pb-[40px] px-4'>
      <div  style={{ display: 'none' }}>
        <p>A continuación, te presentamos una lista de algunos de nuestros productos más populares: Pantuflas, Pantuflones, Gomón Zuecos Crocs Bota Chenile Pata De Oso Garras Pantubota Pantumedia Escarpines Botitas De Bebe Botas De Lluvia</p>
      </div>
      <img className='w-[150px] my-4 ml-[10px]'  src={logo} alt='/' />
      <div className=' flex flex-col items-center'>
        <h1 className='text-[24px] font-bold pb-[20px]' >Descargá nuestro catálogo</h1>
        <div class="inline-flex rounded-md shadow-sm" role="group" >
          <button type="button" onClick={handleDownloadV} class="px-4 py-2 text-[1.5vh]  font-medium text-blue bg-blue border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700">
          <FontAwesomeIcon icon={faDownload} className='mr-2'/>
            Catálogo Verano
            <FontAwesomeIcon icon={faUmbrellaBeach} className='ml-2'/>
          </button>
          <button type="button" onClick={handleDownload} class="px-4 py-2 text-[1.5vh] font-medium text-white bg-blue border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700">
            <FontAwesomeIcon icon={faDownload} className='mr-2'/>
            Catálogo Invierno
            <FontAwesomeIcon icon={faSnowflake} className='ml-2' />
          </button>
        </div>
      </div>
      
    </div>
  );
};

const Hero = () => {
  return (
    <div className="text-white bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Navbar />
      <div className="w-full lg:mt-[-250px] md:mt-[-250px] mt-[-100px] flex flex-col lg:flex-row h-screen justify-center items-center lg:px-[100px] px-[20px]">
        <div className="w-full md:pt-[350px] lg:pt-[90px] mx-auto flex flex-col justify-center lg:items-start items-center">
          <p className="text-[#e80083] text-[3vh] font-poppins font-bold p-2">
            <span className="text-[#ffffff]">SOMOS</span> BEREL-K
          </p>
          <h1 className="lg:text-7xl text-[6vh] font-poppins font-bold py-7 lg:py-3 leading-[1] text-center md:text-center lg:text-left">
            VENTA MAYORISTA <br />DE CALZADOS
          </h1>
          <p className="lg:text-2xl text-[2vh] font-semiBold font-poppins text-white mb-4 text-center md:text-center lg:text-left">
            Somos fabricantes de pantuflas y ojotas.<br />Realizamos envíos a todo el país.
          </p>
        </div>
        <div className="flex flex-col items-center lg:mt-[150px] md:mt-[60px]">
          {/* <img className='md:w-[60vh] md:pt-[120px] w-[40vh] pb-[20px]' src={box} alt='/' /> */}
          <div className="flex flex-row mb-[50px] justify-between items-center">
            <div className="flex flex-col">
              <h1 className="leading-none font-bold font-poppins lg:text-[6vh] md:text-[6vh] text-[4vh] mt-[40px]">Envianos un<br /> WhatsApp</h1>
              <p className="font-thin leading-none font-poppins lg:text-[3vh] text-[2vh] mt-4">Nos encantaría asesorarte y<br />responder todas tus inquietudes</p>
            </div>
            <img className="lg:w-[9vh] lg:h-[9vh] md:ml-[30px] md:w-[12vh] w-[8vh] mt-[5px]" src={boton} alt="/" />
          </div>
          <button
            className="flex items-center md:mb-[1px] lg:mb-[0px] mb-[-250px] justify-center bg-[#25d366] h-[60px] md:h-[80px] md:w-[500px] w-[300px] text-[20px] md:text-[25px] rounded-md font-medium mb-4"
            type="button"
            onClick={handleRedirect}
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-5 text-[40px] lg:text-[60px]" />
            Enviar Whatsapp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
