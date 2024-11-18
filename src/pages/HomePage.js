import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Block 1: About the Project */}
        <section className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800">Game Recommendation Algorithm Analysis</h1>
          <p className="mt-4 text-gray-600 text-lg">
            This project analyzes and compares the performance of three different game recommendation algorithms. Learn how each algorithm works and their unique strengths.
          </p>
        </section>

        {/* Block 2: Algorithm 1 */}
        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-gray-800">Algorithm 1</h2>
            <p className="mt-4 text-gray-600">
              Algorithm 1 uses collaborative filtering techniques to recommend games based on user interactions and preferences. It analyzes patterns in user behavior to provide personalized suggestions.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Algorithm 1"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Block 3: Algorithm 2 */}
        <section className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-right">
            <h2 className="text-3xl font-bold text-gray-800">Algorithm 2</h2>
            <p className="mt-4 text-gray-600">
              Algorithm 2 is based on content-based filtering, recommending games by analyzing features and tags of games that users have liked in the past.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Algorithm 2"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Block 4: Algorithm 3 */}
        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-left">
            <h2 className="text-3xl font-bold text-gray-800">Algorithm 3</h2>
            <p className="mt-4 text-gray-600">
              Algorithm 3 combines collaborative and content-based filtering in a hybrid model, delivering more accurate and diverse game recommendations.
            </p>
          </div>
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Algorithm 3"
              className="rounded-lg shadow-md"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
