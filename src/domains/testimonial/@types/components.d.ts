export interface TestimonialIcon {
  src: string;
  alt: string;
}

export interface TestimonialCardProps {
  star: number;
  message: string;
  icons: TestimonialIcon[];
  image?: string;
  author: string;
  position: string;
  messagePosition?: MessagePosition;
}
