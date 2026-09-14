const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface InquiryPayload {
  name: string;
  email: string;
  phone?: string | null;
  service: string;
  company?: string | null;
  status?: string | null;
  source?: string | null;
  message: string;
}

export interface InquiryResponse {
  message?: string;
  data?: unknown;
  errors?: Record<string, string[]>;
}

export class InquiryApiError extends Error {
  status: number;
  errors?: Record<string, string[]>;

  constructor(
    message: string,
    status: number,
    errors?: Record<string, string[]>
  ) {
    super(message);
    this.name = "InquiryApiError";
    this.status = status;
    this.errors = errors;
  }
}

export async function submitInquiry(
  payload: InquiryPayload
): Promise<InquiryResponse> {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured.");
  }

  const response = await fetch(`${API_URL}/inquiries`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },

    body: JSON.stringify(payload),
  });

  const data: InquiryResponse = await response.json();

  if (!response.ok) {
    throw new InquiryApiError(
      data.message || "Failed to submit your inquiry.",
      response.status,
      data.errors
    );
  }

  return data;
}