export interface PrivacyPolicySection {
  title: string;
  content: string;
}

export interface PrivacyPolicyContent {
  title: string;
  lastUpdated: string;
  sections: PrivacyPolicySection[];
  on: string;
}
