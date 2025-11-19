import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
    border: isOver ? '4px dashed green' : '4px solid gray',
  };


  return (
    <div ref={setNodeRef} style={style} className='w-64 h-64 flex items-center justify-center border-200 rounded-md transition-all ease-in-out duration-300'>
      {props.children}
    </div>
  );
}