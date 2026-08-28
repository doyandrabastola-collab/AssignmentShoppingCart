import { useState } from 'react';

// Question:
// Build a Mini Traffic Light component using a `light` state.
// Add three buttons: Red, Yellow, and Green.
// When a button is clicked, update `light` and show its value with matching text and background color.

  const colorMap = {
    red: 'bg-red-100 text-red-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    green: 'bg-green-100 text-green-700',
  };

function MiniTrafficLight() {
const [color, setcolor] = useState('red')

  return (
   <div className="p-5 border">
  <h1 className=" text-center text-xl">
    Mini Traffic Light
  </h1>
<div className='flex justi' >


  <p className={`p-2   w-20 mt-2 ${colorMap[color]}`}>
    {color}
  </p>
</div>
  <div className="flex justify-center gap-2 mt-2">
    <button
      onClick={() => setcolor('red')}
      className="p-2 bg-red-500"
    >
      Red
    </button>

    <button
      onClick={() => setcolor('yellow')}
      className="p-2 bg-yellow-400"
    >
      Yellow
    </button>

    <button
      onClick={() => setcolor('green')}
      className="p-2 bg-green-500"
    >
      Green
    </button>
  </div>
</div>
  );
}

export default MiniTrafficLight;