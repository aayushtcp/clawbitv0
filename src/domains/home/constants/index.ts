// Hero Section Constants
export const HERO_CONSTANTS = {
  video: {
    primary: 'https://clawbit.dhakal.dev/videos/intro.mp4',
    fallbackImage: '/images/hero.png',
    fallbackColor: '#010101',
  },

  meta: {
    location: 'Hetauda, NP',
    since: 'Since 2026',
    workStyle: 'Remote First',
  },

  headline: {
    line1: 'BUILDING',
    line2: 'MODERN WEBSITES',
    tagline: 'Fast, clean, and built for real users',
  },

  stats: [
    {
      id: 'projects',
      value: '10+',
      label: 'Projects Completed',
    },
    {
      id: 'clients',
      value: '15+',
      label: 'Happy Clients',
    },
    {
      id: 'support',
      value: '100%',
      label: 'Dedicated Support',
    },
  ],

  services: [
    {
      id: 'web-development',
      label: 'WEB DEVELOPMENT',
      highlighted: false,
    },
    {
      id: 'seo-optimization',
      label: 'SEO OPTIMIZATION',
      highlighted: false,
    },
    {
      id: 'responsive-design',
      label: 'RESPONSIVE DESIGN',
      highlighted: false,
    },
    {
      id: 'college-academic-projects',
      label: 'COLLEGE / ACADEMIC PROJECTS',
      highlighted: true,
    },
  ],

  ui: {
    scrollLabel: 'Scroll to explore',
  },
};

export const COMPANY_HERO_SOCIAL_PROOF = {
  trustText:
    'Trusted by 15+ clients including E-Commerce Website, College Projects, and Freelance Clients.',
  trustTextHighlight: '15+ clients',
} as const;

// Our Clients Introduction
export const OurCleintsIntro = {
  infoHead: 'Worked with',
  copyright: '2023-2026©',
};

// Heading Section Constants
export const HEADING_CONSTANTS = {
  description: 'Worked with',
  title: '2023-2026©',
};

export const HOME_SECTION_HEADING_STYLE = {
  titleClassName: 'text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  descriptionClassName: 'text-sm flex justify-start items-start text-gray-500',
  spanClassName:
    'text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#686868]!',
};

// Our Clients Data
export const OUR_CLIENTS = [
  { id: 1, name: 'SummitWave', logo: '/images/home/icons/summitWave.svg' },
  { id: 2, name: 'SyncLink', logo: '/images/home/icons/syncLink.svg' },
  { id: 3, name: 'Vortexa', logo: '/images/home/icons/vortexa.svg' },
  { id: 4, name: 'HexaLab', logo: '/images/home/icons/hexaLab.svg' },
  { id: 5, name: 'ZenPath', logo: '/images/home/icons/zenPath.svg' },
];

// Featured Projects Section Constants
export const PROJECT_PAGE_HEADING = {
  title: 'Projects',
  description: 'Real projects\nbuilt with purpose',
};

export const FEATURED_PROJECTS_HEADING = {
  title: 'Featured Projects',
  description: 'Real projects\nbuilt with purpose',
};

export const PROJECTS = [
  {
    title: 'Selfpininon',
    year: '2026',
    image: '/images/home/projects/selfpinion.png',
    hoverImage: '/images/home/projects/selfpinion-hover.png',
  },
  {
    title: 'College Website',
    year: '2024',
    image: '/images/home/projects/college.png',
    hoverImage: '/images/home/projects/college-hover.png',
  },
  {
    title: 'Bhutandevi Trades and Suppliers',
    year: '2026',
    image: '/images/home/projects/bhutandevi.jpg',
    hoverImage: '/images/home/projects/bhutandeviHover.jpg',
  },
  {
    title: 'Personal Portfolio',
    year: '2026',
    image: '/images/home/projects/portfolio.png',
    hoverImage: '/images/home/projects/portfolio-hover.png',
  },
];

