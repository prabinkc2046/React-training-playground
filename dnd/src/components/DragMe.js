import React from 'react';
import { useDrag } from 'react-dnd';

export default function DragMe() {
    const [{isDragging}, drag] = useDrag(() => ({
        type: 'DRAG_ME',
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div ref={drag} style={{
            cursor: 'move',
            padding: '10px',
            border: '1px solid #ccc',
            backgroundColor: isDragging ? '#f0f0f0' : 'white',
            opacity: isDragging ? 0.5 : 1,
        }}>
            Drag Me
        </div>
    );
}
