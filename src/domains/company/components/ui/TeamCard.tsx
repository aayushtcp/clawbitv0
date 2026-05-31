import React from 'react';
import Image from 'next/image';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  isIcon?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, isIcon = false }) => {
  return (
    <div className="bg-white rounded-3xl flex flex-col items-center justify-center py-8 px-6 gap-4">
      <Image
        unoptimized
        src={image}
        alt={name}
        width={100}
        height={100}
        className={
          isIcon
            ? 'w-16 h-16 rounded-2xl object-contain p-2 bg-[#f5f5f5]'
            : 'w-24 h-24 rounded-full object-cover'
        }
      />
      <div className="flex flex-col items-center gap-1">
        <span className="text-base font-bold text-[#010101]">{name}</span>
        <span className="text-sm text-gray-500 text-center">{role}</span>
      </div>
    </div>
  );
};

export default TeamCard;
