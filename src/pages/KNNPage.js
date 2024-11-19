import React from 'react';
import Navbar from '../components/Navbar';
import Graph from '../components/Graph';

const KNNPage = () => {
  const labels = ['Metric 1', 'Metric 2', 'Metric 3'];
  const data = [75, 85, 60]; // Dados específicos do Algoritmo 1

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">KNN Details</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed performance metrics and an overview of KNN.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-md flex justify-center items-center">
          <Graph labels={labels} data={data} title="KNN Performance" />
        </div>
      </div>
    </div>
  );
};

export default KNNPage;
