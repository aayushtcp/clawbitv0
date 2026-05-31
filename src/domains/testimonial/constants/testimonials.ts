import { TestimonialCardProps } from '@testimonial-types/components';
import { MessagePosition } from '@testimonial-constants/enum';

const UPWORK_ICON = '/images/testimonials/companies/upwork.svg';

export const testimonials: TestimonialCardProps[] = [
  {
    star: 5,
    message:
      'Always a great experience working with the Clawbit team. Professional communication and solid results.',
    icons: [{ src: '/images/testimonials/companies/flag-nepal.svg', alt: 'Nepal Flag' }],
    image: '/images/client/preyans.png',
    author: 'Preyans Chalise',
    position: 'Investor',
    messagePosition: MessagePosition.BOTTOM,
  },
  {
    star: 4.5,
    message:
      'Always a smooth collaboration with the team. Great communication and high-quality delivery.',
    icons: [
      { src: '/images/testimonials/companies/upwork.svg', alt: 'Nepal Flag' },
      { src: UPWORK_ICON, alt: 'Upwork' },
    ],
    author: 'Sujan Shrestha',
    position: 'Founder, Kathmandu Tech',
    messagePosition: MessagePosition.TOP,
  },
  {
    star: 5,
    message:
      'Very professional and creative team. Delivered everything on time with excellent attention to detail.',
    icons: [
      { src: '/images/testimonials/companies/upwork.svg', alt: 'Nepal Flag' },
      { src: UPWORK_ICON, alt: 'Upwork' },
      { src: UPWORK_ICON, alt: 'Upwork' },
    ],
    author: 'Prakash Adhikari',
    position: 'CEO, Himalayan Solutions',
    messagePosition: MessagePosition.TOP,
  },
  {
    star: 4.8,
    message:
      'Very responsive and professional throughout the project. Communication was smooth and results were impressive.',
    icons: [
      { src: '/images/testimonials/companies/flag-nepal.svg', alt: 'Nepal Flag' },
      { src: UPWORK_ICON, alt: 'Upwork' },
    ],
    author: 'Ritesh Khadka',
    position: 'CEO, Digital Gurkha',
    messagePosition: MessagePosition.TOP,
  },
  {
    star: 5,
    message:
      'They transformed our ideas into a beautiful and functional product. Highly satisfied with the outcome.',
    icons: [
      { src: '/images/testimonials/companies/flag-nepal.svg', alt: 'Nepal Flag' },
      { src: UPWORK_ICON, alt: 'Upwork' },
    ],
    author: 'Aayush Sharma',
    position: 'Founder, SmartTech Solutions',
    messagePosition: MessagePosition.TOP,
  },
  {
    star: 5,
    message:
      'Excellent collaboration and timely delivery. The team understood our requirements clearly and executed beyond expectations.',
    icons: [{ src: '/images/testimonials/companies/flag-nepal.svg', alt: 'Nepal Flag' }],
    image: '/images/client/sugamrai.jpg',
    author: 'Sugam Rai',
    position: 'Auto Parts Dealer',
    messagePosition: MessagePosition.TOP,
  },
];
