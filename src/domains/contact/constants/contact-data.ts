import { ContactCardProps } from '@contact-types/conponents';

export const contactPageContent = {
  intro: {
    title: 'Contact',
    description:
      'Choose a time to discuss your project with us.\nKnow that we will hit the ground running the very next day!',
  },
  social: {
    title:
      'Stay connected with us on social media! Follow our channels to see the latest updates, stories, and behind-the-scenes moments. Join our growing community and be part of the conversation.',
    description: 'Social Media',
  },
};

const contacts: ContactCardProps[] = [
  {
    name: 'Aayush Dhakal',
    phone: '+977 9865516321',
    email: 'contact@dhakal.dev',
    imageSrc: '/images/contact/aayush.jpg',
    message: 'Full Stack Developer — ',
    whatsappLink: 'https://wa.me/9779865516321',
    linkedinLink: 'https://www.linkedin.com/in/aayush-dhakal-148960200/',
    countryFlag: '🇳🇵',
  },
  {
    name: 'Ashok Giri',
    phone: '+977 9840038544',
    email: 'ashokgiri.dev@gmail.com',
    imageSrc: '/images/contact/ashok.jpg',
    message: 'Frontend Developer — ',
    whatsappLink: 'https://wa.me/9779840038544',
    linkedinLink: 'https://linkedin.com/in/ashokgiridev',
    countryFlag: '🇳🇵',
  },

  {
    name: 'Ankit Gautam',
    phone: '+977 9843731445',
    email: 'dabc75945@gmail.com',
    imageSrc: '/images/testimonials/ankit.jpg',
    message: 'Project Assistant — ',
    whatsappLink: 'https://wa.me/9779843731445',
    linkedinLink: 'https://www.linkedin.com/in/khambya19/',
    countryFlag: '🇳🇵',
  },
  {
    name: 'Karub Dahal',
    phone: '+977 9821279976',
    email: 'karubdahal@gmail.com',
    imageSrc: '/images/contact/karub.jpg',
    message: 'UI/UX Designer — ',
    whatsappLink: 'https://wa.me/9779821279976',
    // TODO: Update LinkedIn link when available
    linkedinLink: '#',
    countryFlag: '🇳🇵',
  },
];

export default contacts;
