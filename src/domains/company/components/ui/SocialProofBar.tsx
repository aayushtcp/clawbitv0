import Image from 'next/image';
import { SocialProofBarProps } from '@company-types/components';

function StarRatingInline({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Image
          unoptimized
          key={i}
          src="/images/testimonials/goldstar.svg"
          alt="star"
          width={14}
          height={14}
          className="w-3 h-3"
        />
      ))}
    </div>
  );
}

export function SocialProofBar({
  icons,
  totalCount,
  visibleAvatars = 3,
  trustText,
  trustTextHighlight,
  rating,
  className = '',
}: SocialProofBarProps) {
  const shown = icons.slice(0, visibleAvatars);
  const overflow = totalCount ? totalCount - visibleAvatars : 0;

  // Split trustText around the highlight substring for bold rendering
  const renderTrustText = () => {
    if (!trustText) return null;
    if (!trustTextHighlight) return <span>{trustText}</span>;
    const parts = trustText.split(trustTextHighlight);
    return (
      <>
        {parts[0]}
        <span className="font-semibold text-gray-900">{trustTextHighlight}</span>
        {parts[1]}
      </>
    );
  };

  const hasRightContent = rating !== undefined || trustText;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {/* Stacked avatars + overflow badge */}
      <div className="flex items-center">
        {shown.map((icon, i) => (
          <div
            key={i}
            className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200 flex items-center justify-center"
            style={{ marginLeft: i > 0 ? '-10px' : 0, zIndex: shown.length + i }}
          >
            <Image
              unoptimized
              src={icon.src}
              alt={icon.alt}
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Count badge */}
        {overflow > 0 && (
          <div
            className="w-10 h-10 rounded-full border-2 border-white bg-gray-800 flex items-center justify-center text-white text-xs font-semibold"
            style={{ marginLeft: '-10px', zIndex: shown.length + 10 }}
          >
            <span className="ml-1">{overflow}+</span>
          </div>
        )}
      </div>

      {/* Right content: divider + stars + trust text (only if provided) */}
      {hasRightContent && (
        <>
          {/* Divider */}
          <div className="w-px h-8 bg-gray-200 hidden sm:block" />

          {/* Right: optional stars + trust text */}
          <div className="flex flex-col gap-0.5">
            {rating !== undefined && <StarRatingInline rating={rating} />}
            {trustText && <p className="text-sm text-gray-500 leading-snug">{renderTrustText()}</p>}
          </div>
        </>
      )}
    </div>
  );
}
