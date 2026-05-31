export interface Social {
  id: number;
  name: string;
  href: string;
  hovColor: string;
  imageSrc: string;
}

// Contact Cards
export interface ContactCardProps {
  name: string;
  phone: string;
  email: string;
  imageSrc: string;
  message: string;
  whatsappLink?: string;
  linkedinLink?: string;
  countryFlag?: string;
}

// Image Cards
export interface ImageCardItem {
  img: string;
  url: string;
  containerHeight: string;
  containerWidth: string;
}
