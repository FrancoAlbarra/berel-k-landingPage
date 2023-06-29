import React from 'react';
import delivery from '../assets/deliver.png';
import pantuflas from '../assets/pantuflas.png';
import descuento from '../assets/descuento.png';
import garantizado from '../assets/garantizado.png';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-20 flex md:py-17 px-5'>
      <div className='w-full flex flex-wrap justify-center md:justify-evenly items-center'>
        <div className='flex-col flex justify-center items-center md:w-1/4 w-1/2'>
          <img className='w-[200px]' src={delivery} alt='/' />
          <div className='text-center'>
            <p className='md:text-[20px] md:pb-[0px] pb-20 text-[15px] font-bold font-monserrat'>
              Realizamos envíos<br />a todo el país.
            </p>
          </div>
        </div>
        <div className='flex-col flex justify-center items-center md:w-1/4 w-1/2'>
          <img className='w-[200px]' src={pantuflas} alt='/' />
          <div className='text-center'>
            <p className='md:text-[20px] text-[15px] md:pb-[0px] pb-20 font-bold font-monserrat'>
              Productos de<br />alta calidad.
            </p>
          </div>
        </div>
        <div className='flex-col flex justify-center items-center md:w-1/4 w-1/2'>
          <img className='w-[200px]' src={garantizado} alt='/' />
          <div className='text-center'>
            <p className='md:text-[20px] text-[15px] md:pb-[0px] pb-20 font-bold font-monserrat'>
              Todos nuestros productos<br />están garantizados.
            </p>
          </div>
        </div>
        <div className='flex-col flex justify-center items-center md:w-1/4 w-1/2'>
          <img className='w-[200px]' src={descuento} alt='/' />
          <div className='text-center'>
            <p className='md:text-[20px] text-[15px] font-bold md:pb-[0px] pb-20 font-monserrat'>
              Fabricado con dedicación.<br />Industria nacional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
