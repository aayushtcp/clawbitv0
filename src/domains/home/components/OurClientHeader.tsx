import CustomHeading from '@shared-components/CustomHeading';
import { HeadingVariant } from '@shared-constants/enum';
import { HEADING_CONSTANTS } from '@home-constants/index';

const Heading = () => {
  return (
    <CustomHeading
      variant={HeadingVariant.HORIZONTAL}
      description={HEADING_CONSTANTS.description}
      title={HEADING_CONSTANTS.title}
      titleClassName="text-sm sm:text-base text-gray-500 font-medium"
      descriptionClassName="text-sm font-medium text-[#010101]"
      className="flex flex-row gap-2 sm:flex-col"
    />
  );
};

export default Heading;
