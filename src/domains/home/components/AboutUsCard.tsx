import Image from 'next/image';
import { AboutUsCardProps } from '@domains/home/@types/index';

const AboutUsCard = ({ number, title, activeDot, imgSrc }: AboutUsCardProps) => {
  const dots = [1, 2, 3, 4];

  return (
    <div className=" bg-white rounded-3xl h-34 p-6 pb-8 flex flex-col justify-between ">
      <div className="flex justify-between items-center">
        <div className="flex  justify-start">
          {dots.map((dot) => (
            <div
              key={dot}
              className={`h-2 w-2 rounded-full ${dot <= activeDot ? 'bg-[#010101]' : 'bg-gray-200'}`}
            />
          ))}
        </div>
        <span className="text-[10px] font-semibold text-gray-400">{number}</span>
      </div>

      <div className="flex justify-start items-center gap-4">
        <Image
          unoptimized
          src={imgSrc}
          alt={title}
          width={500}
          height={500}
          className="w-6 h-6  object-contain"
        />
        <span className="text-xl">{title}</span>
      </div>
    </div>
  );
};

export default AboutUsCard;
