import Image from 'next/image';
import { AwardItem } from '@company-types/components';
import { AWARDS, AWARD_BADGE, AWARD_TITLE } from '@company-constants/award-intro';

// ─── Sub-components
function AwardBadge() {
  return (
    <div className="flex items-center gap-2">
      <Image
        unoptimized
        src={AWARD_BADGE.image}
        alt={AWARD_BADGE.title}
        width={48}
        height={48}
        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
      />
      <div className="leading-tight">
        <p className="text-base sm:text-xl font-bold tracking-widest uppercase text-gray-900">
          {AWARD_BADGE.title}
        </p>
        <p className="text-xs sm:text-md tracking-widest uppercase text-gray-400">
          {AWARD_BADGE.subtitle}
        </p>
      </div>
    </div>
  );
}

function AwardColorCard({ award }: { award: AwardItem }) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`${award.bgColor ?? 'bg-[#c8d8e0]'} rounded-sm flex items-end p-4 sm:p-6`}
        style={{ height: award.height ?? 300 }}
      >
        <h3 className="font-black text-xl sm:text-2xl lg:text-3xl uppercase leading-tight text-gray-900 tracking-tight">
          {award.headline}
        </h3>
      </div>
      <div>
        <p className="text-sm sm:text-md font-semibold text-gray-900">{award.label}</p>
        <p className="text-xs sm:text-sm text-gray-400 tracking-wide">{award.meta}</p>
      </div>
    </div>
  );
}

function AwardImageCard({ award }: { award: AwardItem }) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className={`relative rounded-sm overflow-hidden w-full ${award.bgColor ?? 'bg-[#e8d0cc]'}`}
        style={{ height: award.height ?? 300 }}
      >
        <Image
          unoptimized
          src={award.image!}
          alt={award.headline}
          fill
          className="object-contain object-center -rotate-45"
        />
      </div>
      <div>
        <p className="text-sm sm:text-md font-semibold text-gray-900">{award.label}</p>
        <p className="text-xs sm:text-sm text-gray-400 tracking-wide">{award.meta}</p>
      </div>
    </div>
  );
}

// ─── Main Component
const desktopCols = AWARDS.map((a) => (a.image ? '1.5fr' : '1fr')).join(' ');

export function AwardIntro() {
  return (
    <section className="w-full px-6 sm:px-10 lg:px-16 py-12">
      {/* Header row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between mb-10">
        <AwardBadge />
        <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tighter text-gray-900 leading-none sm:text-right">
          {AWARD_TITLE}
        </h2>
      </div>

      {/* Awards grid — single col on mobile, 2 cols on sm, fractional on lg+ */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-(--award-cols)"
        style={{ '--award-cols': desktopCols } as React.CSSProperties}
      >
        {AWARDS.map((award, i) =>
          award.image ? (
            <AwardImageCard key={i} award={award} />
          ) : (
            <AwardColorCard key={i} award={award} />
          )
        )}
      </div>
    </section>
  );
}
