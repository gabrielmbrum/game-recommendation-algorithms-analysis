import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const EDAPage = () => {
  const buttons = [
    {
      title: 'Top 15 Mais Jogados',
      path: '/eda/DetailPage',
      params: {
        title: 'Top 15 Mais Jogados',
        image: 'assets/images/top-15-jogados.webp', // Path to your .webp image
        description: `
  &emsp;&emsp;O gráfico dos Top 15 Jogos Mais Jogados destaca títulos que claramente se sobressaem pela quantidade de horas jogadas pelos usuários. Jogos como Team Fortress 2, Counter-Strike: Global Offensive e Dota 2 lideram a lista, demonstrando sua forte capacidade de engajar jogadores por longos períodos. <strong>Esses jogos possuem uma combinação de mecânicas multiplayer envolventes, atualizações constantes e uma base de jogadores altamente ativa</strong>. Jogos como Rust, ARK: Survival Evolved e Destiny 2 seguem a tendência, reforçando o papel de jogos com foco em exploração, sobrevivência e interações sociais.
<br />&emsp;&emsp;Quando analisamos os dados estatísticos das horas jogadas, observamos um padrão de alta variabilidade. Inicialmente, antes de remover os outliers, tínhamos uma média de 110084,12 horas jogadas e um desvio padrão extremamente elevado de 1.630.632,4, evidenciando a forte influência de jogos com horas jogadas muito acima da média. Além disso, <strong>a moda de apenas 1 hora sugere que muitos jogos são jogados brevemente ou por poucos usuários</strong>, enquanto a mediana de 258,4 horas demonstra que a maioria dos jogos permanece em níveis de jogatina mais moderados.
<br />&emsp;&emsp;Após a remoção dos outliers, o cenário muda significativamente. A nova média cai para 590,32 horas jogadas, com o desvio padrão reduzido para 992,61. <strong>Essa redução drástica na média e no desvio padrão destaca o impacto desproporcional dos outliers, que representavam 17,54% dos dados originais</strong>. Sem esses valores extremos, os dados apresentam uma distribuição muito mais homogênea, como evidenciado pelo coeficiente de variação reduzido para 1,68 (contra 14,81 anteriormente). O intervalo interquartil também diminuiu de 2034,17 para 613,5, indicando maior concentração dos valores em torno da mediana.
<br />&emsp;&emsp;Outro ponto importante é a nova mediana, que agora está em 137,89 horas jogadas, um valor muito mais baixo e representativo do comportamento geral dos usuários. <strong>Com a exclusão dos outliers, o conjunto de dados oferece uma visão mais clara e precisa sobre o tempo de jogatina médio dos jogadores regulares</strong>.
<br />&emsp;&emsp;Em suma, <strong>a análise dos dados com e sem outliers revela dois comportamentos distintos: a influência de títulos extremamente populares que dominam o tempo total jogado e o padrão mais comum dos demais jogos, com tempos de jogatina significativamente menores</strong>. Essa diferença é crucial para ajustar os algoritmos de recomendação, permitindo que se priorize tanto os grandes sucessos quanto os jogos com engajamento mediano, dependendo do perfil do usuário analisado.
  `,
      },
    },
    {
      title: 'Top 15 Mais Recomendados',
      path: '/eda/DetailPage',
      params: {
        title: 'Top 15 Mais Recomendados',
        image: 'assets/images/top-15-recomendados.webp',
        description: `
&emsp;&emsp;O gráfico dos Top 15 Jogos Mais Recomendados reflete o enorme apelo de títulos que dominam o cenário de recomendações positivas na plataforma. Jogos como Team Fortress 2, Rust e The Witcher 3: Wild Hunt lideram o ranking, reforçando seu papel como favoritos entre os jogadores. <strong>A alta quantidade de recomendações positivas desses jogos evidencia sua capacidade de proporcionar experiências memoráveis e amplamente aceitas pelo público</strong>. Jogos como Wallpaper Engine, Counter-Strike: Global Offensive e Dark Souls III seguem no gráfico, representando categorias distintas, desde ferramentas de personalização até experiências desafiadoras em diferentes gêneros.
<br />&emsp;&emsp;Ao relacionar o gráfico com os dados estatísticos das recomendações, percebe-se a forte influência de outliers sobre a média original das recomendações. Antes da remoção dos outliers, a média era de 938,69 recomendações, com um desvio padrão elevado de 6709,07. <strong>Esse alto desvio padrão reflete a disparidade entre os jogos que recebem poucas recomendações e aqueles que dominam as listas, como os do Top 15</strong>. A moda de 5 recomendações também evidencia que muitos jogos têm baixa presença em recomendações gerais, sugerindo que a maioria não alcança o mesmo impacto dos títulos líderes.
<br />&emsp;&emsp;Após a remoção dos outliers, os dados tornam-se muito mais consistentes. A média caiu significativamente para 48,42 recomendações, e o desvio padrão foi reduzido para 66,15, indicando uma redução substancial na dispersão. <strong>Essa mudança reforça como os outliers (representados pelos jogos mais recomendados do gráfico) inflavam a percepção geral das recomendações</strong>. O coeficiente de variação também diminuiu de 7,14 para 1,36, apontando uma maior homogeneidade nos dados sem os valores extremos.
<br />&emsp;&emsp;Outro ponto de destaque é a mediana, que passou de 28 para 20 recomendações após a remoção dos outliers. <strong>Isso demonstra que, sem os jogos altamente recomendados, o comportamento padrão dos dados é mais modesto e está alinhado com a maioria dos títulos na plataforma</strong>. O intervalo interquartil também foi reduzido de 127 para 50, indicando que as recomendações estão mais concentradas em torno de valores medianos.
<br />&emsp;&emsp;Em resumo, <strong>a análise com e sem outliers revela dois universos distintos: os poucos jogos que dominam as recomendações, como os do Top 15, e a grande maioria que possui um número modesto de interações positivas</strong>. Essa divisão é fundamental para compreender o impacto das recomendações nas estratégias de engajamento da plataforma, pois ela sugere que tanto os grandes sucessos quanto os jogos com menor apelo devem ser considerados em abordagens personalizadas, especialmente em algoritmos de recomendação.
  `,
      },
    },
    {
      title: 'Histograma de Horas Jogadas',
      path: '/eda/DetailPage',
      params: {
        title: 'Histograma de Horas Jogadas',
        image: 'assets/top-15-jogados.webp',
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
        image: 'assets/top-15-jogados.webp',
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
        image: 'assets/top-15-jogados.webp',
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
        image: 'assets/top-15-jogados.webp',
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
