'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@shared-components/ui/Button';
import { BtnVariant } from '@shared-constants/enum';
import FooterLinks from '@/shared/components/ui/FooterLinks';
import Navbar from '@/shared/components/Navbar';

const NotFound: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-[#010101] flex items-center justify-center px-6">
        <div className="text-center">
          {/* 404 Number */}
          <h1 className="text-8xl md:text-9xl font-bold leading-none text-white mb-20">404</h1>

          {/* Text content */}
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">Page not found</h2>
          <p className="text-lg font-semibold text-gray-400 mb-12">
            But found something awesome to watch
          </p>

          {/* Button */}
          <Link href="/">
            <Button variant={BtnVariant.ANIMATED}>Back to Home</Button>
          </Link>
        </div>
      </div>
      <footer className="bg-[#010101] w-full px-5 md:px-10">
        <FooterLinks />
      </footer>
    </>
  );
};

export default NotFound;
