const RECIPIENT = 'silvamateusdelima99@gmail.com';
const MAX_SUBJECT_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_EMAIL_LENGTH = 254;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARACTERS = /[\u0000-\u001f\u007f]/;

function respond(response, status, body) {
  return response.status(status).json(body);
}

module.exports = async function contact(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return respond(response, 405, { error: 'method_not_allowed' });
  }

  if (!request.headers?.['content-type']?.includes('application/json')) {
    return respond(response, 415, { error: 'unsupported_media_type' });
  }

  let payload = request.body;
  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload);
    } catch {
      return respond(response, 400, { error: 'invalid_json' });
    }
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return respond(response, 400, { error: 'invalid_request' });
  }

  if (typeof payload.website === 'string' && payload.website.trim()) {
    return respond(response, 400, { error: 'invalid_request' });
  }

  const subject = typeof payload.subject === 'string' ? payload.subject.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';

  if (
    !subject ||
    subject.length > MAX_SUBJECT_LENGTH ||
    CONTROL_CHARACTERS.test(subject) ||
    !message ||
    message.length > MAX_MESSAGE_LENGTH ||
    !email ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email)
  ) {
    return respond(response, 400, { error: 'invalid_fields' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    console.error('Contact form is missing RESEND_API_KEY or RESEND_FROM_EMAIL.');
    return respond(response, 503, { error: 'email_service_not_configured' });
  }

  let resendResponse;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `New portfolio contact message\n\nSubject: ${subject}\nReply email: ${email}\n\n${message}`
      }),
      signal: AbortSignal.timeout(10000)
    });
  } catch (error) {
    console.error('Resend API request failed:', error instanceof Error ? error.name : 'Unknown error');
    return respond(response, 502, { error: 'email_provider_unavailable' });
  }

  if (!resendResponse.ok) {
    console.error('Resend API returned status:', resendResponse.status);
    return respond(response, 502, { error: 'email_provider_rejected_request' });
  }

  return respond(response, 200, { ok: true });
};
