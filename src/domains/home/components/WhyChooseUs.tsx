'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CustomHeading from '@shared-components/CustomHeading';
import Counter from '@shared-components/Counter';
import { HeadingVariant } from '@shared-constants/enum';
import { SocialProofBar } from '@/domains/company/components/ui/SocialProofBar';
import { HOME_SECTION_HEADING_STYLE, WHY_CHOOSE_US_CONSTANTS } from '@home-constants/index';

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <section className="w-full px-5 mt-16 md:mt-40 md:px-10">
      {/* Heading */}
      <CustomHeading
        variant={HeadingVariant.HORIZONTAL}
        description={WHY_CHOOSE_US_CONSTANTS.heading.description}
        title={WHY_CHOOSE_US_CONSTANTS.heading.title}
        spanText={WHY_CHOOSE_US_CONSTANTS.heading.spanText}
        titleClassName={HOME_SECTION_HEADING_STYLE.titleClassName}
        spanClassName={HOME_SECTION_HEADING_STYLE.spanClassName}
        descriptionClassName={HOME_SECTION_HEADING_STYLE.descriptionClassName}
        align="start"
      />

      {/* Video and Stats Section */}
      <div className="flex flex-col-reverse justify-between lg:flex-row gap-2 mt-8 md:mt-16 w-full items-stretch">
        {/* Left - Video */}
        <div className="lg:w-[25%] mt-8 lg:min-h-[75vh]">
          <video className="w-full h-full rounded-3xl object-cover" autoPlay muted loop playsInline>
            <source
              src={WHY_CHOOSE_US_CONSTANTS.video.src}
              type={WHY_CHOOSE_US_CONSTANTS.video.type}
            />
          </video>
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-[50%] flex flex-col justify-between">
          {/* Top text */}
          <h3 className="text-2xl sm:text-2xl md:text-xl lg:text-2xl mb-8 md:mb-auto text-[#010101] md:w-[85%] font-medium leading-tight">
            {WHY_CHOOSE_US_CONSTANTS.topText}
          </h3>

          {/* Bottom stats */}
          <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:mt-16">
            {/* 600+ Projects */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 flex flex-col justify-between md:min-h-105"
            >
              <div className="text-5xl md:text-5xl font-bold">
                <Counter
                  value={WHY_CHOOSE_US_CONSTANTS.stats.projects.value}
                  suffix={WHY_CHOOSE_US_CONSTANTS.stats.projects.suffix}
                  triggered={isInView}
                />
              </div>
              <div className="text-xl font-medium mt-4 md:whitespace-pre-line  flex w-full">
                {WHY_CHOOSE_US_CONSTANTS.stats.projects.label}
              </div>
              <p className="text-gray-500 text-left font-medium mt-2 md:mt-auto">
                {WHY_CHOOSE_US_CONSTANTS.stats.projects.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-8 flex flex-col justify-between md:min-h-105"
            >
              <div>
                <div className="text-5xl md:text-5xl font-bold">
                  <Counter
                    value={WHY_CHOOSE_US_CONSTANTS.stats.upwork.value}
                    suffix={WHY_CHOOSE_US_CONSTANTS.stats.upwork.suffix}
                    triggered={isInView}
                  />
                </div>
                <div className="text-xl font-medium mt-4">
                  {WHY_CHOOSE_US_CONSTANTS.stats.upwork.label}
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 mt-8 md:mt-auto">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: WHY_CHOOSE_US_CONSTANTS.stats.upwork.badge.bgColor }}
                >
                  {WHY_CHOOSE_US_CONSTANTS.stats.upwork.badge.text}
                </div>
                <SocialProofBar
                  icons={WHY_CHOOSE_US_CONSTANTS.stats.upwork.avatars}
                  totalCount={WHY_CHOOSE_US_CONSTANTS.stats.upwork.totalCount}
                  visibleAvatars={3}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