// Stats Section Constants
export const STATS_SECTION_CONSTANTS = {
  video: {
    src: '/videos/app-demo.mp4',
    type: 'video/mp4',
  },

  topText:
    'Simple interfaces, fast performance, and smooth experiences that keep users coming back.',

  stats: {
    projects: {
      value: '10+',
      label: 'Projects Completed',
      description: 'Building digital products that are fast, modern, and designed for real users.',
    },
    upwork: {
      value: '100%',
      label: 'Client Satisfaction',
      badge: {
        text: 'Growing',
        bgColor: 'bg-green-500',
      },
      totalCount: '7+',
    },
  },
};

export const SERVICES_CONSTANTS = {
  heading: {
    description: 'What We Offer',
    title: 'Services',
  },
  cards: [
    {
      id: 'web-development',
      logo: {
        src: '/icons//code.svg',
        alt: 'Web development icon',
      },
      title: 'Web Development',
      description:
        'We build fast, modern websites using React and Next.js with clean, scalable, and maintainable code.',
    },
    {
      id: 'ui-ux-design',
      logo: {
        src: '/icons/pen-tool.svg',
        alt: 'UI/UX design icon',
      },
      title: 'UI/UX Design',
      description:
        'We design clean, user-friendly interfaces that improve usability and create a better overall experience.',
    },
    {
      id: 'responsive-design',
      logo: {
        src: '/icons/smartphone.svg',
        alt: 'Responsive design icon',
      },
      title: 'Responsive Design',
      description:
        'We create websites that look and perform smoothly across mobile, tablet, and desktop devices.',
    },
    {
      id: 'project-development',
      logo: {
        src: '/icons/graduation-cap.svg',
        alt: 'Project development icon',
      },
      title: 'College & Custom Projects',
      description:
        'We help students with their practical work, such as building websites for academic projects.',
    },
  ],
};

// Why Choose Us Section Constants
export const WHY_CHOOSE_US_CONSTANTS = {
  heading: {
    description: 'Why choose us',
    title: 'Websites that are',
    spanText: 'fast, clean, and reliable.',
  },

  video: {
    src: '/videos/why-choose-us.mp4',
    type: 'video/mp4',
  },

  topText: 'Clean design, smooth performance, and user-focused development.',

  stats: {
    projects: {
      value: 10,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Focused on performance, clean UI, and practical solutions for real users.',
    },
    upwork: {
      value: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      badge: {
        text: 'Grow',
        bgColor: '#010101',
      },
      avatars: [
        { src: '/images/home/client1.jpg', alt: 'Client 1' },
        { src: '/images/home/client2.jpg', alt: 'Client 2' },
        { src: '/images/home/client3.png', alt: 'Client 3' },
      ],
      totalCount: 7,
    },
  },
};

export const ABOUT_US_CONSTANTS = {
  title: 'About Us',
  description: 'We build solutions',
  fadedDescription: 'for real-world needs',

  supportingParagraph:
    'We focus on modern web development using React, Next.js, and clean UI design to create fast, practical, and user-friendly digital products.',

  video: {
    src: '/videos/about-us.mp4',
  },

  cards: [
    {
      number: '01',
      title: 'Clean Code',
      activeDot: 1,
      imgSrc: '/icons/code.svg',
    },
    {
      number: '02',
      title: 'Modern Design',
      activeDot: 2,
      imgSrc: '/icons/smartphone.svg',
    },
    {
      number: '03',
      title: 'Performance Focus',
      activeDot: 3,
      imgSrc: '/icons/zap.svg',
    },
    {
      number: '04',
      title: 'Real Results',
      activeDot: 4,
      imgSrc: '/icons/rocket.svg',
    },
  ],
};

