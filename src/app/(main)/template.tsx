'use client';

import { motion } from 'framer-motion';

export default function MainTemplate({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // initial={{ opacity: 0, x: "100%", skewX: -3 }}
      // animate={{ opacity: 1, x: 0, skewX: 0 }}
      // exit={{ opacity: 0, x: -50, skewX: 3 }}
      // transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
      initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      exit={{ opacity: 0, filter: 'blur(8px)', y: -10 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
