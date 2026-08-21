import { z } from "zod";

export const orderDeviceOptions = ["Smart TV","Android TV","Apple TV","Fire TV","Android","iPhone / iPad","Windows","Mac","MAG Box","TV Box"] as const;
export const trialDeviceOptions = ["Smart TV","Android TV","Fire TV / Fire Stick","iPhone / iPad","Android Phone / Tablet","Windows","Mac","MAG Box","TV Box","Other"] as const;

const clean = (value: string) => value.replace(/[\u0000-\u001F\u007F<>]/g, " ").replace(/\s+/g, " ").trim();
const requiredText = (label:string,max:number) => z.string().transform(clean).pipe(z.string().min(2, `Enter your ${label}`).max(max));
const phone = z.string().transform(clean).pipe(z.string().max(30).regex(/^[+\d().\-\s]+$/, "Enter a valid phone number").refine(value=>value.replace(/\D/g,"").length>=6,"Enter a valid phone number"));
const supportedDevice = (options:readonly string[]) => z.string().min(1,"Select a device").max(40).refine(value=>options.includes(value),"Select a valid device");

export const orderSchema = z.object({
  fullName: requiredText("full name",80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone,
  device: supportedDevice(orderDeviceOptions),
  country: requiredText("country",60),
});
export type OrderFormData = z.input<typeof orderSchema>;

export const trialSchema = z.object({
  fullName: requiredText("full name",80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone,
  device: supportedDevice(trialDeviceOptions),
  country: requiredText("country",60),
  iptvApp: z.string().transform(clean).pipe(z.string().max(80)).optional(),
});
export type TrialFormData = z.input<typeof trialSchema>;
