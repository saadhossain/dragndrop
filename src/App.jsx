import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from './DragItem';
import DropZone from './DropZone';

const App = () => {
    const [droppedItems, setDroppedItems] = useState([]);

    const handleDrop = (item) => {
        setDroppedItems((prevItems) => [...prevItems, item]);
    };

    const handleRemoveItem = (index) => {
        const confirm = window.confirm('Do you want to Remove this?');
        if (confirm) {
            const updatedItems = [...droppedItems];
            updatedItems.splice(index, 1);
            setDroppedItems(updatedItems);
        }
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='max-w-screen-md mx-auto flex items-center justify-center h-screen'>
                <div className='w-full border border-gray-200 p-1 rounded'>
                    <h1 className='text-2xl font-semibold p-2'>Drag and Drop Medicine</h1>
                    <div className='flex justify-between gap-5'>
                        <div className='w-1/2 border border-gray-200 p-4 m-4 rounded'>
                            <h2 className='text-lg font-semibold mb-2'>Medicine Names</h2>
                            <DragItem name="Tab Flexibac 10" />
                            <DragItem name="Tab Maxpro 20" />
                            <DragItem name="Tab Cef 3 DS" />
                        </div>
                        <div className='w-1/2 border border-gray-200 p-4 m-4 rounded'>
                            <h2 className='text-lg font-semibold mb-2'>Selected</h2>
                            <DropZone onDrop={handleDrop} />
                            {droppedItems.map((item, index) => (
                                <div
                                    key={index}
                                    className='flex items-center justify-between border border-gray-200 p-1 rounded mt-2 bg-blue-300'
                                >
                                    <p>{item.name}</p>
                                    <button
                                        onClick={() => handleRemoveItem(index)}
                                        className='bg-blue-600 py-1 px-2 rounded-lg text-white font-semibold'
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default App;