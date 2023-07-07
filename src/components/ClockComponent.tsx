import React, { useState, useEffect } from 'react';

export const ClockComponent: React.FC = () => {
  const [horario, setHorario] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHorario(new Date());
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
  <div>
    {horario.toLocaleTimeString()}
  </div>
  );
};

