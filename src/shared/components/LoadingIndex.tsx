'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LOADER_FADE_MS = 300;
const MIN_DISPLAY_MS = 1500;

export default function LoadingIndex() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const startedAt = Date.now();

    const hideLoader = () => {
      const elapsed = Date.now() - startedAt;
      const waitTime = Math.max(0, MIN_DISPLAY_MS - elapsed);
      timeoutId = setTimeout(() => {
        setIsFading(true);
        timeoutId = setTimeout(() => setIsVisible(false), LOADER_FADE_MS);
      }, waitTime);
    };

    if (document.readyState === 'complete') {
      hideLoader();
      return () => {};
    }

    window.addEventListener('load', hideLoader, { once: true });
    return () => {
      window.removeEventListener('load', hideLoader);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 bg-[#f5f5f5] transition-opacity duration-300 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-busy
      aria-live="polite"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative h-80 w-80 will-change-transform"
          initial={{ y: 260, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            duration: 2.8, // ← slower (was 1.5)
            ease: [0.16, 1, 0.3, 1], // ← smoother expo-out curve
            opacity: { duration: 1.2 }, // ← fade-in independent, not too fast
            scale: { duration: 2.8, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          <Image
            unoptimized
            src="/images/logo-black.svg"
            alt="Clawbit"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
