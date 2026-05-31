import TeamCard from '@company-components/ui/TeamCard';
import CustomHeading from '@shared-components/CustomHeading';
import { HeadingVariant } from '@shared-constants/enum';
import { HOME_SECTION_HEADING_STYLE, SERVICES_CONSTANTS } from '@home-constants/index';

const Services = () => {
  return (
    <div className="px-5 mt-8 md:mt-24 md:px-10">
      <CustomHeading
        variant={HeadingVariant.HORIZONTAL}
        description={SERVICES_CONSTANTS.heading.description}
        title={SERVICES_CONSTANTS.heading.title}
        titleClassName={HOME_SECTION_HEADING_STYLE.titleClassName}
        descriptionClassName={HOME_SECTION_HEADING_STYLE.descriptionClassName}
        align="start"
      />

      <div className="mt-16 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-1">
        {SERVICES_CONSTANTS.cards.map((service) => (
          <TeamCard
            key={service.id}
            name={service.title}
            role={service.description}
            image={service.logo.src}
            isIcon
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
