import { useCallback, useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { Button } from './Button';
import { useAccelerometer } from '../hooks/useAccelerometer';

const SHAKE_THRESHOLD = 15;
const SHAKE_RESET_TIME = 300;

export const ShakeCounter = () => {
  const [shakeCount, setShakeCount] = useState(0);
  const [shaking, setShaking] = useState(false);
  const [frequency, setFrequency] = useState(40);

  const handleShake = useCallback(sensor => {
    const { x, y, z } = sensor;

    const totalAcceleration = Math.sqrt(x * x + y * y + z * z);

    if (totalAcceleration > SHAKE_THRESHOLD && !shaking) {
      setShakeCount(prev => prev + 1);
      setShaking(true);

      setTimeout(() => {
        setShaking(false);
      }, SHAKE_RESET_TIME);
    }
  }, [shaking]);

  const error = useAccelerometer(frequency, handleShake);

  const resetCounter = () => setShakeCount(0);

  const handleFrequencyChange = event => {
    setFrequency(Number(event.target.value));
  };

  if (error) {
    return (
      <ErrorMessage error="Your device does not support the Accelerometer API 😢" />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`text-6xl font-bold ${
          shaking ? 'animate-shake' : ''
        } transition duration-300 ease-in-out`}
      >
        {shakeCount}
      </div>
      <Button onClick={resetCounter}>Reset Counter</Button>
      <div className="mt-6 w-full">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Frequency: {frequency} Hz
        </label>
        <input
          type="range"
          min="10"
          max="60"
          step="10"
          value={frequency}
          onChange={handleFrequencyChange}
          className="w-full h-2 bg-gray-400 cursor-pointer rounded-lg appearance-none focus:outline-none range-thumb"
        />
      </div>
    </div>
  );
};
