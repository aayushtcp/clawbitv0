import CustomHeading from '@/shared/components/CustomHeading';
import Intro from '@/shared/components/Intro';
import { HeadingVariant } from '@/shared/constants/enum';
import FeaturedProjects from '@home-components/FeaturedProjects';
import { PROJECT_PAGE_HEADING } from '@home-constants/index';

export default function ProjectPage() {
  return (
    <>
      <div data-theme="light" className="w-full">
        <Intro
          heading={
            <CustomHeading
              variant={HeadingVariant.VERTICAL}
              title={PROJECT_PAGE_HEADING.title}
              description={PROJECT_PAGE_HEADING.description}
              titleClassName="text-5xl sm:text-6xl md:text-7xl lg:text-[10rem] font-bold tracking-tighter leading-tight text-black"
              descriptionClassName="text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-xl text-gray-600"
            />
          }
        />
        <FeaturedProjects showHeading={false} />
      </div>
    </>
  );
}
