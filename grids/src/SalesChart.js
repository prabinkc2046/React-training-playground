// components/SalesChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './Dashboard.css';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const SalesChart = () => {
  return <Doughnut data={data} />;
};

export default SalesChart;
