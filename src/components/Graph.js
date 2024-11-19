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
                marginLeft: '42%', // Default for desktop
                marginRight: '10%',
                ...(window.innerWidth < 768 && {
                  marginLeft: '30%',
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
