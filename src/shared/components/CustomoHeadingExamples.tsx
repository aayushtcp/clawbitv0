import React from 'react';
import CustomHeading from '@shared-components/CustomHeading';
import { HeadingVariant } from '@shared-constants/enum';

const CustomHeadingExamples: React.FC = () => {
  return (
    <div className="p-8 flex flex-col gap-16">
      <CustomHeading
        variant={HeadingVariant.HORIZONTAL}
        title="Featured Projects"
        description="Unique solutions \n that generate leads"
        titleClassName="text-7xl font-bold leading-tight text-black"
        descriptionClassName="text-lg text-gray-600"
      />
      {/* About Us Example (Image 1) - Vertical */}
      <CustomHeading
        variant={HeadingVariant.HORIZONTAL}
        title="We design for results — "
        spanText="helping \n your business meet its goals."
        description="Why choose us"
        titleClassName="text-2xl xl:text-6xl font-bold text-black"
        spanClassName="text-2xl xl:text-6xl font-normal text-gray-500"
        descriptionClassName="text-md text-gray-600 leading-relaxed"
      />
      {/* FAQ Example (Image 2) - Vertical */}
      <CustomHeading
        variant={HeadingVariant.VERTICAL}
        title="Testimonials"
        description="We can't wait to work with you!\n
        Get inspired by the success stories from our most recent projects. Valentine Syumka"
        titleClassName="text-5xl xl:text-[10rem]  font-bold tracking-tighter leading-tight text-black"
        descriptionClassName="text-lg text-gray-600 leading-relaxed mt-6 max-w-xl"
      />
    </div>
  );
};

export default CustomHeadingExamples;
