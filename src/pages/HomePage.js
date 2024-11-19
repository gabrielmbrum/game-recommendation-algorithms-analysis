import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Block 1: About the Project */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Game Recommendation Algorithm Analysis</h1>
          <p className="mt-4 text-gray-600 text-lg">
            This project analyzes and compares the performance of three different game recommendation algorithms. Learn how each algorithm works and their unique strengths.
          </p>
        </section>

        {/* Block 2: KNN */}
        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-gray-800">KNN</h2>
            <p className="mt-4 text-gray-600">
              KNN uses collaborative filtering techniques to recommend games based on user interactions and preferences. It analyzes patterns in user behavior to provide personalized suggestions.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400x300"
              alt="KNN"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Block 3: SVD */}
        <section className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-right">
            <h2 className="text-3xl font-bold text-gray-800">SVD</h2>
            <p className="mt-4 text-gray-600">
              SVD is based on content-based filtering, recommending games by analyzing features and tags of games that users have liked in the past.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400x300"
              alt="SVD"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Block 4: ALS */}
        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-gray-800">ALS</h2>
            <p className="mt-4 text-gray-600">
              ALS combines collaborative and content-based filtering in a hybrid model, delivering more accurate and diverse game recommendations.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400x300"
              alt="ALS"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
