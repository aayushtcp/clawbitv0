'use client';
import { motion } from 'framer-motion';
import { COMPANY_INFO } from '@company-constants/company-info';
import CustomHeading from '@shared-components/CustomHeading';
import useFadeUp from '@shared-hooks/animations/useFadeUp';
import useMarquee from '@shared-hooks/animations/useMarquee';

const ApproachInfo = () => {
  const fadeUp = useFadeUp(0.3);
  const marquee = useMarquee(10);

  return (
    <div>
      {/* Fade Up Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CustomHeading
          variant={COMPANY_INFO.headingVariants.horizontal}
          title={COMPANY_INFO.approach.title}
          description={COMPANY_INFO.approach.description}
          titleClassName="text-md sm:text-lg md:text-xl lg:text-3xl font-semibold tracking-tight leading-tight text-black w-full xl:w-[75%] xl:pl-20"
          descriptionClassName="text-xs sm:text-sm leading-tight max-w-xl text-gray-600"
          containerClassName="pt-20"
        />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-10 px-4 sm:px-6 md:px-12"
      >
        <p className="text-md text-gray-500 md:ml-[22%] xl:pl-20">
          {COMPANY_INFO.approach.supportingParagraph}
        </p>
      </motion.div>

      {/* Marquee Section */}
      <div className="overflow-hidden whitespace-nowrap py-10 border-t border-gray-200">
        <motion.div
          className="flex gap-20 text-4xl font-semibold text-gray-300"
          animate={marquee.animate}
          transition={marquee.transition}
        >
          <span>CREATIVE</span>
          <span>STRATEGY</span>
          <span>DESIGN</span>
          <span>DEVELOPMENT</span>
          <span>CREATIVE</span>
          <span>STRATEGY</span>
          <span>DESIGN</span>
          <span>DEVELOPMENT</span>
        </motion.div>
      </div>
    </div>
  );
};

export default ApproachInfo;
