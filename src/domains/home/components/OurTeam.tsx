import SliderButton from '@/shared/components/CustomBadge';
import CoreSquad from '@home-components/CoreSquad';
import { OUR_TEAM_CONSTANTS } from '@home-constants/index';

const OurTeam = () => {
  const highlightSuffix = OUR_TEAM_CONSTANTS.message.highlight
    .replace(OUR_TEAM_CONSTANTS.message.highlightPrefix, '')
    .trimStart();

  return (
    <section className="w-full mb-16 md:mb-32 mt-16 px-5 md:px-10">
      <div className="rounded-4xl bg-white h-auto xl:h-[80vh]">
        <div className="grid grid-cols-1 xl:grid-cols-[1.7fr_0.9fr] gap-8 h-full lg:gap-12">
          <div className="flex flex-col justify-between h-full md:p-20 p-8">
            <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold leading-[0.95] text-[#010101]">
              {OUR_TEAM_CONSTANTS.heading.line1}
              <br />
              <span className="text-[#6b6b6b]">{OUR_TEAM_CONSTANTS.heading.line2}</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-12 lg:mt-24">
              <div className="max-w-sm space-y-4">
                <h3 className="text-md font-semibold text-[#010101]">
                  {OUR_TEAM_CONSTANTS.mission.title}
                </h3>
                <p className="text-md text-[#6b6b6b] leading-tight">
                  {OUR_TEAM_CONSTANTS.mission.description}
                </p>

                <SliderButton
                  label={OUR_TEAM_CONSTANTS.mission.ctaLabel}
                  href={OUR_TEAM_CONSTANTS.mission.ctaHref}
                  containerClassName="w-auto! px-0! mt-6! mb-0! flex items-center"
                  textWrapperClassName="relative h-3 w-20 overflow-hidden"
                />
              </div>

              <p className="text-2xl md:text-xl  font-medium leading-[1.4] text-[#6b6b6b] max-w-136">
                <span className="font-semibold">
                  <span className="bg-linear-to-r from-[#7b7b7b] to-[#4f4f4f] bg-clip-text text-transparent">
                    {OUR_TEAM_CONSTANTS.message.highlightPrefix}
                  </span>{' '}
                  <span className="text-[#010101]">{highlightSuffix}</span>
                </span>{' '}
                {OUR_TEAM_CONSTANTS.message.body}
              </p>
            </div>
          </div>

          <CoreSquad members={OUR_TEAM_CONSTANTS.members} />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
