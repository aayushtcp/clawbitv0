export interface CookiePolicySection {
  title: string;
  content: string;
}

export interface CookiePolicyContent {
  title: string;
  lastUpdated: string;
  sections: CookiePolicySection[];
  on: string;
}
