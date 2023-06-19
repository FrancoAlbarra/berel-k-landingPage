import React from 'react';
import delivery from '../assets/deliver.png';
import pantuflas from '../assets/pantuflas.png';
import descuento from '../assets/descuento.png';
const Analytics = () => {
  return (
    <div className='w-full bg-white py-20 flex md:py-17 px-5'>
     <div className='w-full flex justify-evenly flex-col md:flex-row mx-auto items-center md:justify-evenly'>
      <div className='flex-col flex justify-center items-center'>
        <img className='w-[200px]' src={delivery} alt='/' />
        <div className='text-center'>
          <p className='md:text-[20px] md:pb-[0px] pb-20 text-[20px] font-bold font-monserrat'>
            Realizamos envíos<br />a todo el país
          </p>
        </div>
      </div>
      <div className='flex-col flex justify-center items-center'>
        <img className='w-[200px]' src={pantuflas} alt='/' />
        <div className='text-center'>
          <p className='md:text-[20px] text-[20px] md:pb-[0px] pb-20 font-bold font-monserrat'>
            Productos de<br />alta calidad
          </p>
        </div>
      </div>
      <div className='flex-col flex justify-center  items-center'>
        <img className='w-[200px]' src={descuento} alt='/' />
        <div className='text-center'>
          <p className='md:text-[20px] text-[20px] font-bold font-monserrat'>
            Fabricado con dedicación<br />industria nacional
          </p>
        </div>
      </div>
    </div>


    </div>
  );
};

export default Analytics;
