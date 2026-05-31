'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CustomCardProps } from '@shared-types/components';

const CustomCard: React.FC<CustomCardProps> = ({
  img,
  hoverImg,
  title,
  year,
  url,
  containerHeight,
  containerWidth,
  imageFit = 'cover',
  className = '',
  imageContainerClassName = '',
  imageClassName = '',
  showBg = true,
}) => {
  const [hovered, setHovered] = useState(false);
  const objectFitClass = imageFit === 'contain' ? 'object-contain' : 'object-cover';

  const content = (
    <div
      className={`group flex flex-col overflow-hidden w-full ${showBg ? 'bg-white' : ''} cursor-pointer rounded-2xl ${className}`}
    >
      {/* Header — title / year above image */}
      {(title || year) && (
        <div className="flex items-baseline gap-2 p-4 px-8">
          {title && (
            <span className="text-lg font-semibold text-[#010101] leading-tight">{title}</span>
          )}
          {title && year && <span className="text-sm ml-2 text-[#010101] font-normal">/</span>}
          {year && <span className="text-[12px] font-semibold text-gray-600 ">{year}</span>}
        </div>
      )}

      {/* Image */}
      <div
        className={`relative overflow-hidden ${imageContainerClassName}`}
        style={{
          width: containerWidth ?? '100%',
          height: containerHeight ?? 'auto',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Preload main and hover images to avoid flicker on hover */}
        {/* This runs on the client only (component is 'use client') */}
        <Image
          unoptimized
          src={img}
          alt={title ?? 'card image'}
          width={800}
          height={600}
          className={`w-full h-full ${objectFitClass} transition-opacity duration-500 delay-150 ${imageClassName} ${
            hoverImg && hovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        {hoverImg && (
          <Image
            unoptimized
            src={hoverImg}
            alt={title ? `${title} hover` : 'card hover image'}
            width={800}
            height={600}
            className={`absolute inset-0 w-full h-full ${objectFitClass} transition-opacity duration-500 delay-150 ${imageClassName} ${
              hovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}
      </div>
    </div>
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preload the main image
    if (img) {
      const i = new window.Image();
      i.src = img as string;
    }

    // Preload the hover image to ensure smooth transition
    if (hoverImg) {
      const h = new window.Image();
      h.src = hoverImg as string;
    }
  }, [img, hoverImg]);

  if (url) {
    return (
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-2xl"
      >
        {content}
      </Link>
    );
  }

  return content;
};

export default CustomCard;
