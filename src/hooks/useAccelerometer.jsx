import { useEffect, useState } from 'react';

export const useAccelerometer = (frequency, onShake) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    let sensor;
    try {
      sensor = new Accelerometer({ frequency });
      sensor.addEventListener('error', () => setError(true));
      sensor.addEventListener('reading', () => onShake(sensor));
      sensor.start();
    } catch (e) {
      setError(true);
    }

    return () => {
      if (sensor) {
        sensor.stop();
        sensor.removeEventListener('reading', onShake);
        sensor.removeEventListener('error', () => setError(true));
      }
    };
  }, [frequency, onShake]);

  return error;
};
