import React from 'react';
import backgroundImage from '../assets/bgCat.jpg';
import pdfFile from '../assets/CATALOGO_INVIERNO_2023.pdf';
const Newsletter = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = 'CATALOGO_INVIERNO_2023.pdf';
    link.click();
  };
  return (
    <div className='w-full h-[500px] text-white px-4 flex items-center bg-cover bg-no-repeat bg-bottom' style={{
      backgroundImage: `url(${backgroundImage})`,
    }}>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Descargá el catálogo y descubrí<br /> nuestra ultima Colección
          </h1>
          <p>Descubrí los últimos lanzamientos y todos nuestros productos catalogados.</p>
        </div>
        <div className='my-4 flex flex-col'>
            <button className='bg-[#244596] text-white rounded-md font-medium w-[200px] my-6 px-6 py-3' onClick={handleDownload}>
              Descargar Catálogo
            </button>
          <p>
            Peso aproximado del archivo - 10mb.
            Si no puedes descargarlo presionando
            <span className='text-[#e60180]' onClick={handleDownload}>  Aqui.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
