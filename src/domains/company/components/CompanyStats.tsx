'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { stats } from '@company-constants/company-stats';

const Counter: React.FC<{ value: number; suffix: string; triggered: boolean }> = ({
  value,
  suffix,
  triggered,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;

    let start = 0;
    const duration = 2800;
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
  }, [triggered, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

interface CompanyStatsProps {
  showBottomBorder?: boolean;
}

const CompanyStats: React.FC<CompanyStatsProps> = ({ showBottomBorder = true }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className="w-full px-5 md:px-10 py-16 lg:py-40">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col gap-4"
          >
            <span className="text-6xl sm:text-7xl md:text-8xl font-semibold text-[#010101] tracking-tight">
              <Counter value={stat.value} suffix={stat.suffix} triggered={isInView} />
            </span>
            <span className="text-md text-gray-500 font-medium ">{stat.label}</span>
          </motion.div>
        ))}
      </div>
      {showBottomBorder && <div className="mt-20 mx-4 h-0.5 bg-gray-200"></div>}
    </div>
  );
};

export default CompanyStats;
