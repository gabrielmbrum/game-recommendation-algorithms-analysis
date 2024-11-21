import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const EDAPage = () => {
  const buttons = [
    {
      title: 'Top 15 Jogos Mais Jogados',
      path: '/eda/DetailPage',
      params: {
        title: 'Top 15 Jogos Mais Jogados',
        image: 'assets/images/top-15-jogados.webp', // Path to your .webp image
        description: `
  &emsp;&emsp;Os dados analisados mostram informações detalhadas sobre os jogos mais jogados em um sistema de recomendação, fornecendo insights sobre as preferências dos usuários.
  O jogo com o menor tempo acumulado no Top 15 alcançou <strong>35.443.052 horas</strong>, enquanto o mais jogado, <strong>Team Fortress 2</strong>, atingiu impressionantes <strong>101.809.976 horas</strong>.
  A média de horas jogadas entre os jogos analisados é de aproximadamente <strong>60.707.944 horas</strong>, com um desvio padrão de <strong>22.549.342 horas</strong>, indicando uma variabilidade moderada.
  A mediana, de <strong>46.720.360 horas</strong>, revela que metade dos jogos acumula menos de 47 milhões de horas jogadas.
  Com um coeficiente de variação de <strong>37,1%</strong>, os dados mostram uma dispersão significativa, mas sem identificar outliers, o que aponta para uma consistência geral entre os jogos analisados.<br />
  &emsp;&emsp;Ao observar o gráfico, fica evidente a dominância de títulos como <strong>Team Fortress 2</strong>, <strong>Counter-Strike: Global Offensive</strong> e <strong>Dota 2</strong>, que lideram em horas acumuladas e refletem um alto nível de engajamento.
  Jogos como <strong>Rust</strong> e <strong>Tom Clancy's Rainbow Six Siege</strong> ainda apresentam números expressivos, embora mais distantes do topo.
  A grande concentração de horas em poucos títulos é um padrão esperado, dado o apelo competitivo, a retenção por meio de atualizações e o suporte a comunidades ativas.
  Apesar disso, títulos como <strong>Terraria</strong> e <strong>Garry's Mod</strong>, mesmo com menor tempo acumulado, mostram a importância de atender a uma audiência diversificada.<br />
  &emsp;&emsp;Essa análise demonstra que o sistema de recomendação está alinhado às preferências gerais dos jogadores, priorizando com eficácia os títulos mais jogados.
  Ao mesmo tempo, ela sugere que uma estratégia de diversificação pode atrair usuários para jogos menos explorados, mas ainda relevantes.
  Essa abordagem equilibra a recomendação de jogos populares com oportunidades de descoberta, maximizando o engajamento dos usuários e otimizando os resultados do sistema.
  `,
      },
    },
    {
      title: 'Top 15 Jogos Mais Jogados',
      path: '/eda/DetailPage',
      params: {
        title: 'Top 15 Jogos Mais Jogados',
        image: 'assets/images/top-15-jogados.webp',
        description: `
  Os dados analisados mostram informações detalhadas sobre os jogos mais jogados em um sistema de recomendação, fornecendo insights sobre as preferências dos usuários.
  O jogo com o menor tempo acumulado no Top 15 alcançou <strong>35.443.052 horas</strong>, enquanto o mais jogado, <strong>Team Fortress 2</strong>, atingiu impressionantes <strong>101.809.976 horas</strong>.
  A média de horas jogadas entre os jogos analisados é de aproximadamente <strong>60.707.944 horas</strong>, com um desvio padrão de <strong>22.549.342 horas</strong>, indicando uma variabilidade moderada.
  A mediana, de <strong>46.720.360 horas</strong>, revela que metade dos jogos acumula menos de 47 milhões de horas jogadas.
  Com um coeficiente de variação de <strong>37,1%</strong>, os dados mostram uma dispersão significativa, mas sem identificar outliers, o que aponta para uma consistência geral entre os jogos analisados.<br />
  Ao observar o gráfico dos 15 jogos mais jogados, fica evidente a dominância de títulos como <strong>Team Fortress 2</strong>, <strong>Counter-Strike: Global Offensive</strong> e <strong>Dota 2</strong>, que lideram em horas acumuladas e refletem um alto nível de engajamento.
  Jogos como <strong>Rust</strong> e <strong>Tom Clancy's Rainbow Six Siege</strong> ainda apresentam números expressivos, embora mais distantes do topo.
  A grande concentração de horas em poucos títulos é um padrão esperado, dado o apelo competitivo, a retenção por meio de atualizações e o suporte a comunidades ativas.
  Apesar disso, títulos como <strong>Terraria</strong> e <strong>Garry's Mod</strong>, mesmo com menor tempo acumulado, mostram a importância de atender a uma audiência diversificada.<br />
  Essa análise demonstra que o sistema de recomendação está alinhado às preferências gerais dos jogadores, priorizando com eficácia os títulos mais jogados.
  Ao mesmo tempo, ela sugere que uma estratégia de diversificação pode atrair usuários para jogos menos explorados, mas ainda relevantes.
  Essa abordagem equilibra a recomendação de jogos populares com oportunidades de descoberta, maximizando o engajamento dos usuários e otimizando os resultados do sistema.
  `,
      },
    },
    {
      title: 'Top 15 Jogos Mais Jogados',
      path: '/eda/DetailPage',
      params: {
        title: 'Top 15 Jogos Mais Jogados',
        image: 'assets/images/top-15-jogados.webp',
        description: `
  Os dados analisados mostram informações detalhadas sobre os jogos mais jogados em um sistema de recomendação, fornecendo insights sobre as preferências dos usuários.
  O jogo com o menor tempo acumulado no Top 15 alcançou <strong>35.443.052 horas</strong>, enquanto o mais jogado, <strong>Team Fortress 2</strong>, atingiu impressionantes <strong>101.809.976 horas</strong>.
  A média de horas jogadas entre os jogos analisados é de aproximadamente <strong>60.707.944 horas</strong>, com um desvio padrão de <strong>22.549.342 horas</strong>, indicando uma variabilidade moderada.
  A mediana, de <strong>46.720.360 horas</strong>, revela que metade dos jogos acumula menos de 47 milhões de horas jogadas.
  Com um coeficiente de variação de <strong>37,1%</strong>, os dados mostram uma dispersão significativa, mas sem identificar outliers, o que aponta para uma consistência geral entre os jogos analisados.<br />
  Ao observar o gráfico dos 15 jogos mais jogados, fica evidente a dominância de títulos como <strong>Team Fortress 2</strong>, <strong>Counter-Strike: Global Offensive</strong> e <strong>Dota 2</strong>, que lideram em horas acumuladas e refletem um alto nível de engajamento.
  Jogos como <strong>Rust</strong> e <strong>Tom Clancy's Rainbow Six Siege</strong> ainda apresentam números expressivos, embora mais distantes do topo.
  A grande concentração de horas em poucos títulos é um padrão esperado, dado o apelo competitivo, a retenção por meio de atualizações e o suporte a comunidades ativas.
  Apesar disso, títulos como <strong>Terraria</strong> e <strong>Garry's Mod</strong>, mesmo com menor tempo acumulado, mostram a importância de atender a uma audiência diversificada.<br />
  Essa análise demonstra que o sistema de recomendação está alinhado às preferências gerais dos jogadores, priorizando com eficácia os títulos mais jogados.
  Ao mesmo tempo, ela sugere que uma estratégia de diversificação pode atrair usuários para jogos menos explorados, mas ainda relevantes.
  Essa abordagem equilibra a recomendação de jogos populares com oportunidades de descoberta, maximizando o engajamento dos usuários e otimizando os resultados do sistema.
  `,
      },
    },
    {
      title: 'Top 15 Jogos Mais Jogados',
      path: '/eda/DetailPage',
      params: {
        title: 'Top 15 Jogos Mais Jogados',
        image: 'assets/images/top-15-jogados.webp',
        description: `
  Os dados analisados mostram informações detalhadas sobre os jogos mais jogados em um sistema de recomendação, fornecendo insights sobre as preferências dos usuários.
  O jogo com o menor tempo acumulado no Top 15 alcançou <strong>35.443.052 horas</strong>, enquanto o mais jogado, <strong>Team Fortress 2</strong>, atingiu impressionantes <strong>101.809.976 horas</strong>.
  A média de horas jogadas entre os jogos analisados é de aproximadamente <strong>60.707.944 horas</strong>, com um desvio padrão de <strong>22.549.342 horas</strong>, indicando uma variabilidade moderada.
  A mediana, de <strong>46.720.360 horas</strong>, revela que metade dos jogos acumula menos de 47 milhões de horas jogadas.
  Com um coeficiente de variação de <strong>37,1%</strong>, os dados mostram uma dispersão significativa, mas sem identificar outliers, o que aponta para uma consistência geral entre os jogos analisados.<br />
  Ao observar o gráfico dos 15 jogos mais jogados, fica evidente a dominância de títulos como <strong>Team Fortress 2</strong>, <strong>Counter-Strike: Global Offensive</strong> e <strong>Dota 2</strong>, que lideram em horas acumuladas e refletem um alto nível de engajamento.
  Jogos como <strong>Rust</strong> e <strong>Tom Clancy's Rainbow Six Siege</strong> ainda apresentam números expressivos, embora mais distantes do topo.
  A grande concentração de horas em poucos títulos é um padrão esperado, dado o apelo competitivo, a retenção por meio de atualizações e o suporte a comunidades ativas.
  Apesar disso, títulos como <strong>Terraria</strong> e <strong>Garry's Mod</strong>, mesmo com menor tempo acumulado, mostram a importância de atender a uma audiência diversificada.<br />
  Essa análise demonstra que o sistema de recomendação está alinhado às preferências gerais dos jogadores, priorizando com eficácia os títulos mais jogados.
  Ao mesmo tempo, ela sugere que uma estratégia de diversificação pode atrair usuários para jogos menos explorados, mas ainda relevantes.
  Essa abordagem equilibra a recomendação de jogos populares com oportunidades de descoberta, maximizando o engajamento dos usuários e otimizando os resultados do sistema.
  `,
      },
    },
    {
      title: 'Top 15 Jogos Mais Jogados',
      path: '/eda/DetailPage',
      params: {
        title: 'Top 15 Jogos Mais Jogados',
        image: 'assets/images/top-15-jogados.webp',
        description: `
  Os dados analisados mostram informações detalhadas sobre os jogos mais jogados em um sistema de recomendação, fornecendo insights sobre as preferências dos usuários.
  O jogo com o menor tempo acumulado no Top 15 alcançou <strong>35.443.052 horas</strong>, enquanto o mais jogado, <strong>Team Fortress 2</strong>, atingiu impressionantes <strong>101.809.976 horas</strong>.
  A média de horas jogadas entre os jogos analisados é de aproximadamente <strong>60.707.944 horas</strong>, com um desvio padrão de <strong>22.549.342 horas</strong>, indicando uma variabilidade moderada.
  A mediana, de <strong>46.720.360 horas</strong>, revela que metade dos jogos acumula menos de 47 milhões de horas jogadas.
  Com um coeficiente de variação de <strong>37,1%</strong>, os dados mostram uma dispersão significativa, mas sem identificar outliers, o que aponta para uma consistência geral entre os jogos analisados.<br />
  Ao observar o gráfico dos 15 jogos mais jogados, fica evidente a dominância de títulos como <strong>Team Fortress 2</strong>, <strong>Counter-Strike: Global Offensive</strong> e <strong>Dota 2</strong>, que lideram em horas acumuladas e refletem um alto nível de engajamento.
  Jogos como <strong>Rust</strong> e <strong>Tom Clancy's Rainbow Six Siege</strong> ainda apresentam números expressivos, embora mais distantes do topo.
  A grande concentração de horas em poucos títulos é um padrão esperado, dado o apelo competitivo, a retenção por meio de atualizações e o suporte a comunidades ativas.
  Apesar disso, títulos como <strong>Terraria</strong> e <strong>Garry's Mod</strong>, mesmo com menor tempo acumulado, mostram a importância de atender a uma audiência diversificada.<br />
  Essa análise demonstra que o sistema de recomendação está alinhado às preferências gerais dos jogadores, priorizando com eficácia os títulos mais jogados.
  Ao mesmo tempo, ela sugere que uma estratégia de diversificação pode atrair usuários para jogos menos explorados, mas ainda relevantes.
  Essa abordagem equilibra a recomendação de jogos populares com oportunidades de descoberta, maximizando o engajamento dos usuários e otimizando os resultados do sistema.
  `,
      },
    },
    {
      title: 'Top 15 Jogos Mais Jogados',
      path: '/eda/DetailPage',
      params: {
        title: 'Top 15 Jogos Mais Jogados',
        image: 'assets/images/top-15-jogados.webp',
        description: `
  Os dados analisados mostram informações detalhadas sobre os jogos mais jogados em um sistema de recomendação, fornecendo insights sobre as preferências dos usuários.
  O jogo com o menor tempo acumulado no Top 15 alcançou <strong>35.443.052 horas</strong>, enquanto o mais jogado, <strong>Team Fortress 2</strong>, atingiu impressionantes <strong>101.809.976 horas</strong>.
  A média de horas jogadas entre os jogos analisados é de aproximadamente <strong>60.707.944 horas</strong>, com um desvio padrão de <strong>22.549.342 horas</strong>, indicando uma variabilidade moderada.
  A mediana, de <strong>46.720.360 horas</strong>, revela que metade dos jogos acumula menos de 47 milhões de horas jogadas.
  Com um coeficiente de variação de <strong>37,1%</strong>, os dados mostram uma dispersão significativa, mas sem identificar outliers, o que aponta para uma consistência geral entre os jogos analisados.<br />
  Ao observar o gráfico dos 15 jogos mais jogados, fica evidente a dominância de títulos como <strong>Team Fortress 2</strong>, <strong>Counter-Strike: Global Offensive</strong> e <strong>Dota 2</strong>, que lideram em horas acumuladas e refletem um alto nível de engajamento.
  Jogos como <strong>Rust</strong> e <strong>Tom Clancy's Rainbow Six Siege</strong> ainda apresentam números expressivos, embora mais distantes do topo.
  A grande concentração de horas em poucos títulos é um padrão esperado, dado o apelo competitivo, a retenção por meio de atualizações e o suporte a comunidades ativas.
  Apesar disso, títulos como <strong>Terraria</strong> e <strong>Garry's Mod</strong>, mesmo com menor tempo acumulado, mostram a importância de atender a uma audiência diversificada.<br />
  Essa análise demonstra que o sistema de recomendação está alinhado às preferências gerais dos jogadores, priorizando com eficácia os títulos mais jogados.
  Ao mesmo tempo, ela sugere que uma estratégia de diversificação pode atrair usuários para jogos menos explorados, mas ainda relevantes.
  Essa abordagem equilibra a recomendação de jogos populares com oportunidades de descoberta, maximizando o engajamento dos usuários e otimizando os resultados do sistema.
  `,
      },
    },
  ];

  const colors = ['bg-blue-400', 'bg-blue-600']; // Alterna as cores

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-6">AED</h1>

        {/* Description */}
        <p className="text-lg text-gray-600 text-center mb-12">
          A Análise Exploratória de Dados (AED) visa identificar padrões e tendências nos dados.
          Nesta página, exploramos o dataset de jogos para entender melhor seu comportamento
          através de gráficos e estatísticas descritivas. Clique em um gráfico para começar!
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buttons.map((button, index) => (
            <Link
              to={button.path}
              key={index}
              state={button.params} // Passa os parâmetros via state
              className={`p-6 rounded-lg shadow-md text-white font-semibold text-center transition-transform transform hover:scale-105 ${
                colors[index % 2]
              }`}
            >
              {button.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EDAPage;
