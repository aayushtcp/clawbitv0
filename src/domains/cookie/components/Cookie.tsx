'use client';

import { motion } from 'framer-motion';
import CustomHeading from '@shared-components/CustomHeading';
import Intro from '@shared-components/Intro';
import { HeadingVariant } from '@shared-constants/enum';
import useFadeUp from '@shared-hooks/animations/useFadeUp';
import { cookiePolicyContent } from '@cookie-constants/index';

const Cookie = () => {
  const fadeUp = useFadeUp(0.2);

  return (
    <div className="px-7">
      <Intro
        heading={
          <CustomHeading
            variant={HeadingVariant.VERTICAL}
            title={cookiePolicyContent.title}
            titleClassName="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-bold tracking-tighter leading-tight text-black"
            descriptionClassName="text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-xl text-gray-600"
          />
        }
      />

      <div className="mx-auto grid max-w-6xl gap-10 py-20 md:grid-cols-[220px_1fr] lg:gap-16">
        <div className="flex flex-col">
          <p className="text-md leading-relaxed text-gray-600 md:h-max">
            {cookiePolicyContent.lastUpdated}
          </p>
          <p className="text-md font-bold leading-relaxed md:h-max">{cookiePolicyContent.on}</p>
        </div>

        <div className="flex flex-col gap-12">
          {cookiePolicyContent.sections.map((section) => (
            <motion.section
              key={section.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-5"
            >
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-6xl">
                {section.title}
              </h2>

              <p className="whitespace-pre-line text-base leading-relaxed text-[#6b6b6b] sm:text-lg">
                {section.content.trim()}
              </p>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cookie;
