// import React from 'react';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// const data = [
//   { name: 'KNN', performance: 65 },
//   { name: 'SVD', performance: 59 },
//   { name: 'ALS', performance: 80 },
// ];

// const Graph = () => {
//   // Verifica se está em um dispositivo móvel
//   const isMobile = window.innerWidth < 768;

//   return (
//     <div className="w-full flex justify-center items-center">
//       <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl px-4">
//         <ResponsiveContainer width="100%" height={400}>
//           {/* Envolvemos o gráfico em um container com o estilo condicional */}
//           <div
//             style={{
//               transform: isMobile ? 'translateX(-10%)' : 'none',
//             }}
//           >
//             <BarChart
//               data={data}
//               margin={{
//                 top: 30,
//                 right: 30,
//                 left: 30,
//                 bottom: 50,
//               }}
//             >
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               {/* Mantém a legenda centralizada */}
//               <Legend
//                 layout="horizontal"
//                 align="center"
//                 verticalAlign="bottom"
//                 wrapperStyle={{
//                   marginTop: 10,
//                 }}
//               />
//               <Bar dataKey="performance" fill="#8884d8" />
//             </BarChart>
//           </div>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default Graph;



import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'KNN', performance: 65 },
  { name: 'SVD', performance: 59 },
  { name: 'ALS', performance: 80 },
];

const Graph = () => {
  // Helper to determine chart dimensions
  const getChartDimensions = () => {
    if (window.innerWidth < 768) {
      return { width: '120%', height: 300 }; // Mobile sizes
    }
    return { width: '120%', height: 500 }; // Desktop sizes
  };

  const { width, height } = getChartDimensions();

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl px-4">
        <ResponsiveContainer width={width} height={height}>
          <BarChart
            data={data}
            margin={{
              top: 30,
              right: 20,
              left: 20,
              bottom: 50, // Space for the legend
            }}
            style={{ transform: 'translateX(-15%)' }} // Only move the graph
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* Legend remains in its original position */}
            <Legend
              layout="horizontal"
              align="left"
              verticalAlign="bottom"
              wrapperStyle={{
                marginTop: 10,
                marginLeft: '44%', // Default for desktop
                marginRight: '15%',
                ...(window.innerWidth < 768 && {
                  marginLeft: '33%',
                  marginRight: '5%',
                }),
              }}
            />
            <Bar dataKey="performance" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Graph;
