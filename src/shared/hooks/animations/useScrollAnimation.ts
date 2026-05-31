import { useState, useEffect } from 'react';
import { ScrollAnimationConfig, ScrollAnimationReturn } from '@shared-types/types';

/**
 * Custom hook for scroll-based animations
 * @param config - Configuration object for the animation
 * @param config.startScroll - Scroll position (in pixels) where animation starts (default: 20)
 * @param config.scrollRange - Range (in pixels) over which animation completes (default: 380)
 * @param config.onProgress - Optional callback function that receives progress value (0-1)
 * @returns Object containing progress (0-1) and scrollPadding (0-1) values
 */
export const useScrollAnimation = ({
  startScroll = 20,
  scrollRange = 380,
  onProgress,
}: ScrollAnimationConfig = {}): ScrollAnimationReturn => {
  const [scrollPadding, setScrollPadding] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Start animation at specified scroll position
      if (scrollY >= startScroll) {
        const progress = Math.min((scrollY - startScroll) / scrollRange, 1);
        setScrollPadding(progress);

        // Call optional callback with progress
        if (onProgress) {
          onProgress(progress);
        }
      } else {
        setScrollPadding(0);
        if (onProgress) {
          onProgress(0);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [startScroll, scrollRange, onProgress]);

  return {
    progress: scrollPadding,
    scrollPadding,
  };
};
