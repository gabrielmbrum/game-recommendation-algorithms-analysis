import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'KNN', performance: 65 },
  { name: 'SVD', performance: 59 },
  { name: 'ALS', performance: 80 },
];

const Graph = () => {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="performance" fill="#8884d8" />
    </BarChart>
  );
};

export default Graph;
