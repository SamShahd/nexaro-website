export type Locale = "en" | "tr" | "fr" | "ar";

export type Theme = "light" | "dark";

export type Currency = "TRY" | "USD";

export type ServiceId = "websites" | "care" | "security";

export interface ContactInquiry {
  name: string;
  contact: string; // email or whatsapp
  service: string;
  websiteUrl?: string; // optional for free audit
  details: string;
  website_hp?: string; // honeypot
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
  errors?: Record<string, string[]>;
}
