// components/Dashboard.js
import React from 'react';
import Widget from './Widget';

const dashboardItems = [
  { id: 1, title: 'Sales Chart', type: 'chart' },
  { id: 2, title: 'Customer Statistics', type: 'statistics' },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      {dashboardItems.map(item => (
        <Widget key={item.id} title={item.title} type={item.type} />
      ))}
    </div>
  );
};

export default Dashboard;
