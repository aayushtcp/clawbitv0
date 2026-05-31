'use client';

import { useState, useEffect } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  triggered: boolean;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = '', triggered, duration = 2800 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let start = 0;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [triggered, value, duration]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

export default Counter;
