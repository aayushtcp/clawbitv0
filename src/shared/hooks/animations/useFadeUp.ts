import { useMemo } from 'react';
import { Variants } from 'framer-motion';

const useFadeUp = (delay: number = 0): Variants => {
  return useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: 50,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay,
          ease: [0.22, 1, 0.36, 1], // smooth cubic
        },
      },
    }),
    [delay]
  );
};

export default useFadeUp;
