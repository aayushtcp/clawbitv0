import { AwardItem } from '@company-types/components';

export const AWARD_BADGE = {
  image: '/images/company/award-design.svg',
  title: 'Projects & Achievements',
  subtitle: 'Growing Portfolio',
};

export const AWARD_TITLE = 'Achievements';

export const AWARDS: AwardItem[] = [
  {
    headline: 'Completed Multiple Real-World Web Projects',
    label: 'Project Work',
    meta: '2024 - Present',
    bgColor: 'bg-[#c8d8e0]',
    height: 320,
  },
  {
    headline: 'Frontend Development with React & Next.js',
    label: 'Technical Skills',
    meta: '2025',
    bgColor: 'bg-[#b8d8c8]',
    height: 200,
  },
  {
    headline: 'Built Full-Stack & Dashboard Systems',
    label: 'Practical Experience',
    meta: '2025 - 2026',
    image: '/images/company/awards/awardone.png',
    bgColor: 'bg-[#e8d0cc]',
    height: 400,
  },
];
