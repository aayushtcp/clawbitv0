'use client';
import React from 'react';
import { IntroProps } from '@shared-types/components';

const Intro: React.FC<IntroProps> = ({
  backgroundImg,
  heading,
  containerClassName = '',
  backgroundColor = '#f5f5f5',
  dataTheme = 'light',
}) => {
  return (
    <section
      data-theme={dataTheme}
      className="min-h-[85vh] w-full flex items-center justify-center bg-[#f5f5f5]"
    >
      {/* CENTERED INTRO BOX */}
      <div
        className={`relative w-[99%] h-[82vh] overflow-hidden rounded-2xl flex items-end justify-start px-2 ${containerClassName}`}
        style={{
          backgroundColor: backgroundImg ? 'transparent' : backgroundColor,
          backgroundImage: backgroundImg ? `url(${backgroundImg})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* overlay for better text readability when using background image */}
        {backgroundImg && <div className="absolute inset-0 bg-black/10 pointer-events-none" />}

        {/* Content container */}
        <div className="relative z-10 w-full max-w-7xl">{heading}</div>
      </div>
    </section>
  );
};

export default Intro;
