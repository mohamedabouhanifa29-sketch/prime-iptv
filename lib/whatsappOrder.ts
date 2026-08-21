import { normalizeWhatsAppNumber } from "./contactLinks";

export type WhatsAppOrderData = {
  plan: string;
  price: number;
  name: string;
  email: string;
  phone: string;
  country: string;
  device: string;
};

export function createWhatsAppOrderMessage(data: WhatsAppOrderData) {
  return `🛒 NEW ORDER

Hello Prime IPTV 👋

I would like to place a new order.

📦 Plan: ${data.plan}
💶 Price: €${data.price}

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 WhatsApp: ${data.phone}
🌍 Country: ${data.country}
📺 Device: ${data.device}

Please send me the next steps.

Thank you.`;
}

export type WhatsAppTrialData = Omit<WhatsAppOrderData, "plan" | "price"> & { iptvApp?: string };

export function createWhatsAppTrialMessage(data: WhatsAppTrialData) {
  return `🆓 FREE 24H TRIAL REQUEST

Hello Prime IPTV 👋

I would like to request a FREE 24H IPTV TRIAL.

🆓 Request: 24H Free Trial

👤 Name: ${data.name}
📧 Email: ${data.email}
📱 WhatsApp: ${data.phone}
🌍 Country: ${data.country}
📺 Device: ${data.device}
📲 IPTV App: ${data.iptvApp?.trim() || "Not specified"}

Please send me the trial details.

Thank you.`;
}

export function createWhatsAppOrderUrl(number: string, data: WhatsAppOrderData) {
  const normalizedNumber = normalizeWhatsAppNumber(number);
  if (!normalizedNumber) return null;
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(createWhatsAppOrderMessage(data))}`;
}

export function createWhatsAppTrialUrl(number: string, data: WhatsAppTrialData) {
  const normalizedNumber = normalizeWhatsAppNumber(number);
  if (!normalizedNumber) return null;
  return `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(createWhatsAppTrialMessage(data))}`;
}