export const EXPERIENCE_CONSTANTS = {
  heading: {
    title: 'Experiences',
    description: 'Testimonials',
  },
  supportingMessage:
    'Real feedback and project experiences that reflect quality work, clear communication, and consistent improvement.',
  rating: {
    starCount: 4,
    iconSrc: '/images/testimonials/goldstar.svg',
    iconAlt: 'rating star',
    iconWidth: 14,
    iconHeight: 14,
    iconClassName: 'h-2 w-2',
  },
  overviewCard: {
    headline: 'We have completed multiple web projects,',
    body: 'focused on clean design, better usability, and practical solutions for clients and users.',
    reviewerAltPrefix: 'reviewer',
    reviewers: ['/images/home/client1.jpg', '/images/home/client2.jpg', '/images/home/client3.png'],
    totalReviewers: '3+',
    reviewPlatform: 'Client Reviews',
    reviewCount: 'Positive feedback',
    ctaLabel: 'View projects',
    ctaHref: '#projects',
  },
  testimonialCards: [
    {
      name: 'Abinash Shrestha',
      role: 'Business Man',
      logoText: 'B',
      logoBg: '#010101',
      avatarSrc: '/images/home/client1.jpg',
      nameClassName: 'text-md font-semibold leading-tight text-[#010101]',
      messageClassName: 'text-xl leading-[1.12] font-semibold text-[#010101]',
      message:
        'Great communication and timely delivery. The entire process was smooth and professional from start to finish.',
      messageFirst: false,
    },
    {
      name: 'Preyans Chalise',
      role: 'Investor',
      logoText: 'P',
      logoBg: 'blue',
      avatarSrc: '/images/home/client3.png',
      nameClassName: 'text-xl font-semibold leading-tight text-[#010101]',
      messageClassName: 'text-xl leading-[1.12] font-medium text-[#010101]',
      message:
        'Clean design, smooth performance, and exactly what we were looking for. The final result exceeded expectations.',
      messageFirst: true,
    },
    {
      name: 'Sugam Rai',
      role: 'Auto Parts Dealer',
      logoText: 'S',
      logoBg: '#14a800',
      avatarSrc: '/images/home/client2.jpg',
      nameClassName: 'text-xl font-semibold leading-tight text-[#010101]',
      messageClassName: 'text-xl leading-[1.12] font-semibold text-[#010101]',
      message:
        'Very detail-oriented and reliable. Focuses on performance and user experience, delivering high-quality results every time.',
      messageFirst: false,
    },
  ],
};

export const OUR_TEAM_CONSTANTS = {
  heading: {
    line1: 'Our work,',
    line2: 'your vision',
  },
  mission: {
    title: 'Let’s build together',
    description:
      'If you have an idea, project, or business goal, We would love to help bring it to life.',
    ctaLabel: 'Start a project',
    ctaHref: '#footer-form',
  },
  message: {
    highlightPrefix: 'We focus on collaboration,',
    highlight:
      'We focus on collaboration, turning ideas into practical and meaningful digital experiences.',
    body: 'With the right design and development process, your ideas can become fast, functional, and user-friendly products.',
  },
  members: [
    {
      name: 'Aayush Dhakal',
      title: 'Full Stack Developer',
      image: '/images/team/aayush.jpg',
    },
    {
      name: 'Ashok Giri',
      title: 'Frontend Developer',
      image: '/images/team/ashok.jpg',
    },
    {
      name: 'Ankit Gautam',
      title: 'Project Assistance',
      image: '/images/testimonials/ankit.jpg',
    },
    {
      name: 'Karub Dahal',
      title: 'UX/UI Designer',
      image: '/images/team/karub.jpg',
    },
  ],
};

export const FAQ_CONSTANTS = {
  heading: 'FAQ',
  description:
    'Got questions? Here are some quick answers about my services, process, and what it is like to work with us.',
  defaultOpenIndex: null,
  items: [
    {
      question: 'How long does it take to build a website?',
      answer:
        'Most projects take around 1 to 8 weeks depending on the features, content, and overall project scope.',
    },
    {
      question: 'Do you build custom websites?',
      answer:
        'Yes. We build custom websites based on your needs, goals, and preferred design style.',
    },
    {
      question: 'Do you offer SEO optimization?',
      answer:
        'Yes. We apply basic on-page SEO practices such as clean structure, proper headings, metadata, and performance improvements.',
    },
    {
      question: 'Can you make responsive websites?',
      answer:
        'Yes. Every website is designed to work properly on mobile, tablet, and desktop screens.',
    },
    {
      question: 'Can you help with college or academic projects?',
      answer:
        'Yes. We can help build project UIs, dashboards, CRUD systems, and other practical web-based college projects.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Just share your idea, project type, or business goal, and we can discuss the best way to build it.',
    },
  ],
};
