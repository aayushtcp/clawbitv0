import { copyrightText, policyLinks, socialLinks } from '@shared-constants/navigations';

const FooterLinks: React.FC = () => {
  return (
    <div
      className="w-full py-23 flex flex-col justify-between"
      style={{ backgroundColor: '#010101', minHeight: '50vh' }}
    >
      {/* Social Links Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6 mb-12">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl md:text-2xl font-semibold hover:text-gray-400 transition-colors duration-200 flex items-center gap-2 group"
          >
            {link.name}
            <svg
              className="w-6 h-6x opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7V17"
              />
            </svg>
          </a>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8">
        {/* Copyright */}
        <p className="text-gray-400 text-sm md:text-base">{copyrightText}</p>

        {/* Policy Links */}
        <div className="flex gap-8">
          {policyLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-white text-sm md:text-base hover:text-gray-400 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
