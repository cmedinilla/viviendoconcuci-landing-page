import React from 'react';

const Intro = () => {
  return (
    <>
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Acerca de este podcast</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            Un podcast en el cual hablaremos de CUCI (Colitis Ulcerosa Cronica Inespecifica) como una enfermedad autoinmune,
            compartiremos recursos que te ayudaran
            en tu día a día. Podrás encontrar testimonios, opiniones con expertos, opiniones de familiares, medicamentos
            usados como tratamiento y sus efectos secundarios, así como muchos otros temas que te ayudaran a mejorar tu
            salud física y mental para lograr tener un mejor estilo de vida con esta enfermedad.
          </p>
        </div>
      </section>
    </>
  );
};

export default Intro;