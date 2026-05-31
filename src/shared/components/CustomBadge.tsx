'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { CustomBadgeProps } from '@shared-types/components';

const SliderButton = ({
  label = '',
  href = '/projects',
  onClick,
  containerClassName = 'px-5 md:px-10',
  buttonClassName = 'inline-flex items-center justify-center gap-1 bg-[#010101] text-white rounded-full font-medium px-3 py-2 overflow-hidden cursor-pointer',
  dotClassName = 'w-1.5 h-1.5 rounded-full bg-white',
  textWrapperClassName = 'relative h-3.5 overflow-hidden',
}: CustomBadgeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
      return;
    }
    if (href === '#') {
      return;
    }
    if (href.startsWith('#')) {
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', href);
        return;
      }
    }
    router.push(href);
  };

  return (
    <div className={containerClassName}>
      <motion.button
        className={buttonClassName}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
      >
        <div className={textWrapperClassName}>
          <span aria-hidden="true" className="invisible block text-[11px] whitespace-nowrap">
            {label}
          </span>
          <motion.span
            className="absolute text-[11px] top-1/2 left-0 -translate-y-1/2 block whitespace-nowrap"
            initial={{ y: 0 }}
            animate={{ y: isHovered ? 20 : 0 }}
            transition={{ duration: isHovered ? 0.2 : 0.1, ease: 'easeInOut' }}
          >
            {label}
          </motion.span>

          <motion.span
            className="absolute text-[11px] top-1/2 left-0 -translate-y-1/2 block whitespace-nowrap"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: isHovered ? 0.2 : 0.1, ease: 'easeInOut' }}
          >
            {label}
          </motion.span>
        </div>
        <motion.div
          className={dotClassName}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.1, ease: 'easeInOut' }}
        ></motion.div>
      </motion.button>
    </div>
  );
};

export default SliderButton;
