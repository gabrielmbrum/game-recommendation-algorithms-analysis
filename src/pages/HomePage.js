import React from 'react';
import { Link } from 'react-router-dom'; // Assuming React Router is being used
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
          <h1 className="text-4xl font-extrabold text-gray-800">
            Análise de Algoritmos de Recomendação de Jogos
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            O projeto consistiu no desenvolvimento de três algoritmos para um sistema de recomendação de jogos, utilizando um dataset baseado nas horas jogadas por usuários como métrica de preferência. Foram implementados os algoritmos KNN, para recomendações baseadas nos vizinhos mais próximos; SVD, para identificar padrões latentes em preferências; e ALS, para otimizar predições em matrizes esparsas. Quanto mais horas um jogo foi jogado, maior era o interesse do usuário nesse título. Também realizamos uma análise exploratória detalhada, investigando as características do dataset e avaliando o desempenho dos algoritmos.
          </p>
        </section>

        {/* Block 2: KNN */}
        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-left">
            <Link to="/KNNPage">
              <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600">
                KNN
              </h2>
            </Link>
            <p className="mt-4 text-gray-600">
              O KNN é um algoritmo baseado em proximidade que classifica ou realiza previsões analisando os k vizinhos mais próximos de um ponto no espaço dos dados. Ele utiliza métricas de distância, como a euclidiana, para identificar similaridades e tomar decisões. Por ser simples, é ideal para problemas de classificação e regressão onde a relação entre os dados é direta.
            </p>
          </div>
          <div className="flex-1">
            <Link to="/KNNPage">
              <img
                src="/assets/images/KNN.webp"
                alt="KNN"
                className="rounded-lg shadow-md cursor-pointer hover:opacity-80"
              />
            </Link>
          </div>
        </section>

        {/* Block 3: SVD */}
        <section className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-right">
            <Link to="/SVDPage">
              <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600">
                SVD
              </h2>
            </Link>
            <p className="mt-4 text-gray-600">
              O SVD é uma técnica de decomposição de matrizes que transforma uma matriz em três componentes: U, Σ e V^T. Essa separação simplifica os dados em dimensões latentes, permitindo identificar padrões e reduzir a complexidade dos dados. É especialmente útil em problemas de análise de dados e aprendizado de representações.
            </p>
          </div>
          <div className="flex-1">
            <Link to="/SVDPage">
              <img
                src="/assets/images/SVD.webp"
                alt="SVD"
                className="rounded-lg shadow-md cursor-pointer hover:opacity-80"
              />
            </Link>
          </div>
        </section>

        {/* Block 4: ALS */}
        <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="flex-1 text-left">
            <Link to="/ALSPage">
              <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-600">
                ALS
              </h2>
            </Link>
            <p className="mt-4 text-gray-600">
              O ALS é um método iterativo para resolver problemas de fatoração de matrizes esparsas. Ele alterna a otimização de parâmetros relacionados a usuários e itens, minimizando o erro entre valores previstos e reais. É eficiente para encontrar padrões em grandes volumes de dados esparsos, como em sistemas de recomendação.
            </p>
          </div>
          <div className="flex-1">
            <Link to="/ALSPage">
              <img
                src="/assets/images/ALS.webp"
                alt="ALS"
                className="rounded-lg shadow-md cursor-pointer hover:opacity-80"
              />
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
    
          <Link
            to="/EDAPage"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700"
          >
            Acessar Análise Exploratória
          </Link>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
