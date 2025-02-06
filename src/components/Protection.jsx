import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const whatsAppUri = 'https://api.whatsapp.com/send?phone=523322726475';

const Protection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Protección Médica</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Sabemos que una enfermedad puede ser costosa, por ello diseñamos estrategias para que puedas contar con un plan 
          de gastos médicos mayores adaptado a tus necesidades.
        </p>

        <div className="mt-8">
          <p className="text-lg font-semibold text-gray-900">Cotiza ahora</p>
          <div className="mt-4 flex justify-center">
            <a
              href={whatsAppUri}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg text-lg font-medium transition duration-300 hover:bg-green-600"
            >
              <FaWhatsapp size={24} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Protection;
