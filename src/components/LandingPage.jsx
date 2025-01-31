import React from 'react';

import Header from './Header';

import rousita from '../assets/rousita.png'

import { FaInstagram } from 'react-icons/fa'

const PodcastLandingPage = () => {
return (
<div className="min-h-screen bg-gray-100">
  <Header />
  {/* Hero Section */}
  <section className="bg-gradient-to-br from-[#1f1f1f] via-[#737373] to-[#1f1f1f] h-screen flex items-center justify-cente relative">
    <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
      {/* Texto a la izquierda */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4 text-white">Bienvenidos a viviendo con CUCI</h1>
        <p className="text-xl mb-8 text-white">Un diagnóstico con propósito.</p>
        <a href="https://open.spotify.com/show/7pz2dCEau9MAkxMi8SEbDB?si=a063b610e96444c9" target='_blank'
          rel="noreferrer">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
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

  {/* Introduction Section */}
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Acerca de este podcast</h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
        Un podcast en el cual hablaremos de CUCI como una enfermedad autoinmune, compartiremos recursos que te ayudaran
        en tu día a día. Podrás encontrar testimonios, opiniones con expertos, opiniones de familiares, medicamentos
        usados como tratamiento y sus efectos secundarios, así como muchos otros temas que te ayudaran a mejorar tu
        salud física y mental para lograr tener un mejor estilo de vida con esta enfermedad.
      </p>
    </div>
  </section>

  {/* Featured Episodes Section */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Episodios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Episode Card 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="episode1.jpg" alt="Episode 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Episodio 1: Un diagnostico que llego para cambiar mi vida</h3>
            <p className="text-gray-600 mb-4">
              En este episodio quiero compartirte un poco de cómo fue mi diagnóstico, que es una enfermedad crónica y
              sobre todo quiero darte fuerzas para que no te rindas ante esta enfermedad.
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              Escuchar
            </button>
          </div>
        </div>

        {/* Episode Card 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="episode2.jpg" alt="Episode 2" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Episodio 2: ¿Qué es CUCI?</h3>
            <p className="text-gray-600 mb-4">
              ¿Alguna vez habías escuchado la palabra CUCI? Bueno en este episodio vas a poder entender un poco más de
              este diagnóstico sus síntomas como detectarlo, a que especialista acercarte e incluso como puedes apoyar a
              alguien que tiene esta enfermedad.
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              Escuchar
            </button>
          </div>
        </div>

        {/* Episode Card 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src="episode3.jpg" alt="Episode 3" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Episodio 3: Cuando cambiar de tratamiento</h3>
            <p className="text-gray-600 mb-4">
              ¿Te has preguntado si tu tratamiento es el correcto para ti? ¿Si es momento de buscar otras alternativas?
              Bueno en este episodio te voy a platicar un poco de cómo fue mi proceso de cambiar de tratamientos, las
              dificultades de estos cambios y también los efectos secundarios que presente con algunos medicamentos.
            </p>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
              Escuchar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Footer Section */}
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; 2025 Viviendo con CUCI. All rights reserved.</p>
      <div className="mt-4 space-x-4">
        <div className='flex gap-4 py-4'>
          <a href="https://www.instagram.com/viviendoconcuci" target='_blank' rel="noreferrer">
            <div className='p-4 bg-gray-800 rounded-xl'>
              <FaInstagram size={25} style={{color:'#00000'}} />
            </div>
          </a>
        </div>
      </div>
    </div>
  </footer>
</div>
);
};

export default PodcastLandingPage;