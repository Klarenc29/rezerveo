/** Shared backend types. */

/** Payload accepted by POST /api/booking. */
export interface BookingPayload {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  teamSize: string;
  message: string;
  /** Honeypot field — must be empty for genuine submissions. */
  company?: string;
}

/** Standard JSON envelope returned by the API. */
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Array<{ field: string; message: string }>;
}

/** Thrown internally to short-circuit with a specific HTTP status. */
export class HttpError extends Error {
  public readonly statusCode: number;
  public readonly expose: boolean;

  constructor(statusCode: number, message: string, expose = true) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
    this.expose = expose;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
