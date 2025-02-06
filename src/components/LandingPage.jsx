import React from 'react';

import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';
import Episodes from './Episodes';
import Protection from './Protection';
import Footer from './Footer';

const PodcastLandingPage = () => {
return (
<div className="min-h-screen bg-gray-100">
  <Header/>
  <Hero/>
  <Intro/>
  {/* Featured Episodes Section */}
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Episodios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Episodes/>
      </div>
    </div>
  </section>
  <Protection/>
  <Footer/>
</div>
);
};

export default PodcastLandingPage;