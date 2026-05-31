// Project Card Props (for Featured Projects section)
export interface ProjectCardProps {
  title: string;
  year: string;
  image: string;
  hoverImage: string;
}

export interface AboutUsCardProps {
  number: string;
  title: string;
  activeDot: number;
  imgSrc: string;
}
export interface ExperienceProps {
  supportingMessage?: string;
}

export type ExperienceTestimonialCard = {
  name: string;
  role: string;
  logoText: string;
  logoBg: string;
  avatarSrc: string;
  nameClassName: string;
  messageClassName: string;
  message: string;
  messageFirst: boolean;
};

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqRightAccordionProps {
  items: FaqItem[];
  defaultOpenIndex?: number | null;
}
