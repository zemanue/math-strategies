import React from 'react';
import { useDraggable } from '@dnd-kit/core';

export function Draggable(props) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} className='animate-in fade-in zoom-in-50 duration-100 cursor-grab active:cursor-grabbing'>
            {props.children}
        </div>
    );
}