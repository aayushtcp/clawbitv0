'use client';

import Image from 'next/image';
import { TestimonialCardProps, TestimonialIcon } from '@testimonial-types/components';
import { MessagePosition } from '@testimonial-constants/enum';
import { motion } from 'framer-motion';
import useFadeUp from '@shared-hooks/animations/useFadeUp';

// Star Rating--
function StarRating({ rating, numColor = 'text-gray-700' }: { rating: number; numColor?: string }) {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;
  const totalStars = 5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }).map((_, i) => {
        if (i < fullStars) {
          // Full gold star
          return (
            <Image
              unoptimized
              key={i}
              src="/images/testimonials/goldstar.svg"
              alt="star"
              width={10}
              height={10}
              className="w-3 h-3"
            />
          );
        } else if (i === fullStars && partial > 0) {
          // Partial star
          return (
            <Image
              unoptimized
              key={i}
              src="/images/testimonials/star.svg"
              alt="empty star"
              width={10}
              height={10}
              className="w-3 h-3"
            />
          );
        } else {
          // Empty star
          return (
            <Image
              unoptimized
              key={i}
              src="/images/testimonials/star.svg"
              alt="empty star"
              width={10}
              height={10}
              className="w-3 h-3"
            />
          );
        }
      })}
      <span className={`text-sm font-semibold text-${numColor} ml-1`}>
        {rating % 1 === 0 ? rating : rating.toFixed(1)}
      </span>
    </div>
  );
}

// Icon Row --
function IconRow({
  icons,
  author,
  position,
  dark = false,
}: {
  icons: TestimonialIcon[];
  author: string;
  position: string;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 pb-4">
      {/* Stacked icon bubbles */}
      <div className="flex items-center">
        {icons.slice(0, 2).map((icon, i, arr) => (
          <div
            key={i}
            className={`w-11 h-11 rounded-full border-2 overflow-hidden flex items-center justify-center bg-white ${
              i > 0 ? '-ml-2' : ''
            } ${dark ? 'border-white/30' : 'border-white'}`}
            style={{ zIndex: arr.length - i }}
          >
            <Image
              unoptimized
              src={icon.src}
              alt={icon.alt}
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Author info */}
      <div>
        <p
          className={`text-md font-semibold leading-tight ${dark ? 'text-white' : 'text-gray-900'}`}
        >
          {author}
        </p>
        <p className={`text-xs leading-tight ${dark ? 'text-white/70' : 'text-gray-500'}`}>
          {position}
        </p>
      </div>
    </div>
  );
}

// Card with Image (spans 2 columns)--
function TestimonialCardWithImage({
  star,
  message,
  icons,
  image,
  author,
  position,
  index = 0,
}: TestimonialCardProps & { index?: number }) {
  const fadeUp = useFadeUp(index * 0.02);

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="col-span-1 sm:col-span-2 relative rounded-3xl overflow-hidden min-h-120 group"
    >
      <Image
        unoptimized
        src={image!}
        alt={author}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex flex-col justify-end py-6 px-8 gap-3">
        <StarRating rating={star} numColor="white" />
        <p className="text-white text-md font-semibold leading-snug max-w-lg drop-shadow">
          {message}
        </p>
        <IconRow icons={icons} author={author} position={position} dark />
      </div>
    </motion.div>
  );
}

// Regular Card --
function TestimonialCardRegular({
  star,
  message,
  icons,
  author,
  position,
  messagePosition = MessagePosition.TOP,
  index = 0,
}: TestimonialCardProps & { index?: number }) {
  const fadeUp = useFadeUp(index * 0.02);
  const isTop = messagePosition === MessagePosition.TOP;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="col-span-1 bg-white rounded-3xl border border-gray-100 p-5 flex flex-col justify-between gap-4 min-h-120"
    >
      {isTop ? (
        <>
          <div className="flex flex-col gap-2 px-3">
            <StarRating rating={star} />
            <p className="text-lg font-semibold">{message}</p>
          </div>
          <IconRow icons={icons} author={author} position={position} />
        </>
      ) : (
        <>
          <IconRow icons={icons} author={author} position={position} />
          <div className="flex flex-col gap-2 px-3">
            <StarRating rating={star} />
            <p className="text-lg font-semibold">{message}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}

// Main Export

export function TestimonialCard(props: TestimonialCardProps & { index?: number }) {
  if (props.image) {
    return <TestimonialCardWithImage {...props} />;
  }
  return <TestimonialCardRegular {...props} />;
}

// Grid wrapper (optional convenience export)

export function TestimonialsGrid({ testimonials }: { testimonials: TestimonialCardProps[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 auto-rows-auto">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} {...t} index={i} />
      ))}
    </div>
  );
}
