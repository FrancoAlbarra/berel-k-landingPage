import React from 'react';
import pymcode from '../assets/logoPymcode.png';

const handleRedirect = () => {
  window.open('https://www.pymcodesolutions.com', '_blank');
};

const Poweredby = () => {
  return (
      <div className='max-w-full bg-gray mx-auto py-10 flex justify-center text-white items-center flex-row'> 
        <p className='py-4'>Powered by</p>
        <img className='md:w-[150px] w-[150px] h-[25px]' src={pymcode} alt='/' onClick={handleRedirect}/>
      </div>
  );
};

export default Poweredby;
