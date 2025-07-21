export interface PriceData {
  date: string;
  price: number;
}

export interface RealPriceData {
  durian: PriceData[];
  mangosteen: PriceData[];
  longan: PriceData[];
}

// Mangosteen price data (มังคุด)
const mangosteenPrices: PriceData[] = [
  { date: "2025-06", price: 23.98 },
  { date: "2025-05", price: 44.73 },
  { date: "2025-04", price: 85.12 },
  { date: "2025-03", price: 21.99 },
  { date: "2025-02", price: 21.99 },
  { date: "2025-01", price: 21.99 },
  { date: "2024-12", price: 21.99 },
  { date: "2024-11", price: 21.99 },
  { date: "2024-10", price: 21.99 },
  { date: "2024-09", price: 21.99 },
  { date: "2024-08", price: 23.65 },
  { date: "2024-07", price: 40.05 },
  { date: "2024-06", price: 37.99 },
  { date: "2024-05", price: 44.77 },
  { date: "2024-04", price: 88.48 },
  { date: "2024-03", price: 16.48 },
  { date: "2024-02", price: 16.48 },
  { date: "2024-01", price: 16.48 },
  { date: "2023-12", price: 16.48 },
  { date: "2023-11", price: 16.48 },
  { date: "2023-10", price: 16.48 },
  { date: "2023-09", price: 15.46 },
  { date: "2023-08", price: 21.22 },
  { date: "2023-07", price: 27.14 },
  { date: "2023-06", price: 30.71 }
];

// Longan price data (ลำไย)
const longanPrices: PriceData[] = [
  { date: "2025-06", price: 16.40 },
  { date: "2025-05", price: 19.00 },
  { date: "2025-04", price: 18.33 },
  { date: "2025-03", price: 20.20 },
  { date: "2025-02", price: 22.25 },
  { date: "2025-01", price: 23.44 },
  { date: "2024-12", price: 25.16 },
  { date: "2024-11", price: 28.50 },
  { date: "2024-10", price: 29.00 },
  { date: "2024-09", price: 28.05 },
  { date: "2024-08", price: 26.36 },
  { date: "2024-07", price: 27.80 },
  { date: "2024-06", price: 28.25 },
  { date: "2024-05", price: 25.00 },
  { date: "2024-04", price: 27.75 },
  { date: "2024-03", price: 29.85 },
  { date: "2024-02", price: 29.85 },
  { date: "2024-01", price: 30.07 },
  { date: "2023-12", price: 28.00 },
  { date: "2023-11", price: 27.25 },
  { date: "2023-10", price: 27.60 },
  { date: "2023-09", price: 27.25 },
  { date: "2023-08", price: 32.25 },
  { date: "2023-07", price: 34.00 },
  { date: "2023-06", price: 32.25 }
];

// Durian price data (ทุเรียนหมอนทอง)
const durianPrices: PriceData[] = [
  { date: "2025-06", price: 81.35 },
  { date: "2025-05", price: 82.77 },
  { date: "2025-04", price: 117.34 },
  { date: "2025-03", price: 135.00 },
  { date: "2025-02", price: 95.29 },
  { date: "2025-01", price: 95.29 },
  { date: "2024-12", price: 95.29 },
  { date: "2024-11", price: 95.29 },
  { date: "2024-10", price: 95.29 },
  { date: "2024-09", price: 95.29 },
  { date: "2024-08", price: 102.71 },
  { date: "2024-07", price: 126.05 },
  { date: "2024-06", price: 134.58 },
  { date: "2024-05", price: 111.67 },
  { date: "2024-04", price: 162.05 },
  { date: "2024-03", price: 101.07 },
  { date: "2024-02", price: 101.07 },
  { date: "2024-01", price: 101.07 },
  { date: "2023-12", price: 101.07 },
  { date: "2023-11", price: 101.07 },
  { date: "2023-10", price: 101.59 },
  { date: "2023-09", price: 103.06 },
  { date: "2023-08", price: 104.90 },
  { date: "2023-07", price: 92.01 },
  { date: "2023-06", price: 81.35 }
];

export const realPriceData: RealPriceData = {
  durian: durianPrices,
  mangosteen: mangosteenPrices,
  longan: longanPrices
};
