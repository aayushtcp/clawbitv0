'use client';

import React, { useState } from 'react';
import { HERO_CONSTANTS } from '@home-constants/index';
import { useScrollAnimation } from '@shared-hooks/animations/useScrollAnimation';
import Image from 'next/image';

const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Reusable scroll animation hook
  const { scrollPadding } = useScrollAnimation({
    startScroll: 20,
    scrollRange: 380,
  });

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <section className="min-h-screen mb-10 w-full flex items-center justify-center bg-white">
      {/* CENTERED HERO BOX */}
      <div
        className="relative overflow-hidden rounded-3xl transition-all duration-500 ease-out"
        style={{
          width: `${99.2 - scrollPadding * 3}%`,
          height: `${98 - scrollPadding * 4}vh`,
        }}
      >
        {/* Background Video or Fallback */}
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onError={handleVideoError}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={HERO_CONSTANTS.video.primary} type="video/mp4" />
          </video>
        ) : !imageError ? (
          <Image
            unoptimized
            src={HERO_CONSTANTS.video.fallbackImage}
            alt="Hero background"
            onError={handleImageError}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div
            className="absolute inset-0 w-full h-full"
            style={{ backgroundColor: HERO_CONSTANTS.video.fallbackColor }}
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#010101]/50" />

        {/* CONTENT - LEFT ALIGNED */}
        <div className="relative z-10 h-full flex flex-col justify-center text-white px-8 md:px-16 xl:px-20 pt-16 md:pt-14">
          <div className="max-w-4xl xl:max-w-5xl">
            {/* Top Meta Bar */}
            <div className="flex items-center gap-4 md:gap-6 lg:gap-7 mb-8 md:mb-10 text-[10px] md:text-[11px] uppercase tracking-widest text-white/40">
              <span>{HERO_CONSTANTS.meta.location}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{HERO_CONSTANTS.meta.since}</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>{HERO_CONSTANTS.meta.workStyle}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 md:space-y-2 mb-8 md:mb-10">
              <h1 className="text-7xl sm:text-8xl md:text-[6rem] lg:text-[6.75rem] xl:text-[7.5rem] font-black leading-[0.92] tracking-tight">
                {HERO_CONSTANTS.headline.line1}
                <br />
                {HERO_CONSTANTS.headline.line2}
              </h1>
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-14 md:w-16 lg:w-18 h-1 bg-white" />
                <p className="text-xl md:text-2xl lg:text-[1.7rem] font-light text-white/90">
                  {HERO_CONSTANTS.headline.tagline}
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-5 md:gap-6 lg:gap-8 max-w-xl lg:max-w-2xl mb-8 md:mb-10">
              {HERO_CONSTANTS.stats.map((stat) => (
                <div key={stat.id} className="border-l-2 border-white/30 pl-4">
                  <div className="text-3xl md:text-[2.5rem] font-bold mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-[11px] text-white/50 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Services Tags */}
            <div className="flex flex-wrap gap-2.5 md:gap-3 max-w-2xl xl:max-w-3xl">
              {HERO_CONSTANTS.services.map((service) => (
                <span
                  key={service.id}
                  className={
                    service.highlighted
                      ? 'px-3 py-1.5 md:px-3.5 md:py-2 bg-white text-[#010101] rounded-full text-[11px] font-semibold'
                      : 'px-3 py-1.5 md:px-3.5 md:py-2 border border-white/20 rounded-full text-[11px] backdrop-blur-sm'
                  }
                >
                  {service.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Side Label - Vertical */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-px h-16 bg-white/30" />
            <p className="text-white/40 text-xs uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
              {HERO_CONSTANTS.ui.scrollLabel}
            </p>
            <div className="w-px h-16 bg-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
