import React from 'react';
import Image from 'next/image';
import socials from '@contact-constants/contact-socials';

const ContactSocials: React.FC = () => {
  return (
    <div className="flex justify-center w-full py-16 md:px-8">
      <div className="flex justify-center flex-wrap gap-1 w-full ">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="group flex items-center gap-1 pl-1 pr-5 py-1 rounded-full transition-colors duration-150"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black transition-all duration-150 group-hover:scale-110">
              <Image
                unoptimized
                src={social.imageSrc}
                alt={social.name}
                width={22}
                height={22}
                className="h-5 w-5 object-contain"
              />
            </span>
            <span
              className={`text-[12px] xl:text-xl font-semibold whitespace-nowrap  hover:bg-[${social.hovColor}] px-4 py-3 rounded-full`}
            >
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactSocials;
