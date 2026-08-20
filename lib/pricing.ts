export type Plan = { name: string; months: number; price: number; badge?: string; featured?: boolean };

export const plans: Plan[] = [
  { name: "1 Month", months: 1, price: 19 },
  { name: "3 Months", months: 3, price: 39 },
  { name: "6 Months", months: 6, price: 49 },
  { name: "12 Months", months: 12, price: 69, badge: "MOST POPULAR", featured: true },
  { name: "24 Months", months: 24, price: 119, badge: "BEST VALUE" },
];
