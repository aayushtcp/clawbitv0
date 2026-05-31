import CustomHeading from '@shared-components/CustomHeading';
import Intro from '@shared-components/Intro';
import { HeadingVariant } from '@shared-constants/enum';

const Hero = () => {
  return (
    <Intro
      heading={
        <CustomHeading
          variant={HeadingVariant.VERTICAL}
          title="Testimonials"
          description="We can't wait to work with you!\nGet inspired by the success stories from our most recent projects."
          titleClassName="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-bold tracking-tighter leading-tight text-black"
          descriptionClassName="text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-xl text-gray-600"
        />
      }
    />
  );
};

export default Hero;
