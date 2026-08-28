import { useState } from 'react';

const START_TEMP = 20;

function TemperaturePractice() {
  const [temperature, setTemperature] = useState(START_TEMP);

  return (
    <div className="p-5 border w-80">

      <h1 className="text-xl font-bold">
        Temperature Practice
      </h1>

      <p className="text-3xl mt-4">
        {temperature}°C
      </p>

      <p className="mt-2">
        {temperature < 15
          ? 'Cold'
          : temperature > 25
          ? 'Hot'
          : 'Normal'}
      </p>

      <div className="flex gap-2 mt-4">

        <button
          onClick={() => setTemperature(temperature - 1)}
          className="p-2 bg-blue-500 text-white"
        >
          -
        </button>

        <button
          onClick={() => setTemperature(START_TEMP)}
          className="p-2 bg-gray-300"
        >
          Reset
        </button>

        <button
          onClick={() => setTemperature(temperature + 1)}
          className="p-2 bg-red-500 text-white"
        >
          +
        </button>

      </div>

    </div>
  );
}

export default TemperaturePractice;