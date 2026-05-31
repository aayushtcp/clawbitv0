'use client';

import CustomHeading from '@shared-components/CustomHeading';
import Intro from '@shared-components/Intro';
import { HeadingVariant } from '@shared-constants/enum';
import ContactList from '@contact-components/ui/ContactList';
import ContactSocials from '@contact-components/ui/ContactSocials';
import ImageCards from '@contact-components/ui/ImageCards';
import { contactPageContent } from '@contact-constants/contact-data';
import useFadeUp from '@shared-hooks/animations/useFadeUp';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const fadeUp = useFadeUp(0.2);
  const socialFadeUp = useFadeUp(0.3);

  return (
    <div className="px-7">
      <Intro
        heading={
          <CustomHeading
            variant={HeadingVariant.VERTICAL}
            title={contactPageContent.intro.title}
            description={contactPageContent.intro.description}
            titleClassName="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-bold tracking-tighter leading-tight text-black"
            descriptionClassName="text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-xl text-gray-600"
          />
        }
      />

      <ContactList />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CustomHeading
          variant={HeadingVariant.HORIZONTAL}
          title={contactPageContent.social.title}
          description={contactPageContent.social.description}
          titleClassName="text-md sm:text-lg md:text-xl lg:text-3xl font-semibold tracking-tight leading-tight text-black w-full xl:w-[65%]"
          descriptionClassName="text-base sm:text-lg mt-4 sm:mt-6 max-w-xl text-gray-600"
          containerClassName="pt-20"
        />
      </motion.div>

      <motion.div
        variants={socialFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactSocials />
      </motion.div>
      <ImageCards />
    </div>
  );
};

export default ContactPage;
