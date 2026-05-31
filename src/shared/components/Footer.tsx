import React from 'react';
import FooterInfo from '@shared-components/ui/FooterInfo';
import FooterForm from '@shared-components/ui/FooterForm';
import FooterLinks from '@shared-components/ui/FooterLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010101] w-full px-5 md:px-10">
      <div className="py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-between w-full">
          {/* Left Side - Footer Info */}
          <div className="flex items-center lg:items-start w-full lg:w-auto">
            <FooterInfo />
          </div>

          {/* Right Side - Footer Form */}
          <div
            id="footer-form"
            className="flex items-start justify-start w-full lg:w-auto lg:ml-auto scroll-mt-32"
          >
            <FooterForm />
          </div>
        </div>
      </div>
      <FooterLinks />
    </footer>
  );
};

export default Footer;
