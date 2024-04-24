// components/CustomerStatistics.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './Dashboard.css';

const data = {
  labels: ['New', 'Returning', 'Referrals'],
  datasets: [
    {
      data: [300, 200, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const CustomerStatistics = () => {
  return <Pie data={data} />;
};

export default CustomerStatistics;
