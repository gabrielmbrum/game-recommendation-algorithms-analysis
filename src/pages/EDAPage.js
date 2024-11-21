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
        image: 'assets/images/histograma-horas-jogadas.webp', // public\assets\images\histograma-horas-jogadas.webp
        description: `
        &emsp;&emsp;O gráfico de Distribuição de Horas Jogadas pelos Usuários mostra claramente uma forte concentração de usuários que jogam por poucas horas, com uma diminuição acentuada na frequência à medida que o número de horas aumenta. <strong>O gráfico apresenta uma distribuição assimétrica, com uma cauda longa à direita, indicando que poucas jogadas acumulam muitas horas enquanto a maioria se concentra em faixas mais baixas</strong>. Esse comportamento reflete o padrão esperado em jogos, onde uma parcela dos jogadores dedica muito tempo, mas a maioria joga por períodos curtos.
<br />&emsp;&emsp;Com base nos dados estatísticos, inicialmente, com os outliers incluídos, observamos que a média de horas jogadas era de 100,60 horas por jogo, enquanto a mediana era de 27,30 horas. <strong>O desvio padrão de 176,16 horas revela uma grande dispersão nos dados, indicando a presença de valores extremos que elevam a média</strong>. Esses outliers representavam 12,77% do total de dados, evidenciando que uma parcela significativa das jogadas tem tempos de jogo muito superiores ao padrão.
<br />&emsp;&emsp;O intervalo interquartil (IQR), que vai de 7,80 a 99,20 horas, concentra a maior parte das jogadas. Porém, a presença de outliers faz com que os limites superior e inferior do IQR sejam estendidos. <strong>Isso inflaciona as métricas de tendência central, dificultando a interpretação da média como uma medida representativa do comportamento típico dos usuários</strong>.
<br />&emsp;&emsp;Ao remover os outliers, os dados passam a refletir melhor o comportamento padrão. A média é reduzida para 42,57 horas, enquanto a mediana, que permanece em 20,10 horas, torna-se mais próxima da média, sugerindo maior homogeneidade. <strong>O desvio padrão também cai significativamente para 52,49 horas, evidenciando uma distribuição mais compacta e representativa</strong>. O intervalo interquartil também é ajustado para 6,30 a 58,00 horas, indicando que a maioria dos usuários realiza jogadas com tempos mais curtos e concentrados em torno da mediana.
<br />&emsp;&emsp;Um ponto importante a ser destacado é que mesmo sem os outliers, ainda temos cerca de 8,35% dos dados classificados como valores extremos. Esses outliers, embora menos significativos em quantidade, continuam impactando a percepção dos tempos de jogo.
<br />&emsp;&emsp;Em resumo, <strong>a análise com e sem outliers revela dois comportamentos distintos: um grupo pequeno de jogadas com tempos muito elevados, que eleva as métricas de dispersão, e a grande maioria das jogadas, que reflete tempos de jogo mais curtos e consistentes</strong>. Para análises mais precisas e para ajustar estratégias, como algoritmos de recomendação, é essencial considerar a distribuição geral e o impacto dos outliers, especialmente no caso de jogos que atraem públicos com padrões de jogatina diferentes.
  `,
      },
    },
    {
      title: 'Histograma de Avaliações',
      path: '/eda/DetailPage',
      params: {
        title: 'Histograma de Avaliações',
        image: 'assets/images/histograma-rating.webp',
        description: `
  &emsp;&emsp;O gráfico de barras apresenta a Distribuição de Ratings dos Jogos categorizados em diferentes níveis de avaliação. As categorias variam desde Muito Positivo até Muito Negativo, representando o feedback dado pelos usuários em relação aos jogos avaliados. <strong>As categorias mais predominantes são "Muito Positivo", "Positivo" e "Misto", que possuem frequências semelhantes e lideram a distribuição</strong>. Isso indica que a maioria dos jogos avaliados tende a ser bem recebida ou, pelo menos, aceita pela comunidade de jogadores, com avaliações geralmente favoráveis. <strong>Entre as categorias com maior avaliação, "Muito Positivo" e "Positivo" se destacam como as mais frequentes</strong>. A presença significativa dessas categorias sugere que a qualidade dos jogos oferecidos é geralmente alta, o que pode indicar um mercado voltado a entregar boas experiências ao público. A categoria "Misto" aparece como a terceira mais frequente, indicando que há uma quantidade relevante de jogos que dividem opiniões entre os jogadores. Esses jogos podem ser alvos de melhorias para aumentar sua aceitação e eventualmente subir nas avaliações.
<br />&emsp;&emsp;<strong>Categorias negativas como "Negativo", "Majoritariamente Negativo", "Extremamente Negativo" e "Muito Negativo" possuem frequências significativamente menores em relação às avaliações positivas</strong>. Isso reforça a ideia de que jogos com qualidade inferior ou baixa aceitação são minoria no dataset. No entanto, o pequeno número de avaliações nessas categorias também pode refletir que jogos mal avaliados tendem a receber menos atenção e reviews dos jogadores. Entre as avaliações mais extremas, "Extremamente Positivo" e "Extremamente Negativo" aparecem com as menores frequências, mostrando que jogos que provocam reações intensamente positivas ou negativas são relativamente raros. Esses extremos podem ser explicados por características muito específicas ou nichadas de certos jogos.
<br />&emsp;&emsp;A predominância de avaliações positivas é um indicativo de que o mercado oferece mais jogos de qualidade ou que a percepção do público é tendenciosa em avaliar positivamente os títulos que jogam. <strong>Jogos avaliados como "Misto" podem ser alvos estratégicos de melhorias, já que estão em uma posição intermediária e têm potencial para melhorar suas avaliações</strong>. <strong>Categorias como "Majoritariamente Negativo" e "Muito Negativo" podem ajudar a identificar características que os usuários consideram problemáticas, servindo como base para aprendizado e desenvolvimento de novos jogos</strong>. Em suma, <strong>o gráfico demonstra uma forte inclinação para avaliações positivas, com poucas categorias refletindo avaliações negativas ou extremas</strong>. Isso sugere um mercado com predominância de qualidade percebida ou um público menos propenso a deixar avaliações extremamente negativas. Estratégias futuras podem considerar esses insights para fortalecer títulos em categorias intermediárias e evitar práticas que possam resultar em avaliações majoritariamente negativas.
  `,
      },
    },
    {
      title: 'Histograma das Interações',
      path: '/eda/DetailPage',
      params: {
        title: 'Histograma das Interações',
        image: 'assets/images/distribuicao-interacoes.webp',
        description: `
  &emsp;&emsp;O gráfico de barras apresenta a Distribuição de Interações por Jogo (Escala Log), destacando a frequência de interações realizadas pelos usuários para diferentes jogos. É evidente que a maioria dos jogos possui poucas interações, com a frequência diminuindo progressivamente à medida que o número de interações aumenta. <strong>Essa distribuição assimétrica, com uma cauda longa à direita, reflete um padrão comum em datasets desse tipo, onde poucos jogos acumulam grandes volumes de interações, enquanto a maioria permanece com níveis mais baixos</strong>. O uso da escala logarítmica no eixo Y ajuda a tornar a visualização mais clara, dado o grande intervalo de valores observados.
<br />&emsp;&emsp;Ao analisarmos os dados estatísticos, inicialmente com os outliers incluídos, observamos que a média de interações por jogo é de 1094,25, enquanto a mediana é de apenas 39 interações. <strong>Essa diferença significativa entre a média e a mediana indica a presença de valores extremos (outliers) que aumentam a média, mas não refletem o comportamento da maioria dos jogos</strong>. O desvio padrão elevado, de 7689,23 interações, reforça essa alta dispersão nos dados. Além disso, 15,73% das interações totais são classificadas como outliers, o que representa uma quantidade significativa e evidencia a presença de jogos altamente populares no dataset.
<br />&emsp;&emsp;O intervalo interquartil (IQR), que vai de 13 a 179,75 interações, mostra que a maioria dos jogos tem um número de interações concentrado nessa faixa. Contudo, os limites superiores e inferiores do IQR revelam a existência de valores fora desse intervalo, contribuindo para o grande número de outliers. Jogos com mais de 429,87 interações ou menos de -237,12 interações são considerados fora da faixa aceitável.
<br />&emsp;&emsp;Após a remoção dos outliers, os dados se tornam muito mais homogêneos. A média de interações cai para 65,28, enquanto a mediana é ajustada para 27 interações, valores que estão mais próximos entre si e, portanto, mais representativos da distribuição central. <strong>Essa redução na média e na dispersão (desvio padrão de 87,40) reflete a eliminação dos valores extremos que inflacionavam as métricas iniciais</strong>. O novo IQR, que vai de 11 a 79 interações, concentra ainda mais os valores em torno do comportamento típico dos jogos no dataset.
<br />&emsp;&emsp;Apesar da remoção dos outliers, ainda temos 10,87% das interações classificadas como valores extremos, o que demonstra que, mesmo com uma abordagem conservadora, alguns jogos continuam se destacando por um número de interações bem acima da média. Esses jogos representam os títulos mais populares ou de maior engajamento.
<br />&emsp;&emsp;Em suma, <strong>a análise com e sem outliers revela dois padrões distintos: um pequeno grupo de jogos altamente populares com interações excepcionalmente altas e a grande maioria, composta por jogos que recebem poucas interações</strong>. Essa distinção é crucial para entender o comportamento do dataset e para orientar estratégias, como o desenvolvimento de algoritmos de recomendação, que precisam balancear entre destacar jogos populares e promover jogos menos conhecidos. Além disso, o comportamento assimétrico da distribuição deve ser levado em conta ao interpretar as métricas gerais, já que os outliers influenciam fortemente as tendências.
  `,
      },
    },
    {
      title: 'Correlação entre Rating e Preço',
      path: '/eda/DetailPage',
      params: {
        title: 'Correlação entre Rating e Preço',
        image: 'assets/images/rating-vs-preco.webp',
        description: `
  &emsp;&emsp;O gráfico apresentado exibe a <strong>distribuição dos preços finais dos jogos em relação às categorias de rating (avaliação)</strong>, sendo essas representadas em português para facilitar a compreensão. <strong>Os outliers foram removidos nesta análise</strong>, visando eliminar valores extremos que poderiam distorcer os resultados. Essa decisão foi justificada pela necessidade de identificar padrões gerais sem a influência de preços atípicos, como jogos premium com valores muito elevados. Assim, o gráfico reflete melhor o comportamento típico dos preços dentro de cada categoria de avaliação.
<br />&emsp;&emsp;No gráfico, cada categoria de rating é representada por um <strong>boxplot</strong>, que destaca a mediana e a dispersão dos preços em cada grupo. Observa-se que as categorias mais positivas, como <strong>"Muito Positivo"</strong> e <strong>"Extremamente Positivo"</strong>, apresentam medianas e amplitudes de preços ligeiramente superiores às categorias mais negativas, como <strong>"Muito Negativo"</strong>. No entanto, essas diferenças são pequenas, sugerindo que <strong>o rating não é um fator determinante para grandes variações no preço dos jogos</strong>. A concentração dos preços ao redor de valores mais baixos é consistente em todas as categorias, indicando que a maior parte dos jogos é acessível independentemente do rating.
<br />&emsp;&emsp;Complementando a análise visual, realizamos dois testes estatísticos para avaliar a relação entre rating e preço. O <strong>teste de Spearman</strong> identificou uma correlação de <strong>0.06</strong>, que é <strong>muito fraca</strong>, embora estatisticamente significativa (p-valor: <strong>0.0000</strong>). Isso reforça que, embora existam pequenas variações entre os preços em diferentes categorias, a força da relação entre rating e preço é praticamente insignificante. Por outro lado, o <strong>teste de Kruskal-Wallis</strong> revelou diferenças estatisticamente significativas entre as distribuições de preço das categorias de rating, com uma estatística de <strong>678.68</strong> e p-valor de <strong>0.0000</strong>. Esses resultados indicam que, enquanto há pequenas diferenças entre os grupos, elas são mais detectáveis estatisticamente do que relevantes na prática.
<br />&emsp;&emsp;Concluímos, portanto, que <strong>o rating não é um forte preditor do preço final dos jogos</strong>. Apesar das diferenças estatisticamente significativas identificadas pelo teste de Kruskal-Wallis, os resultados do gráfico e da correlação de Spearman demonstram que essas diferenças são pequenas e pouco impactantes no contexto geral. Isso sugere que <strong>outros fatores, como popularidade do jogo, número de avaliações ou estratégias comerciais dos desenvolvedores, desempenham papéis mais relevantes na definição do preço</strong>.
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
        A <strong>Análise Exploratória de Dados (AED)</strong> é fundamental para <strong>compreender padrões e relações nos dados</strong>, sendo crucial no desenvolvimento de sistemas de recomendação. Ela permite identificar tendências, corrigir inconsistências e otimizar algoritmos, garantindo recomendações precisas e personalizadas. Nesse contexto, a AED analisou métricas como <strong>horas jogadas, avaliações, interações e a relação entre preços e ratings</strong>, fornecendo insights valiosos para melhorar a experiência dos usuários e a eficácia das recomendações.
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
