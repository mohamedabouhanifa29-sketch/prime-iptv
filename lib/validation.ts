import { z } from "zod";

const clean = (value: string) => value.replace(/[<>]/g, "").trim();
export const orderSchema = z.object({
  fullName: z.string().transform(clean).pipe(z.string().min(2, "Enter your full name").max(80)),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().transform(clean).pipe(z.string().min(6, "Enter a valid phone number").max(30)),
  device: z.string().min(1, "Select a device").max(40),
  country: z.string().transform(clean).pipe(z.string().min(2, "Enter your country").max(60)),
});
export type OrderFormData = z.input<typeof orderSchema>;

export const trialSchema = orderSchema.extend({
  iptvApp: z.string().transform(clean).pipe(z.string().max(80)).optional(),
});
export type TrialFormData = z.input<typeof trialSchema>;
