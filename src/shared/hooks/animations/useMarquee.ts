import { useMemo } from 'react';
import { Transition } from 'framer-motion';

const useMarquee = (speed: number = 20) => {
  return useMemo(() => {
    const transition: Transition = {
      repeat: Infinity,
      repeatType: 'loop',
      duration: speed,
      ease: 'linear',
    };

    return {
      animate: {
        x: ['0%', '-50%'],
      },
      transition,
    };
  }, [speed]);
};

export default useMarquee;
