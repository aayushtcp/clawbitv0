'use client';

import CustomHeading from '@shared-components/CustomHeading';
import Intro from '@shared-components/Intro';
import { COMPANY_INFO } from '@company-constants/company-info';
import { COMPANY_HERO_SOCIAL_PROOF } from '@home-constants/index';
import { SocialProofBar } from '@company-components/ui/SocialProofBar';
import useFadeUp from '@shared-hooks/animations/useFadeUp';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeUp = useFadeUp(0);

  return (
    <>
      <Intro
        heading={
          <CustomHeading
            variant={COMPANY_INFO.headingVariants.vertical}
            title={COMPANY_INFO.heading}
            titleClassName="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-bold tracking-tighter leading-tight text-black"
          />
        }
      />
      <CustomHeading
        variant={COMPANY_INFO.headingVariants.horizontal}
        title={COMPANY_INFO.about.title}
        description={COMPANY_INFO.about.description}
        details={COMPANY_INFO.about.details}
        titleClassName="text-md sm:text-lg md:text-xl lg:text-3xl font-semibold tracking-tight leading-tight text-black w-full xl:w-[80%]"
        descriptionClassName="text-base sm:text-lg max-w-xl text-gray-600"
        containerClassName="pt-20"
      />
      <motion.div
        className="md:ml-[18%] py-8 xl:pl-20"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SocialProofBar
          icons={[
            { src: '/images/testimonials/companies/upwork.svg', alt: 'Client 1' },
            { src: '/images/testimonials/companies/flag-nepal.svg', alt: 'Client 2' },
            { src: '/images/testimonials/companies/upwork.svg', alt: 'Client 3' },
          ]}
          totalCount={21}
          visibleAvatars={3}
          rating={5}
          trustText={COMPANY_HERO_SOCIAL_PROOF.trustText}
          trustTextHighlight={COMPANY_HERO_SOCIAL_PROOF.trustTextHighlight}
        />
      </motion.div>
    </>
  );
};

export default Hero;
