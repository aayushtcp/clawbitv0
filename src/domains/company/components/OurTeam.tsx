import { COMPANY_INFO } from '@company-constants/company-info';
import CustomHeading from '@shared-components/CustomHeading';
import TeamCard from '@company-components/ui/TeamCard';

const OurTeam = () => {
  return (
    <>
      <CustomHeading
        variant={COMPANY_INFO.headingVariants.horizontal}
        title={COMPANY_INFO.teamIntro.title}
        description={COMPANY_INFO.teamIntro.description}
        titleClassName="text-md sm:text-lg md:text-xl lg:text-3xl font-semibold tracking-tight leading-tight text-black w-full xl:w-[75%] xl:pl-20"
        descriptionClassName="text-xs sm:text-sm leading-tight max-w-xl text-gray-600"
        containerClassName="pt-20"
      />
      <div className="px-4 md:px-10 py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {COMPANY_INFO.team.map((member) => (
          <TeamCard key={member.name} name={member.name} role={member.role} image={member.image} />
        ))}
      </div>
    </>
  );
};

export default OurTeam;
