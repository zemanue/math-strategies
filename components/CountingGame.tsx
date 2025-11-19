"use client"

import React, { useState } from 'react';
import { DndContext, DragEndEvent, UniqueIdentifier } from '@dnd-kit/core';

import { Droppable } from '../components/Droppable';
import { Draggable } from '../components/Draggable';
import { ShapeIcon } from './icons';

export default function CountingGame() {

    const containers = ["Shape Selector", "Ten Frame"]
    const [parent, setParent] = useState<UniqueIdentifier | null>(null);
    const draggableComponent = (
        <Draggable id="draggable"><ShapeIcon shape="apple" /></Draggable>
    );

    return (
        <main className="relative flex flex-col items-center min-h-screen w-full p-4 md:p-8 gap-3">
            <header className="mb-8">
                <h1 className="text-3xl font-bold sm:text-6xl text-center text-slate-800">
                    Drag n&apos; Count!
                </h1>
            </header>
            <DndContext onDragEnd={handleDragEnd}>
                {parent === null ? draggableComponent : null}

                {containers.map((id) => (
                    // We updated the Droppable component so it would accept an `id`
                    // prop and pass it to `useDroppable`
                    <Droppable key={id} id={id}>
                        {parent === id ? draggableComponent : 'Drop here'}
                    </Droppable>
                    // className="flex-grow w-full flex items-center justify-center"
                ))}
            </DndContext>
        </main>
    );

    function handleDragEnd(event: DragEndEvent) {
        const { over } = event;
        // Si el objeto se suelta sobre un contenedor, actualiza el estado del padre
        // otherwise reset the parent to `null`
        setParent(over ? over.id : null);
    }
}