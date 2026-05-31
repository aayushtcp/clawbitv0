'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { COMPANY_INFO } from '@company-constants/company-info';

const CompanyVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Track scroll relative to the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  // Video zooms OUT as you scroll: starts big (1.4), shrinks to 1 at 60%
  const scale = useTransform(scrollYProgress, [0, 0.6], [1.4, 1]);

  // Start playing only after scrolling past 60% of the container
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      if (v >= 0.6 && !hasStarted) {
        setHasStarted(true);
        videoRef.current?.play().catch(() => {});
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, hasStarted]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted((prev) => !prev);
    }
  };

  return (
    <div className="w-full px-4 md:px-10 py-20">
      {/* Container is fully static — no animation here, just clips the video */}
      <div ref={containerRef} className="relative w-full overflow-hidden rounded-3xl">
        <motion.video
          ref={videoRef}
          src={COMPANY_INFO.video.src}
          muted={isMuted}
          playsInline
          loop
          style={{ scale }}
          className="w-full block object-cover"
        />

        {hasStarted && (
          <button
            onClick={toggleMute}
            className="absolute bottom-4 left-4 flex items-center justify-center w-10 h-10 rounded-full bg-white hover:scale-110 active:scale-95 transition-transform"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <img
              src={isMuted ? '/images/company/mute.svg' : '/images/company/sound.svg'}
              alt={isMuted ? 'Muted' : 'Sound on'}
              className="w-5 h-5 cursor-pointer"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default CompanyVideo;
