import { FAQ_CONSTANTS } from '@home-constants/index';
import FaqRightAccordion from '@home-components/FaqRightAccordion';

const Faq = () => {
  return (
    <section className="w-full mb-16 md:mb-32 px-5 md:px-10">
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14 items-start">
        <div className="xl:pr-8">
          <h2 className="text-8xl mt-4 md:mt-0 sm:text-[6.5rem] md:text-7xl lg:text-[9rem] font-semibold leading-[0.9] text-[#010101]">
            {FAQ_CONSTANTS.heading}
          </h2>
          <p className="mt-8 text-md lg:text-sm font-semibold leading-snug text-[#6b6b6b] max-w-sm">
            {FAQ_CONSTANTS.description}
          </p>
        </div>

        <FaqRightAccordion
          items={FAQ_CONSTANTS.items}
          defaultOpenIndex={FAQ_CONSTANTS.defaultOpenIndex}
        />
      </div>
    </section>
  );
};

export default Faq;
