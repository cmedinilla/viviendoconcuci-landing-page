import React from 'react';

import Header from './Header';

const PodcastLandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen flex items-center justify-center text-white" style={{ backgroundImage: "url('hero-background.jpg')" }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Podcast</h1>
          <p className="text-xl mb-8">Your weekly dose of inspiration, stories, and insights.</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
            Listen Now
          </button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Acerca de este podcast</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
          Un podcast en el cual hablaremos de CUCI como una enfermedad autoinmune, compartiremos recursos que te ayudaran en tu día a día. Podrás encontrar testimonios, opiniones con expertos, opiniones de familiares, medicamentos usados como tratamiento y sus efectos secundarios, así como muchos otros temas que te ayudaran a mejorar tu salud física y mental para lograr tener un mejor estilo de vida con esta enfermedad.
          </p>
        </div>
      </section>

      {/* Featured Episodes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Episodes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Episode Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="episode1.jpg" alt="Episode 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Episode 1: The Journey Begins</h3>
                <p className="text-gray-600 mb-4">
                  In our very first episode, we discuss the origins of the podcast and what you can expect in the coming weeks.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Listen
                </button>
              </div>
            </div>

            {/* Episode Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="episode2.jpg" alt="Episode 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Episode 2: Overcoming Challenges</h3>
                <p className="text-gray-600 mb-4">
                  This episode features an inspiring interview with a guest who has overcome significant challenges to achieve success.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Listen
                </button>
              </div>
            </div>

            {/* Episode Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src="episode3.jpg" alt="Episode 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Episode 3: The Power of Mindset</h3>
                <p className="text-gray-600 mb-4">
                  We dive deep into the importance of mindset and how it can shape your life and career.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  Listen
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
            <a href="https://instagram.com/yourpodcast" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300">
              Instagram
            </a>
            <a href="https://facebook.com/yourpodcast" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition duration-300">
              Facebook
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PodcastLandingPage;
