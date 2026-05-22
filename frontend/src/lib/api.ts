import type { ApiResult, BookingFormValues } from '@/types';

/** API base — relative "/api" by default (works behind nginx and the Vite proxy). */
const API_BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

/** Submit the booking/demo form to the backend. */
export async function submitBooking(values: BookingFormValues): Promise<ApiResult> {
  try {
    const res = await fetch(`${API_BASE}/booking`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });

    let data: ApiResult;
    try {
      data = (await res.json()) as ApiResult;
    } catch {
      data = {
        success: res.ok,
        message: res.ok ? 'Request received.' : 'Unexpected server response.',
      };
    }

    if (!res.ok) {
      return {
        success: false,
        message: data.message || 'Something went wrong. Please try again.',
        errors: data.errors,
      };
    }

    return data;
  } catch {
    return {
      success: false,
      message: 'Could not reach the server. Please check your connection and try again.',
    };
  }
}
