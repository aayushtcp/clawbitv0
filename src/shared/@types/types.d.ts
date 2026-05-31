// UseScrollAnimation Hook TYpes
export interface ScrollAnimationConfig {
  startScroll?: number;
  scrollRange?: number;
  onProgress?: (progress: number) => void;
}

export interface ScrollAnimationReturn {
  progress: number;
  scrollPadding: number;
}
