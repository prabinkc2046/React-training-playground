import React, { useState } from 'react';
import DragMe from './components/DragMe';
import DropTarget from './components/DropTarget';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function App() {
  // State to track the positions of the components. Initially, 'dragMe' is in the first position and 'dropTarget' in the second.
  const [positions, setPositions] = useState(['dragMe', 'dropTarget']);

  // Function to swap the positions
  const swapPositions = () => {
    setPositions(positions[0] === 'dragMe' ? ['dropTarget', 'dragMe'] : ['dragMe', 'dropTarget']);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        {positions[0] === 'dragMe' ? <DragMe /> : <DropTarget onDrop={swapPositions} />}
        {positions[1] === 'dropTarget' ? <DropTarget onDrop={swapPositions} /> : <DragMe />}
      </div>
    </DndProvider>
  );
}
