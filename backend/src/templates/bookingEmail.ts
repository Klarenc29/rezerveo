import type { BookingPayload } from '../types';

/** Escape user input before embedding it in HTML. */
function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

interface RenderedEmail {
  subject: string;
  text: string;
  html: string;
}

/**
 * Build the branded notification email sent to the Rezerveo inbox for each
 * demo/booking request.
 */
export function renderBookingEmail(payload: BookingPayload): RenderedEmail {
  const {
    fullName,
    businessName,
    email,
    phone,
    businessType,
    teamSize,
    message,
  } = payload;

  const subject = `New demo request — ${businessName || fullName}`;

  const rows: Array<[string, string]> = [
    ['Full name', fullName],
    ['Business name', businessName],
    ['Email', email],
    ['Phone', phone],
    ['Business type', businessType],
    ['Team size', teamSize],
  ];

  const text = [
    'New demo / booking request from rezerveo.al',
    '------------------------------------------------',
    ...rows.map(([k, v]) => `${k}: ${v}`),
    '',
    'Message:',
    message || '(none)',
  ].join('\n');

  const rowsHtml = rows
    .map(
      ([k, v]) => `
        <tr>
          <td style="padding:10px 16px;color:#9ca3af;font-size:13px;white-space:nowrap;vertical-align:top;">${esc(
            k,
          )}</td>
          <td style="padding:10px 16px;color:#0f172a;font-size:15px;font-weight:600;">${esc(
            v,
          )}</td>
        </tr>`,
    )
    .join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#f3f4f6;font-family:Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:32px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 30px rgba(15,23,42,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#1e3a8a 0%,#3b82f6 100%);padding:28px 32px;">
              <div style="color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.02em;">Rezerveo</div>
              <div style="color:#bfdbfe;font-size:13px;margin-top:4px;">New demo / booking request</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 16px 8px 16px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                ${rowsHtml}
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 28px 32px;">
              <div style="color:#9ca3af;font-size:13px;margin-bottom:6px;">Message</div>
              <div style="color:#0f172a;font-size:15px;line-height:1.6;background:#f3f4f6;border-radius:12px;padding:16px;white-space:pre-wrap;">${esc(
                message || '(none)',
              )}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px;border-top:1px solid #f3f4f6;">
              <a href="mailto:${esc(
                email,
              )}" style="display:inline-block;background:#00e676;color:#0f172a;text-decoration:none;font-weight:700;font-size:14px;padding:12px 22px;border-radius:10px;">Reply to ${esc(
                fullName,
              )}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 32px;background:#0f172a;">
              <div style="color:#9ca3af;font-size:12px;">Sent automatically from the Rezerveo website booking form.</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
