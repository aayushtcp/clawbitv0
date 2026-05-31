'use client';
import { BtnVariant } from '@shared-constants/enum';
import { ButtonProps } from '@shared-types/components';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Button = ({
  children,
  variant = BtnVariant.PRIMARY,
  fullWidth = false,
  isScrolled = false,
  className = '',
  whileHover = { scale: 1.05 },
  whileTap = { scale: 0.95 },
  animate,
  transition,
  style,
  ...rest
}: ButtonProps) => {
  const [showPaw, setShowPaw] = useState(false);

  const getVariantClasses = () => {
    switch (variant) {
      case BtnVariant.PRIMARY:
        return 'bg-black ring-gray-800 ring-1 text-white';
      case BtnVariant.SECONDARY:
        return 'bg-white text-neutral-900';
      case BtnVariant.GHOST:
        return 'bg-transparent text-current border border-current';
      case BtnVariant.ANIMATED:
        return 'bg-white text-neutral-900';
      default:
        return 'bg-black ring-gray-800 ring-1 text-white';
    }
  };

  return (
    <motion.button
      whileHover={whileHover}
      whileTap={whileTap}
      animate={animate}
      transition={transition}
      onHoverStart={() => variant === BtnVariant.ANIMATED && setShowPaw(true)}
      onHoverEnd={() => variant === BtnVariant.ANIMATED && setShowPaw(false)}
      style={{
        padding: '0.50rem 1rem',
        cursor: 'pointer',
        ...style,
      }}
      className={`
        inline-block rounded-full font-medium transition-all
        hover:opacity-90
        ${getVariantClasses()}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...rest}
    >
      <span className="inline-flex items-center gap-2">
        {children}
        {variant === BtnVariant.ANIMATED && showPaw && (
          <motion.img
            src="/videos/paw.png"
            alt="paw"
            initial={{ opacity: 0, scale: 0.5, x: -5 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-5 h-5 inline-block"
          />
        )}
      </span>
    </motion.button>
  );
};

export default Button;
