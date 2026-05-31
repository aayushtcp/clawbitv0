import CustomHeading from '@/shared/components/CustomHeading';
import { HeadingVariant } from '@shared-constants/enum';
import { ABOUT_US_CONSTANTS, HOME_SECTION_HEADING_STYLE } from '@/domains/home/constants/index';
import AboutUsCard from '@/domains/home/components/AboutUsCard';

const AboutUs = () => {
  return (
    <>
      <div className="px-5 mt-16 md:mt-40 md:px-10 md:mb-20">
        <CustomHeading
          variant={HeadingVariant.HORIZONTAL}
          description={ABOUT_US_CONSTANTS.title}
          title={ABOUT_US_CONSTANTS.description}
          spanText={ABOUT_US_CONSTANTS.fadedDescription}
          titleClassName={HOME_SECTION_HEADING_STYLE.titleClassName}
          spanClassName={`block ${HOME_SECTION_HEADING_STYLE.spanClassName}`}
          descriptionClassName={HOME_SECTION_HEADING_STYLE.descriptionClassName}
          align="start"
        />
        <p className="text-md mt-4 md:mt-6 md:py-8 font-semibold text-justify text-gray-600 md:w-[78%] md:ml-auto">
          {ABOUT_US_CONSTANTS.supportingParagraph}
        </p>
      </div>

      <div className="w-full px-5 md:px-10 grid md:grid-cols-2 lg:grid-cols-4 gap-1 mb-1 mt-8">
        {ABOUT_US_CONSTANTS.cards.map((card) => (
          <AboutUsCard
            key={card.number}
            number={card.number}
            title={card.title}
            activeDot={card.activeDot}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
      <div className="px-5 md:px-10 h-1/2 pb-4 mt-4 rounded-2xl overflow-hidden">
        <video
          src={ABOUT_US_CONSTANTS.video.src}
          autoPlay
          loop
          muted
          className="w-full rounded-2xl h-full object-cover"
        ></video>
      </div>
    </>
  );
};

export default AboutUs;
