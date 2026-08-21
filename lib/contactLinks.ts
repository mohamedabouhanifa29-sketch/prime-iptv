const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeWhatsAppNumber(value: string) {
  const digits = value.replace(/\D/g, "");
  return /^[1-9]\d{7,14}$/.test(digits) ? digits : null;
}

export function createWhatsAppContactUrl(value: string) {
  const number = normalizeWhatsAppNumber(value);
  return number ? `https://wa.me/${number}` : null;
}

export function createEmailContactUrl(value: string) {
  const email = value.trim();
  return emailPattern.test(email) ? `mailto:${email}` : null;
}
