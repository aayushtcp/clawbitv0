'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ContactCardProps } from '@contact-types/conponents';

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  phone,
  email,
  imageSrc,
  message = 'For a project estimate contact',
  whatsappLink = '#',
  linkedinLink = '#',
  countryFlag = '🇳🇵',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <div className="group h-100 bg-white rounded-2xl px-12 min-h-fit pt-12 pb-9 flex flex-col">
      {/* Avatar */}
      <div className="mb-5">
        <Image
          unoptimized
          src={imageSrc}
          alt={name}
          width={90}
          height={90}
          className="rounded-full object-cover w-21 h-21"
        />
      </div>

      {/* Label + Name */}
      <p className="text-[2.1rem] font-semibold mb-0.5 tracking-tighter">
        {message} <br />
        contact {name}
      </p>

      {/* Footer row */}
      <div className="flex items-end justify-between gap-3 mt-auto">
        {/* Contact info */}
        <div className="flex flex-col gap-2">
          {/* Phone */}
          <div className="flex items-center gap-2 text-[15px] tracking-tight">
            <span className="text-lg leading-none">{countryFlag}</span>
            <span className="font-medium">{phone}</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-1.5 text-[15px] tracking-tight">
            <a
              href={`mailto:${email}`}
              className="cursor-pointer hover:underline"
              aria-label={`Send email to ${name}`}
            >
              {email}
            </a>
            <button
              onClick={handleCopy}
              aria-label="Copy email"
              title={copied ? 'Copied!' : 'Copy email'}
              className="inline-flex items-center justify-center p-1 rounded transition-all duration-150 cursor-pointer"
            >
              <Image
                unoptimized
                src={copied ? '/images/contact/icons/tick.svg' : '/images/contact/icons/copy.svg'}
                alt={copied ? 'Copied' : 'Copy'}
                width={18}
                height={18}
                className="transition-all duration-150"
              />
            </button>
          </div>
        </div>

        {/* Messenger icons */}
        <div className="flex items-start gap-2.5">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex items-center justify-center hover:scale-110 transition-all duration-150"
          >
            <Image
              unoptimized
              src="/images/contact/icons/whatsapp.svg"
              alt="WhatsApp"
              width={24}
              height={24}
            />
          </a>

          <a
            href={linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center hover:scale-110 transition-all duration-150"
          >
            <Image
              unoptimized
              src="/images/contact/icons/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
