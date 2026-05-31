import { TestimonialIcon } from '@testimonial-types/components';

export interface SocialProofBarProps {
  /** The avatar icons to stack (shows first 3, rest collapsed into count badge) */
  icons: TestimonialIcon[];
  /** Total client/user count — used for the "+N" badge and trust text */
  totalCount?: number;
  /** How many avatars to show before collapsing into the count badge */
  visibleAvatars?: number;
  /** The trust message. Supports a `highlight` substring for bold formatting */
  trustText?: string;
  /** Substring within trustText to render bold/highlighted */
  trustTextHighlight?: string;
  /** Star rating (1–5). Omit to hide stars */
  rating?: number;
  /** Extra className on the root wrapper */
  className?: string;
}

export interface AwardItem {
  headline: string;
  label: string;
  meta: string;
  bgColor?: string;
  image?: string;
  height?: number;
}
