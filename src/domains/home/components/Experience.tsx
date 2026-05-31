import Image from 'next/image';
import CustomHeading from '@shared-components/CustomHeading';
import { HeadingVariant } from '@shared-constants/enum';
import { ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_CONSTANTS, HOME_SECTION_HEADING_STYLE } from '@home-constants/index';
import { ExperienceTestimonialCard } from '@home-types/index';

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: EXPERIENCE_CONSTANTS.rating.starCount }).map((_, index) => (
        <Image
          unoptimized
          key={index}
          src={EXPERIENCE_CONSTANTS.rating.iconSrc}
          alt={EXPERIENCE_CONSTANTS.rating.iconAlt}
          width={EXPERIENCE_CONSTANTS.rating.iconWidth}
          height={EXPERIENCE_CONSTANTS.rating.iconHeight}
          className={EXPERIENCE_CONSTANTS.rating.iconClassName}
        />
      ))}
    </div>
  );
}

function ProfileBlock({
  name,
  role,
  logoText,
  logoBg,
  avatarSrc,
  nameClassName,
}: Pick<
  ExperienceTestimonialCard,
  'name' | 'role' | 'logoText' | 'logoBg' | 'avatarSrc' | 'nameClassName'
>) {
  return (
    <div className="space-y-4  flex gap-4 md:flex-col md:gap-0">
      <div className="flex items-center">
        <div
          className="relative z-20 flex h-12 w-12 items-center justify-center rounded-full text-white font-semibold text-sm"
          style={{ backgroundColor: logoBg }}
        >
          {logoText}
        </div>
        <div className="relative z-10 -ml-5 h-12 w-12 overflow-hidden rounded-full ">
          <Image
            unoptimized
            src={avatarSrc}
            alt={name}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div>
        <p className={nameClassName}>{name}</p>
        <p className="mt-1 text-sm text-[#666666]">{role}</p>
      </div>
    </div>
  );
}

const Experience = () => {
  return (
    <section className="w-full md:mt-40 mt-8 px-5 md:px-10">
      <div className="w-full mb-8 md:mb-16">
        <CustomHeading
          variant={HeadingVariant.HORIZONTAL}
          title={EXPERIENCE_CONSTANTS.heading.title}
          description={EXPERIENCE_CONSTANTS.heading.description}
          titleClassName={HOME_SECTION_HEADING_STYLE.titleClassName}
          descriptionClassName={HOME_SECTION_HEADING_STYLE.descriptionClassName}
          align="start"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1">
        <div className="rounded-4xl bg-white p-7 lg:p-8 gap-10 md:min-h-123 flex flex-col justify-between">
          <p className="text-md leading-tight font-medium text-[#666666]">
            <span className="text-[#010101] text-md">
              {EXPERIENCE_CONSTANTS.overviewCard.headline}
            </span>
            <br />
            {EXPERIENCE_CONSTANTS.overviewCard.body}
          </p>

          <div className="space-y-5 flex items-start flex-col  md:block">
            <div className="flex gap-4">
              <div className="flex items-center">
                {EXPERIENCE_CONSTANTS.overviewCard.reviewers.map((avatar, index) => (
                  <div
                    key={`${avatar}-${index}`}
                    className={`relative h-10 w-10 rounded-full overflow-hidden border-2 border-[#ececec] ${
                      index > 0 ? '-ml-5' : ''
                    }`}
                    style={{ zIndex: index + 1 }}
                  >
                    <Image
                      unoptimized
                      src={avatar}
                      alt={`${EXPERIENCE_CONSTANTS.overviewCard.reviewerAltPrefix} ${index + 1}`}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
                <div className="relative z-20 -ml-5 h-10 w-10 rounded-full bg-[#010101] text-white flex items-center border-2 border-[#ececec]  justify-center text-sm font-semibold">
                  {EXPERIENCE_CONSTANTS.overviewCard.totalReviewers}
                </div>
              </div>

              <div className="space-y-2">
                <Stars />
                <p className="text-sm text-[#666666]">
                  <span className="text-[12px] font-semibold text-[#010101]">
                    {EXPERIENCE_CONSTANTS.overviewCard.reviewPlatform}
                  </span>{' '}
                  {EXPERIENCE_CONSTANTS.overviewCard.reviewCount}
                </p>
              </div>
            </div>

            <a
              href={EXPERIENCE_CONSTANTS.overviewCard.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[#010101] text-[12px] font-medium hover:opacity-75 md:mt-4  transition-opacity"
            >
              {EXPERIENCE_CONSTANTS.overviewCard.ctaLabel}{' '}
              <ArrowUpRight size={20} className="opacity-40" />
            </a>
          </div>
        </div>

        {/* next card */}
        {EXPERIENCE_CONSTANTS.testimonialCards.map((card) => (
          <div
            key={card.name}
            className="rounded-4xl bg-white p-8 lg:p-8 md:min-h-123 flex flex-col-reverse md:flex-col justify-between gap-8"
          >
            {card.messageFirst ? (
              <>
                <div className="space-y-4">
                  <Stars />
                  <p className={card.messageClassName}>{card.message}</p>
                </div>
              </>
            ) : (
              <ProfileBlock
                name={card.name}
                role={card.role}
                logoText={card.logoText}
                logoBg={card.logoBg}
                avatarSrc={card.avatarSrc}
                nameClassName={card.nameClassName}
              />
            )}

            {!card.messageFirst ? (
              <div className="space-y-4">
                <Stars />
                <p className={card.messageClassName}>{card.message}</p>
              </div>
            ) : (
              <ProfileBlock
                name={card.name}
                role={card.role}
                logoText={card.logoText}
                logoBg={card.logoBg}
                avatarSrc={card.avatarSrc}
                nameClassName={card.nameClassName}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
