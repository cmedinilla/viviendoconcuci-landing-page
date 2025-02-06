import React from 'react';

import rousita from '../assets/rousita.png'

const Hero = () => {
return (
  <>
    {/* Hero Section */}
    <section
      className="bg-gradient-to-br from-[#1f1f1f] via-[#737373] to-[#1f1f1f] h-screen flex items-center justify-cente relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4 text-white">Bienvenidos a viviendo con CUCI</h1>
          <p className="text-xl mb-8 text-white">Un diagnóstico con propósito.</p>
          <a href="https://open.spotify.com/show/7pz2dCEau9MAkxMi8SEbDB?si=a063b610e96444c9" target='_blank'
            rel="noreferrer">
            <button
              className="bg-white hover:bg-gray-300 text-black font-semibold py-3 px-6 rounded-lg transition duration-300">
              Escúchanos!
            </button>
          </a>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 flex justify-center">
          <img src={rousita} alt="Viviendo con CUCI" className="w-full max-w-md md:max-w-lg" />
        </div>
      </div>
    </section>
  </>
);
};

export default Hero;