import { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

export interface SocialLink {
  name: string;
  url: string;
}

// Navbar
export interface NavLinkType {
  name: string;
  href: string;
}

export interface NavLinkProps {
  link: NavLinkType;
  isScrolled: boolean;
}

export interface MobileMenuItemProps {
  link: NavLinkType;
  onClick: () => void;
}

// Buttons
type MotionButtonProps = HTMLMotionProps<'button'>;

interface ButtonProps extends Omit<MotionButtonProps, 'children'> {
  children: ReactNode;
  variant?: BtnVariant;
  fullWidth?: boolean;
  isScrolled?: boolean;
}

// Custom Header
export interface CustomHeadingProps {
  variant?: HeadingVariant;
  title: string;
  spanText?: string;
  description?: string;
  details?: string;
  titleClassName?: string;
  spanClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
  className?: string;
  align?: 'start' | 'center';
}

// General Custom Intro/Hero Section Props
export interface IntroProps {
  backgroundImg?: string;
  heading: React.ReactNode;
  containerClassName?: string;
  backgroundColor?: string;
  dataTheme?: string;
}

// Custom Cards (card in index page, image only cards in contact page, and small logo cards)
export interface CustomCardProps {
  img: string;
  hoverImg?: string;
  title?: string;
  year?: string | number;
  url?: string;
  containerHeight?: string;
  containerWidth?: string;
  imageFit?: 'cover' | 'contain';
  className?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  showBg?: boolean;
}

// Slider Button Interface
export interface CustomBadgeProps {
  label?: string;
  href?: string;
  onClick?: () => void;
  containerClassName?: string;
  buttonClassName?: string;
  dotClassName?: string;
  textWrapperClassName?: string;
}
