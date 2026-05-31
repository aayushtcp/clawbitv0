'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaqRightAccordionProps } from '@home-types/index';

const FaqRightAccordion = ({ items, defaultOpenIndex = null }: FaqRightAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
  const [spinByIndex, setSpinByIndex] = useState<Record<number, number>>({});

  const handleToggle = (index: number) => {
    setSpinByIndex((prev) => ({
      ...prev,
      [index]: (prev[index] ?? 0) + 1,
    }));
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-1.5">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="rounded-3xl bg-white px-5 sm:px-8 py-6">
            <button
              type="button"
              className="w-full flex items-start justify-between gap-6 text-left cursor-pointer"
              onClick={() => handleToggle(index)}
              aria-expanded={isOpen}
            >
              <span className="text-2xl sm:text-xl lg:text-md font-medium leading-tight text-[#010101]">
                {item.question}
              </span>
              <span className="h-5 w-5 md:h-4 md:w-4 shrink-0 relative">
                <motion.span
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ rotate: (spinByIndex[index] ?? 0) * 360 + (isOpen ? 45 : 0) }}
                  transition={{ duration: 0.2, ease: 'linear' }}
                >
                  <Image
                    unoptimized
                    src="/images/home/plus.svg"
                    alt=""
                    aria-hidden="true"
                    width={18}
                    height={18}
                    className="h-full w-full object-contain"
                  />
                </motion.span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="mt-6 text-base sm:text-lg leading-snug text-[#6b6b6b]">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FaqRightAccordion;
