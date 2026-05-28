// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface User {
  id: number;
  name: string;
  email: string;
  password: string; // hashed in production
}

export interface Product {
  id: number;
  name: string;
  unit: string;
  pricePerUnit: number; // in cents
}

export interface Sale {
  id: number;
  userId: number;
  date: string; // ISO 8601: YYYY-MM-DD
  totalPrice: number; // in cents
  client?: string;
}

export interface SaleLine {
  id: number;
  saleId: number;
  productId: number;
  quantity: number;
  unitPrice: number; // in cents
  lineTotal: number; // in cents
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────

export const users: User[] = [
  {
    id: 1,
    name: 'Lars Vermeersch',
    email: 'lars@fungiflow.be',
    password: '$2b$10$hashedpasswordhere',
  },
];

export const products: Product[] = [
  { id: 1, name: 'Oesterzwammen', unit: 'kg', pricePerUnit: 1800 },
  { id: 2, name: 'Shiitake', unit: 'kg', pricePerUnit: 2400 },
  { id: 3, name: 'Kastanjezwam', unit: 'kg', pricePerUnit: 2000 },
  { id: 4, name: 'Reishi poeder', unit: 'gram', pricePerUnit: 12 },
  { id: 5, name: 'Leeuwenmanen tinctuur', unit: 'ml', pricePerUnit: 18 },
];

export const sales: Sale[] = [
  { id: 1, userId: 1, date: '2026-05-01', totalPrice: 7200, client: undefined },
  {
    id: 2,
    userId: 1,
    date: '2026-05-03',
    totalPrice: 14400,
    client: 'Brasserie De Zwam',
  },
  {
    id: 3,
    userId: 1,
    date: '2026-05-03',
    totalPrice: 10000,
    client: undefined,
  },
  {
    id: 4,
    userId: 1,
    date: '2026-05-10',
    totalPrice: 21600,
    client: 'Foodmarkt Antwerpen',
  },
  { id: 5, userId: 1, date: '2026-05-14', totalPrice: 4800, client: undefined },
  {
    id: 6,
    userId: 1,
    date: '2026-05-17',
    totalPrice: 17400,
    client: 'Restaurant Mycelium',
  },
  { id: 7, userId: 1, date: '2026-05-20', totalPrice: 3600, client: undefined },
  {
    id: 8,
    userId: 1,
    date: '2026-05-24',
    totalPrice: 12200,
    client: 'Brasserie De Zwam',
  },
];

export const saleLines: SaleLine[] = [
  // Sale 1 — totaal: 7200
  {
    id: 1,
    saleId: 1,
    productId: 1,
    quantity: 2,
    unitPrice: 1800,
    lineTotal: 3600,
  },
  {
    id: 2,
    saleId: 1,
    productId: 2,
    quantity: 1,
    unitPrice: 2400,
    lineTotal: 2400,
  },
  {
    id: 3,
    saleId: 1,
    productId: 4,
    quantity: 100,
    unitPrice: 12,
    lineTotal: 1200,
  },

  // Sale 2 — totaal: 14400
  {
    id: 4,
    saleId: 2,
    productId: 1,
    quantity: 4,
    unitPrice: 1800,
    lineTotal: 7200,
  },
  {
    id: 5,
    saleId: 2,
    productId: 2,
    quantity: 3,
    unitPrice: 2400,
    lineTotal: 7200,
  },

  // Sale 3 — totaal: 10000
  {
    id: 6,
    saleId: 3,
    productId: 3,
    quantity: 2,
    unitPrice: 2000,
    lineTotal: 4000,
  },
  {
    id: 7,
    saleId: 3,
    productId: 5,
    quantity: 200,
    unitPrice: 18,
    lineTotal: 3600,
  },
  {
    id: 8,
    saleId: 3,
    productId: 4,
    quantity: 200,
    unitPrice: 12,
    lineTotal: 2400,
  },

  // Sale 4 — totaal: 21600
  {
    id: 9,
    saleId: 4,
    productId: 1,
    quantity: 6,
    unitPrice: 1800,
    lineTotal: 10800,
  },
  {
    id: 10,
    saleId: 4,
    productId: 2,
    quantity: 2,
    unitPrice: 2400,
    lineTotal: 4800,
  },
  {
    id: 11,
    saleId: 4,
    productId: 4,
    quantity: 500,
    unitPrice: 12,
    lineTotal: 6000,
  },

  // Sale 5 — totaal: 4800
  {
    id: 12,
    saleId: 5,
    productId: 5,
    quantity: 150,
    unitPrice: 18,
    lineTotal: 2700,
  },
  {
    id: 13,
    saleId: 5,
    productId: 4,
    quantity: 175,
    unitPrice: 12,
    lineTotal: 2100,
  },

  // Sale 6 — totaal: 17400
  {
    id: 14,
    saleId: 6,
    productId: 1,
    quantity: 5,
    unitPrice: 1800,
    lineTotal: 9000,
  },
  {
    id: 15,
    saleId: 6,
    productId: 3,
    quantity: 3,
    unitPrice: 2000,
    lineTotal: 6000,
  },
  {
    id: 16,
    saleId: 6,
    productId: 2,
    quantity: 1,
    unitPrice: 2400,
    lineTotal: 2400,
  },

  // Sale 7 — totaal: 3600
  {
    id: 17,
    saleId: 7,
    productId: 5,
    quantity: 100,
    unitPrice: 18,
    lineTotal: 1800,
  },
  {
    id: 18,
    saleId: 7,
    productId: 4,
    quantity: 150,
    unitPrice: 12,
    lineTotal: 1800,
  },

  // Sale 8 — totaal: 12200
  {
    id: 19,
    saleId: 8,
    productId: 1,
    quantity: 3,
    unitPrice: 1800,
    lineTotal: 5400,
  },
  {
    id: 20,
    saleId: 8,
    productId: 2,
    quantity: 2,
    unitPrice: 2400,
    lineTotal: 4800,
  },
  {
    id: 21,
    saleId: 8,
    productId: 3,
    quantity: 1,
    unitPrice: 2000,
    lineTotal: 2000,
  },
];
