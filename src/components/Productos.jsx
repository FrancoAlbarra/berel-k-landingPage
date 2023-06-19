import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import backgroundImage from '../assets/bgBerel.jpg';
import foto1 from '../assets/7263.jpg';
import foto2 from '../assets/7072.jpg';
import foto3 from '../assets/7121.jpg';
import foto4 from '../assets/7394.jpg';
import foto5 from '../assets/7468.jpg';
import foto6 from '../assets/7221.jpg';
import { useMediaQuery } from 'react-responsive';

const Productos = () => {
  const isMobile = useMediaQuery({ maxWidth: 1200 }); // Define el ancho máximo para considerar la pantalla como móvil

  const renderCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
    };

    return (
      <div className='text-white w-screen py-20 px-3 bg-cover bg-no-repeat bg-center' style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
      <Slider {...settings}>
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img class="w-full h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto1} alt=""/>
        </div>
        <div class="relative max-hover flow-hidden bg-cover bg-no-repeat">
          <img class="w-full h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto4} alt=""/>
        </div>
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img class="w-full h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto3} alt=""/>
        </div>
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img class="w-full h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto2} alt=""/>
        </div>
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img class="w-full h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto5} alt=""/>
        </div>
        <div class="relative overflow-hidden bg-cover bg-no-repeat">
          <img class="w-full h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto6} alt=""/>
        </div>
      </Slider>
      </div>
    );
  };

  const renderNormalView = () => {
    return (
      <div className='text-white w-screen h-screen bg-cover bg-no-repeat bg-center' style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
        <div class="w-full mx-auto py-20 px-20 gap-5 md:columns-3 columns-2 space-y-10">
          <div  class="relative max-w overflow-hidden bg-cover bg-no-repeat">
            <img class="w-full h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto1} alt=""/>
          </div>
          <div  class="relative max-w overflow-hidden bg-cover bg-no-repeat">
            <img class="max-w  h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto4} alt=""/>
          </div>
          <div  class="relative max-w overflow-hidden bg-cover bg-no-repeat">
            <img class="max-w h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto3} alt=""/>
          </div>
          <div  class="relative max-w overflow-hidden bg-cover bg-no-repeat">
            <img class="max-w h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto2} alt=""/>
          </div>
          <div  class="relative max-w overflow-hidden bg-cover bg-no-repeat">
            <img class="max-w h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto5} alt=""/>
          </div>
          <div  class="relative max-w overflow-hidden bg-cover bg-no-repeat">
            <img class="max-w h-full rounded-lg transition duration-300 ease-in-out hover:scale-110 rounded-lg" src={foto6} alt=""/>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {isMobile ? renderCarousel() : renderNormalView()}
    </>
  );
};

export default Productos;
