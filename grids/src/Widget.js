// components/Widget.js
import React from 'react';
import { useDrag } from 'react-dnd';
import SalesChart from './SalesChart';
import CustomerStatistics from './CustomerStatistics';
import './Dashboard.css';

const Widget = ({ title, type }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'widget',
    item: { id: title, type },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  let content;
  switch (type) {
    case 'chart':
      content = <SalesChart />;
      break;
    case 'statistics':
      content = <CustomerStatistics />;
      break;
    default:
      content = <p>No content</p>;
  }

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h3>{title}</h3>
      {content}
    </div>
  );
};

export default Widget;
