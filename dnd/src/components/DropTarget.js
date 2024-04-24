import React from 'react';
import { useDrop } from 'react-dnd';

export default function DropTarget({ onDrop }) {
    const [{isOver}, drop] = useDrop(() => ({
        accept: 'DRAG_ME',
        drop: () => {
          onDrop(); // Notify the parent component about the drop
          return { name: 'DropTarget' };
        },
        collect: monitor => ({
            isOver: monitor.isOver()
        })      
    }));

    return (
        <div ref={drop} style={{
            width: '200px',
            height: '200px',
            border: '2px dashed #000',
            backgroundColor: isOver ? 'green' : '#f0f0f0'
        }}>
            {isOver ? 'Drop here!' : 'Drag a component here'}
        </div>
    );
}
