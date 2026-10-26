export type Locale = "en" | "tr" | "fr" | "ar";

export type Theme = "light" | "dark";

export type ServiceId =
  | "web"
  | "brand"
  | "content"
  | "software"
  | "documents"
  | "support";

export interface ContactInquiry {
  name: string;
  email: string;
  company?: string;
  service: string;
  budget?: string;
  timing?: string;
  details: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
  inquiryId?: string;
  errors?: Record<string, string[]>;
}
