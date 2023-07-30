import React from 'react';
import backgroundImage from '../assets/bgCat.jpg';
import pdfFile from '../assets/CATALOGO_INVIERNO_2023.pdf';
import pdfFile2 from '../assets/CATALOGO_VERANO_2023.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake , faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

const Newsletter = () => {
  const handleDownload = () => {
    ReactGA.event({
      category: 'Boton_Catalogo_Invierno_Inferior',
      action: 'Click',
      label: 'Boton_Catalogo_Invierno_Inferior',
    });
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'CATALOGO_INVIERNO_2023.pdf';
    link.click();
  };
  const handleDownloadV = () => {
    ReactGA.event({
      category: 'Boton_Catalogo_Verano_Inferior',
      action: 'Click',
      label: 'Boton_Catalogo_Verano_Inferior',
    });
    const link = document.createElement('a');
    link.href = pdfFile2;
    link.download = 'CATALOGO_VERANO_2023.pdf';
    link.click();
  };
  return (
    <div className='w-full h-[580px] text-white px-4 flex items-center bg-cover bg-no-repeat bg-bottom' style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      <div className='mx-auto grid mt-[30px] mb-[30px] lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl text-3xl text-2xl font-bold py-2'>
            Descargá el catálogo y descubrí<br /> nuestra última colección.
          </h1>
          <p>¡Descubre nuestros últimos lanzamientos y explora la amplia variedad de productos,<br />  Desde pantuflas y pantuflones cálidos hasta botas de lluvia y zuecos resistentes, tenemos <br />todo lo que necesitas para mantenerte abrigado(a) y a la moda durante esta temporada fría.<br /> ¡No te pierdas nuestros últimos lanzamientos!</p>
        </div>
        <div className='my-4 lg:ml-[150px] flex lg:flex-col flex-col md:flex-row items-center'>
            <button className='bg-[#244596] text-[1.5vh] lg:text-[1.7vh] text-white rounded-md font-medium w-[290px] my-6 px-6 py-3' onClick={handleDownload}>
              Descargar Catálogo Invierno
              <FontAwesomeIcon icon={faSnowflake} className='ml-2'/>
            </button>
            <button className='text-[#244596] text-[1.5vh] lg:text-[1.7vh] bg-white rounded-md lg:ml-[0px] md:ml-[50px] font-medium w-[290px] my-6 px-6 py-3' onClick={handleDownloadV}>
              Descargar Catálogo Verano
              <FontAwesomeIcon icon={faUmbrellaBeach} className='ml-2' />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
