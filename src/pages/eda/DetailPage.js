import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const DetailPage = () => {
  const location = useLocation();
  const { title, image, description } = location.state || {};

  // Verifica se o arquivo de imagem termina em ".webp"
  const isWebp = image && image.endsWith('.webp');
  console.log('Image URL:', image);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center pt-20 px-4 pb-8">
        {/* Back Button */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
          <Link
            to="../EDAPage"
            className="flex items-center text-gray-700 hover:text-blue-500 font-medium transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 sm:mr-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {/* Mostrar texto apenas em telas maiores */}
            <span className="hidden sm:inline">Voltar para AED</span>
          </Link>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">{title}</h1>

        {/* Chart Image */}
        {isWebp ? (
          <img
            src={`/${image}`} // Adiciona a barra no início do caminho
            alt={title}
            className="w-full max-w-3xl rounded-lg shadow-lg mb-8"
          />
        ) : (
          <div className="text-center text-red-600">
            A imagem fornecida não é um arquivo .webp ou está ausente.
          </div>
        )}

        {/* Description */}
        <div
          className="text-lg text-gray-600 text-justify max-w-4xl leading-loose"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
    </div>
  );
};

export default DetailPage;
