import CustomHeading from '@shared-components/CustomHeading';
import { HeadingVariant } from '@shared-constants/enum';
import {
  FEATURED_PROJECTS_HEADING,
  HOME_SECTION_HEADING_STYLE,
  PROJECTS,
} from '@home-constants/index';
import CustomCard from '@shared-components/CustomCard';

interface FeaturedProjectsProps {
  showHeading?: boolean;
}

const FeaturedProjects = ({ showHeading = true }: FeaturedProjectsProps) => {
  return (
    <section className="w-full mb-8 md:mt-30 px-5 md:px-10 md:mb-24">
      {showHeading ? (
        <CustomHeading
          variant={HeadingVariant.HORIZONTAL}
          title={FEATURED_PROJECTS_HEADING.title}
          description={FEATURED_PROJECTS_HEADING.description}
          titleClassName={HOME_SECTION_HEADING_STYLE.titleClassName}
          descriptionClassName={HOME_SECTION_HEADING_STYLE.descriptionClassName}
          containerClassName="py-8"
          className="flex-col-reverse gap-6 md:gap-0"
        />
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:mt-16">
        {PROJECTS.map((project, index) => (
          <CustomCard
            key={index}
            title={project.title}
            year={project.year}
            img={project.image}
            hoverImg={project.hoverImage}
            containerHeight="26rem"
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
