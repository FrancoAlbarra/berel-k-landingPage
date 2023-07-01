import React from 'react';
import backgroundImage from '../assets/bgCat.jpg';
import pdfFile from '../assets/CATALOGO_INVIERNO_2023.pdf';
import pdfFile2 from '../assets/CATALOGO_VERANO_2023.pdf';
const Newsletter = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'CATALOGO_INVIERNO_2023.pdf';
    link.click();
  };
  const handleDownloadV = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'CATALOGO_VERANO_2023.pdf';
    link.click();
  };
  return (
    <div className='w-full h-[500px] text-white px-4 flex items-center bg-cover bg-no-repeat bg-bottom' style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl text-3xl text-2xl font-bold py-2'>
            Descargá el catálogo y descubrí<br /> nuestra última colección.
          </h1>
          <p>Descubrí nuestros últimos lanzamientos y mirá la amplia variedad<br /> de todos nuestros productos…</p>
        </div>
        <div className='my-4 ml-[150px] flex lg:flex-col flex-row '>
            <button className='bg-[#244596] text-white rounded-md font-medium w-[200px] my-6 px-6 py-3' onClick={handleDownload}>
              Descargar Catálogo 
            </button>
            <button className='text-[#244596] bg-white rounded-md lg:ml-[0px] md:ml-[50px] font-medium w-[250px] my-6 px-6 py-3' onClick={handleDownloadV}>
              Descargar Catálogo Verano
            </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
