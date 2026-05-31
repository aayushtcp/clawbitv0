import { NavLinkType, SocialLink } from '@shared-types/components';

// Navbar
export const navLinks: NavLinkType[] = [
  { name: 'Projects', href: '/projects' },
  { name: 'Company', href: '/company' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

// Footer
export const socialLinks: SocialLink[] = [
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Linkedin', url: 'https://linkedin.com' },
];

// Footer policy links
export const policyLinks = [
  { name: 'Privacy Policy', url: '/privacy' },
  { name: 'Cookie Policy', url: '/cookie' },
];

// Year in copyright text
const START_YEAR = 2026;
const currentYear = new Date().getFullYear();
const yearRange = currentYear > START_YEAR ? `${START_YEAR}-${currentYear}` : `${START_YEAR}`;

export const copyrightText = `© ${yearRange} Clawbit Labs. All rights reserved.`;
