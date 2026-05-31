import { HeadingVariant } from '@shared-constants/enum';

export const COMPANY_INFO = {
  heading: 'About Us',

  about: {
    title:
      'We are a modern web development team focused on building fast, clean, and user-friendly digital products. We turn ideas into real-world web applications using modern technologies.',
    description: 'Who We Are',
    details:
      'No unnecessary complexity — just practical solutions built for performance, usability, and real results.',
  },

  video: {
    src: '/videos/about-us.mp4',
  },

  headingVariants: {
    vertical: HeadingVariant.VERTICAL,
    horizontal: HeadingVariant.HORIZONTAL,
  },

  approach: {
    title:
      'Our approach is simple: combine clean UI/UX, strong performance, and modern development practices to build products that work smoothly and scale easily.',
    description:
      'We focus on creating digital experiences that are easy to use, fast to load, and built with purpose.',
    supportingParagraph:
      'Whether it’s a website, dashboard, or web application, we build solutions that solve real problems.',
  },

  teamIntro: {
    title: 'Meet the people behind the work — focused on building quality digital products.',
    description: 'Our Team',
  },

  team: [
    {
      name: 'Aayush',
      role: 'Full Stack Developer',
      image: '/images/team/aayush.jpg',
    },
    {
      name: 'Ashok Giri',
      role: 'Frontend Developer',
      image: '/images/team/ashok.jpg',
    },
    {
      name: 'Ankit gautam',
      role: 'Project Assistance',
      image: '/images/team/ankit.jpg',
    },
    {
      name: 'Karub Dahal',
      role: 'UX/UI Designer',
      image: '/images/team/karub.jpg',
    },
  ],
} as const;
