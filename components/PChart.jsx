import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Basic Tree', value: 400 },
  { name: 'Custom Short Pants', value: 300 },
  { name: 'Super Hoodies', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PChart = () => {

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          {/* <Legend 
            align="right" 
            verticalAlign="middle" 
            layout="vertical" 
          /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PChart;
