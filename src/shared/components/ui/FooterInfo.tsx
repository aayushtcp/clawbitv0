'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FooterInfo: React.FC = () => {
  const separatorRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(separatorRef, { once: true, margin: '-50px' });

  return (
    <div className="text-white">
      {/* Main Heading */}
      <h1 className="text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] font-bold leading-none mb-16">
        Bother
        <br />
        Us
      </h1>

      {/* Subheading */}
      <p className="text-2xl md:text-3xl lg:text-4xl mb-20 max-w-3xl leading-snug">
        <span className="text-white">Have an idea in mind </span>
        <span className="text-gray-500">— website, app, or rebrand? Let's make it real.</span>
      </p>

      {/* Separator Line */}
      <div ref={separatorRef} className="relative mb-16 max-w-4xl overflow-hidden">
        {/* Base gray line */}
        <div className="border-t border-gray-800 w-full" />

        {/* Animated flash */}
        <motion.div
          className="absolute -top-px left-0 h-px"
          style={{
            width: '25%',
            background: '#62b1f3',
            boxShadow: '0 0 8px 3px #62b1f3, 0 0 20px 8px #62b1f3',
          }}
          animate={
            isInView
              ? {
                  x: ['-100%', '0%', '233%', '340%'],
                  opacity: [0, 1, 1, 0],
                }
              : {
                  x: '-100%',
                  opacity: 0,
                }
          }
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            delay: 0.2,
          }}
        />
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl">
        {/* Quick Response */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">Quick response.</h3>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            We'll reach out within 24 hours to discuss your goals and expectations.
          </p>
        </div>

        {/* Clear Next Steps */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-full h-full"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-semibold">Clear next steps.</h3>
          </div>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            After the consultation, we'll provide you with a detailed plan and timeline.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
