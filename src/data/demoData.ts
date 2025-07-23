type PriceData = {
  date: string;
  current?: number;
  predicted: number;
  average: number;
  volume: number;
  confidence: number;
  estimatedSupply: number;
  supplyImpact: number;
};

export function demoDataChart(name: string, time: string): PriceData[] {
  const dataMapping: { [key: string]: { [key: string]: PriceData[] } } = {
    Mangosteen: {
      '3m': [
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 210,
          predicted: 190,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 170,
          predicted: 165,
          average: 160,
          volume: 11000,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 130,
          predicted: 120,
          average: 160,
          volume: 16490,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 110,
          predicted: 110,
          average: 160,
          volume: 15420,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 120,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 170,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
      ],
      '6m': [
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 220,
          predicted: 210,
          average: 160,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 250,
          predicted: 240,
          average: 160,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 290,
          predicted: 280,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 210,
          predicted: 190,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 170,
          predicted: 165,
          average: 160,
          volume: 11000,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 130,
          predicted: 120,
          average: 160,
          volume: 16490,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 110,
          predicted: 110,
          average: 160,
          volume: 15420,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 120,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 170,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 190,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 210,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
      '1y': [
        {
          date: '2024-07-31', // 12 เดือนที่แล้ว
          current: 100,
          predicted: 90,
          average: 160,
          volume: 15420,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-08-31', // 11 เดือนที่แล้ว
          current: 110,
          predicted: 120,
          average: 160,
          volume: 9800,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-09-30', // 10 เดือนที่แล้ว
          current: 130,
          predicted: 110,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-10-31', // 9 เดือนที่แล้ว
          current: 160,
          predicted: 150,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-11-30', // 8 เดือนที่แล้ว
          current: 180,
          predicted: 170,
          average: 160,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-12-31', // 7 เดือนที่แล้ว
          current: 200,
          predicted: 190,
          average: 160,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 220,
          predicted: 210,
          average: 160,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 250,
          predicted: 240,
          average: 160,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 290,
          predicted: 280,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 210,
          predicted: 190,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 170,
          predicted: 165,
          average: 160,
          volume: 11000,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 130,
          predicted: 120,
          average: 160,
          volume: 16490,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 110,
          predicted: 110,
          average: 160,
          volume: 15420,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 120,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 170,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 190,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 210,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-02-28', // 7 เดือนข้างหน้า
          current: undefined,
          predicted: 260,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-03-31', // 8 เดือนข้างหน้า
          current: undefined,
          predicted: 300,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-04-30', // 9 เดือนข้างหน้า
          current: undefined,
          predicted: 220,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-05-31', // 10 เดือนข้างหน้า
          current: undefined,
          predicted: 180,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-06-30', // 11 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-07-31', // 12 เดือนข้างหน้า
          current: undefined,
          predicted: 120,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
      '2y': [
        {
          date: '2023-07-31', // 24 เดือนที่แล้ว
          current: 80,
          predicted: 70,
          average: 160,
          volume: 15420,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2023-08-31', // 23 เดือนที่แล้ว
          current: 90,
          predicted: 86,
          average: 160,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2023-09-30', // 22 เดือนที่แล้ว
          current: 110,
          predicted: 98,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2023-10-31', // 21 เดือนที่แล้ว
          current: 140,
          predicted: 143,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2023-11-30', // 20 เดือนที่แล้ว
          current: 170,
          predicted: 165,
          average: 160,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2023-12-31', // 19 เดือนที่แล้ว
          current: 190,
          predicted: 180,
          average: 160,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-01-31', // 18 เดือนที่แล้ว
          current: 210,
          predicted: 190,
          average: 160,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-02-28', // 17 เดือนที่แล้ว
          current: 240,
          predicted: 230,
          average: 160,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-03-31', // 16 เดือนที่แล้ว
          current: 280,
          predicted: 270,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-04-30', // 15 เดือนที่แล้ว
          current: 200,
          predicted: 180,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-05-31', // 14 เดือนที่แล้ว
          current: 160,
          predicted: 154,
          average: 160,
          volume: 11000,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-06-30', // 13 เดือนที่แล้ว
          current: 120,
          predicted: 118,
          average: 160,
          volume: 14420,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-07-31', // 12 เดือนที่แล้ว
          current: 100,
          predicted: 90,
          average: 160,
          volume: 15420,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-08-31', // 11 เดือนที่แล้ว
          current: 110,
          predicted: 120,
          average: 160,
          volume: 9800,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-09-30', // 10 เดือนที่แล้ว
          current: 130,
          predicted: 110,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-10-31', // 9 เดือนที่แล้ว
          current: 160,
          predicted: 150,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-11-30', // 8 เดือนที่แล้ว
          current: 180,
          predicted: 170,
          average: 160,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-12-31', // 7 เดือนที่แล้ว
          current: 200,
          predicted: 190,
          average: 160,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 220,
          predicted: 210,
          average: 160,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 250,
          predicted: 240,
          average: 160,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 290,
          predicted: 280,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 210,
          predicted: 190,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 170,
          predicted: 165,
          average: 160,
          volume: 11000,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 130,
          predicted: 120,
          average: 160,
          volume: 16490,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 110,
          predicted: 110,
          average: 160,
          volume: 15420,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 120,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 170,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 190,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 210,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-02-28', // 7 เดือนข้างหน้า
          current: undefined,
          predicted: 260,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-03-31', // 8 เดือนข้างหน้า
          current: undefined,
          predicted: 300,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-04-30', // 9 เดือนข้างหน้า
          current: undefined,
          predicted: 220,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-05-31', // 10 เดือนข้างหน้า
          current: undefined,
          predicted: 180,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-06-30', // 11 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-07-31', // 12 เดือนข้างหน้า
          current: undefined,
          predicted: 120,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-08-31', // 13 เดือนข้างหน้า
          current: undefined,
          predicted: 130,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-09-30', // 14 เดือนข้างหน้า
          current: undefined,
          predicted: 150,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-10-31', // 15 เดือนข้างหน้า
          current: undefined,
          predicted: 180,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-11-30', // 16 เดือนข้างหน้า
          current: undefined,
          predicted: 200,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-12-31', // 17 เดือนข้างหน้า
          current: undefined,
          predicted: 220,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-01-31', // 18 เดือนข้างหน้า
          current: undefined,
          predicted: 240,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2027-02-28', // 19 เดือนข้างหน้า
          current: undefined,
          predicted: 270,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2027-03-31', // 20 เดือนข้างหน้า
          current: undefined,
          predicted: 310,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2027-04-30', // 21 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2027-05-31', // 22 เดือนข้างหน้า
          current: undefined,
          predicted: 190,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2027-06-30', // 23 เดือนข้างหน้า
          current: undefined,
          predicted: 150,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-07-31', // 24 เดือนข้างหน้า
          current: undefined,
          predicted: 130,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
      '3y': [
        {
          date: '2022-07-31', // 36 เดือนที่แล้ว
          current: 75,
          predicted: 80,
          average: 160,
          volume: 15920,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2022-08-31', // 35 เดือนที่แล้ว
          current: 85,
          predicted: 80,
          average: 160,
          volume: 12900,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2022-09-30', // 34 เดือนที่แล้ว
          current: 105,
          predicted: 90,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2022-10-31', // 33 เดือนที่แล้ว
          current: 135,
          predicted: 125,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2022-11-30', // 32 เดือนที่แล้ว
          current: 165,
          predicted: 160,
          average: 160,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2022-12-31', // 31 เดือนที่แล้ว
          current: 185,
          predicted: 170,
          average: 160,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2023-01-31', // 30 เดือนที่แล้ว
          current: 200,
          predicted: 190,
          average: 160,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2023-02-28', // 29 เดือนที่แล้ว
          current: 225,
          predicted: 200,
          average: 160,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2023-03-31', // 28 เดือนที่แล้ว
          current: 260,
          predicted: 239,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2023-04-30', // 27 เดือนที่แล้ว
          current: 180,
          predicted: 190,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2023-05-31', // 26 เดือนที่แล้ว
          current: 140,
          predicted: 130,
          average: 160,
          volume: 11000,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2023-06-30', // 25 เดือนที่แล้ว
          current: 100,
          predicted: 90,
          average: 160,
          volume: 13900,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2023-07-31', // 24 เดือนที่แล้ว
          current: 80,
          predicted: 70,
          average: 160,
          volume: 15420,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2023-08-31', // 23 เดือนที่แล้ว
          current: 90,
          predicted: 86,
          average: 160,
          volume: 12000,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2023-09-30', // 22 เดือนที่แล้ว
          current: 110,
          predicted: 98,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2023-10-31', // 21 เดือนที่แล้ว
          current: 140,
          predicted: 143,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2023-11-30', // 20 เดือนที่แล้ว
          current: 170,
          predicted: 165,
          average: 160,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2023-12-31', // 19 เดือนที่แล้ว
          current: 190,
          predicted: 180,
          average: 160,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-01-31', // 18 เดือนที่แล้ว
          current: 210,
          predicted: 190,
          average: 160,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-02-28', // 17 เดือนที่แล้ว
          current: 240,
          predicted: 230,
          average: 160,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-03-31', // 16 เดือนที่แล้ว
          current: 280,
          predicted: 270,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-04-30', // 15 เดือนที่แล้ว
          current: 200,
          predicted: 180,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-05-31', // 14 เดือนที่แล้ว
          current: 160,
          predicted: 154,
          average: 160,
          volume: 10000,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-06-30', // 13 เดือนที่แล้ว
          current: 120,
          predicted: 118,
          average: 160,
          volume: 11900,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-07-31', // 12 เดือนที่แล้ว
          current: 100,
          predicted: 90,
          average: 160,
          volume: 15420,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-08-31', // 11 เดือนที่แล้ว
          current: 110,
          predicted: 120,
          average: 160,
          volume: 12900,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-09-30', // 10 เดือนที่แล้ว
          current: 130,
          predicted: 110,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-10-31', // 9 เดือนที่แล้ว
          current: 160,
          predicted: 150,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-11-30', // 8 เดือนที่แล้ว
          current: 180,
          predicted: 170,
          average: 160,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-12-31', // 7 เดือนที่แล้ว
          current: 200,
          predicted: 190,
          average: 160,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 220,
          predicted: 210,
          average: 160,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 250,
          predicted: 240,
          average: 160,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 290,
          predicted: 280,
          average: 160,
          volume: 9100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 210,
          predicted: 190,
          average: 160,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 170,
          predicted: 165,
          average: 160,
          volume: 11000,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 130,
          predicted: 120,
          average: 160,
          volume: 16490,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 110,
          predicted: 110,
          average: 160,
          volume: 15420,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 120,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 170,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 190,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 210,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-02-28', // 7 เดือนข้างหน้า
          current: undefined,
          predicted: 260,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-03-31', // 8 เดือนข้างหน้า
          current: undefined,
          predicted: 300,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-04-30', // 9 เดือนข้างหน้า
          current: undefined,
          predicted: 220,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-05-31', // 10 เดือนข้างหน้า
          current: undefined,
          predicted: 180,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-06-30', // 11 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-07-31', // 12 เดือนข้างหน้า
          current: undefined,
          predicted: 120,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-08-31', // 13 เดือนข้างหน้า
          current: undefined,
          predicted: 130,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-09-30', // 14 เดือนข้างหน้า
          current: undefined,
          predicted: 150,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-10-31', // 15 เดือนข้างหน้า
          current: undefined,
          predicted: 180,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-11-30', // 16 เดือนข้างหน้า
          current: undefined,
          predicted: 200,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-12-31', // 17 เดือนข้างหน้า
          current: undefined,
          predicted: 220,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-01-31', // 18 เดือนข้างหน้า
          current: undefined,
          predicted: 240,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2027-02-28', // 19 เดือนข้างหน้า
          current: undefined,
          predicted: 270,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2027-03-31', // 20 เดือนข้างหน้า
          current: undefined,
          predicted: 310,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2027-04-30', // 21 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2027-05-31', // 22 เดือนข้างหน้า
          current: undefined,
          predicted: 190,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2027-06-30', // 23 เดือนข้างหน้า
          current: undefined,
          predicted: 150,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-07-31', // 24 เดือนข้างหน้า
          current: undefined,
          predicted: 130,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2027-08-31', // 25 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2027-09-30', // 26 เดือนข้างหน้า
          current: undefined,
          predicted: 160,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2027-10-31', // 27 เดือนข้างหน้า
          current: undefined,
          predicted: 190,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2027-11-30', // 28 เดือนข้างหน้า
          current: undefined,
          predicted: 210,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2027-12-31', // 29 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2028-01-31', // 30 เดือนข้างหน้า
          current: undefined,
          predicted: 250,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2028-02-29', // 31 เดือนข้างหน้า
          current: undefined,
          predicted: 280,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2028-03-31', // 32 เดือนข้างหน้า
          current: undefined,
          predicted: 320,
          average: 160,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2028-04-30', // 33 เดือนข้างหน้า
          current: undefined,
          predicted: 240,
          average: 160,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2028-05-31', // 34 เดือนข้างหน้า
          current: undefined,
          predicted: 200,
          average: 160,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2028-06-30', // 35 เดือนข้างหน้า
          current: undefined,
          predicted: 160,
          average: 160,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2028-07-31', // 36 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 160,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
    },
    Durian: {
      '3m': [
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 8659,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 8950,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
      ],
      '6m': [
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 380,
          predicted: 355,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 450,
          predicted: 470,
          average: 274,
          volume: 3300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 360,
          predicted: 398,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 8659,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 8950,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 311,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 354,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 371,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
      '1y': [
        {
          date: '2024-07-31', // 12 เดือนที่แล้ว
          current: 210,
          predicted: 149,
          average: 274,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-08-31', // 11 เดือนที่แล้ว
          current: 230,
          predicted: 191,
          average: 274,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-09-30', // 10 เดือนที่แล้ว
          current: 260,
          predicted: 224,
          average: 274,
          volume: 2900,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-10-31', // 9 เดือนที่แล้ว
          current: 300,
          predicted: 276,
          average: 274,
          volume: 2900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-11-30', // 8 เดือนที่แล้ว
          current: 350,
          predicted: 313,
          average: 274,
          volume: 2900,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-12-31', // 7 เดือนที่แล้ว
          current: 380,
          predicted: 356,
          average: 274,
          volume: 2900,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 380,
          predicted: 355,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 450,
          predicted: 470,
          average: 274,
          volume: 3300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 360,
          predicted: 398,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 8659,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 8950,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 311,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 354,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 371,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-02-28', // 7 เดือนข้างหน้า
          current: undefined,
          predicted: 488,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-03-31', // 8 เดือนข้างหน้า
          current: undefined,
          predicted: 413,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-04-30', // 9 เดือนข้างหน้า
          current: undefined,
          predicted: 218,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-05-31', // 10 เดือนข้างหน้า
          current: undefined,
          predicted: 145,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-06-30', // 11 เดือนข้างหน้า
          current: undefined,
          predicted: 128,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-07-31', // 12 เดือนข้างหน้า
          current: undefined,
          predicted: 152,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
      '2y': [
        {
          date: '2023-07-31', // 24 เดือนที่แล้ว
          current: 180,
          predicted: 143.04,
          average: 274,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2023-08-31', // 23 เดือนที่แล้ว
          current: 190,
          predicted: 183.87,
          average: 274,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2023-09-30', // 22 เดือนที่แล้ว
          current: 210,
          predicted: 214.52,
          average: 274,
          volume: 5000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2023-10-31', // 21 เดือนที่แล้ว
          current: 280,
          predicted: 265.67,
          average: 274,
          volume: 4000,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2023-11-30', // 20 เดือนที่แล้ว
          current: 330,
          predicted: 301.14,
          average: 274,
          volume: 2300,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2023-12-31', // 19 เดือนที่แล้ว
          current: 360,
          predicted: 341.2,
          average: 274,
          volume: 2000,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-01-31', // 18 เดือนที่แล้ว
          current: 400,
          predicted: 358,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-02-28', // 17 เดือนที่แล้ว
          current: 480,
          predicted: 477,
          average: 274,
          volume: 3200,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-03-31', // 16 เดือนที่แล้ว
          current: 380,
          predicted: 403,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-04-30', // 15 เดือนที่แล้ว
          current: 260,
          predicted: 214,
          average: 274,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-05-31', // 14 เดือนที่แล้ว
          current: 220,
          predicted: 142,
          average: 274,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-06-30', // 13 เดือนที่แล้ว
          current: 200,
          predicted: 126,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-07-31', // 12 เดือนที่แล้ว
          current: 210,
          predicted: 149,
          average: 274,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-08-31', // 11 เดือนที่แล้ว
          current: 230,
          predicted: 191,
          average: 274,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-09-30', // 10 เดือนที่แล้ว
          current: 260,
          predicted: 224,
          average: 274,
          volume: 2900,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-10-31', // 9 เดือนที่แล้ว
          current: 300,
          predicted: 276,
          average: 274,
          volume: 2900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-11-30', // 8 เดือนที่แล้ว
          current: 350,
          predicted: 313,
          average: 274,
          volume: 2900,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-12-31', // 7 เดือนที่แล้ว
          current: 380,
          predicted: 356,
          average: 274,
          volume: 2900,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 380,
          predicted: 355,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 450,
          predicted: 470,
          average: 274,
          volume: 3300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 360,
          predicted: 398,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 8659,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 8950,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 311,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 354,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 371,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-02-28', // 7 เดือนข้างหน้า
          current: undefined,
          predicted: 488,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-03-31', // 8 เดือนข้างหน้า
          current: undefined,
          predicted: 413,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-04-30', // 9 เดือนข้างหน้า
          current: undefined,
          predicted: 218,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-05-31', // 10 เดือนข้างหน้า
          current: undefined,
          predicted: 145,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-06-30', // 11 เดือนข้างหน้า
          current: undefined,
          predicted: 128,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-07-31', // 12 เดือนข้างหน้า
          current: undefined,
          predicted: 152,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-08-31', // 13 เดือนข้างหน้า
          current: undefined,
          predicted: 196,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-09-30', // 14 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-10-31', // 15 เดือนข้างหน้า
          current: undefined,
          predicted: 284,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-11-30', // 16 เดือนข้างหน้า
          current: undefined,
          predicted: 323,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-12-31', // 17 เดือนข้างหน้า
          current: undefined,
          predicted: 368,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-01-31', // 18 เดือนข้างหน้า
          current: undefined,
          predicted: 386,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2027-02-28', // 19 เดือนข้างหน้า
          current: undefined,
          predicted: 508,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2027-03-31', // 20 เดือนข้างหน้า
          current: undefined,
          predicted: 432,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2027-04-30', // 21 เดือนข้างหน้า
          current: undefined,
          predicted: 225,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2027-05-31', // 22 เดือนข้างหน้า
          current: undefined,
          predicted: 148,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2027-06-30', // 23 เดือนข้างหน้า
          current: undefined,
          predicted: 131,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-07-31', // 24 เดือนข้างหน้า
          current: undefined,
          predicted: 156,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
      '3y': [
        {
          date: '2022-07-31', // 36 เดือนที่แล้ว
          current: 170,
          predicted: 137.18,
          average: 274,
          volume: 15920,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2022-08-31', // 35 เดือนที่แล้ว
          current: 190,
          predicted: 175.91,
          average: 274,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2022-09-30', // 34 เดือนที่แล้ว
          current: 220,
          predicted: 204.31,
          average: 274,
          volume: 2100,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2022-10-31', // 33 เดือนที่แล้ว
          current: 260,
          predicted: 253.31,
          average: 274,
          volume: 4300,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2022-11-30', // 32 เดือนที่แล้ว
          current: 310,
          predicted: 287.75,
          average: 274,
          volume: 3400,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2022-12-31', // 31 เดือนที่แล้ว
          current: 340,
          predicted: 326.09,
          average: 274,
          volume: 2500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2023-01-31', // 30 เดือนที่แล้ว
          current: 380,
          predicted: 356.96,
          average: 274,
          volume: 2100,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2023-02-28', // 29 เดือนที่แล้ว
          current: 450,
          predicted: 453.86,
          average: 274,
          volume: 2000,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2023-03-31', // 28 เดือนที่แล้ว
          current: 360,
          predicted: 376.56,
          average: 274,
          volume: 4300,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2023-04-30', // 27 เดือนที่แล้ว
          current: 240,
          predicted: 211.9,
          average: 274,
          volume: 7890,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2023-05-31', // 26 เดือนที่แล้ว
          current: 200,
          predicted: 138.62,
          average: 274,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2023-06-30', // 25 เดือนที่แล้ว
          current: 180,
          predicted: 121.24,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2023-07-31', // 24 เดือนที่แล้ว
          current: 180,
          predicted: 143.04,
          average: 274,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2023-08-31', // 23 เดือนที่แล้ว
          current: 190,
          predicted: 183.87,
          average: 274,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2023-09-30', // 22 เดือนที่แล้ว
          current: 210,
          predicted: 214.52,
          average: 274,
          volume: 5000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2023-10-31', // 21 เดือนที่แล้ว
          current: 280,
          predicted: 265.67,
          average: 274,
          volume: 4000,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2023-11-30', // 20 เดือนที่แล้ว
          current: 330,
          predicted: 301.14,
          average: 274,
          volume: 2300,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2023-12-31', // 19 เดือนที่แล้ว
          current: 360,
          predicted: 341.2,
          average: 274,
          volume: 2000,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-01-31', // 18 เดือนที่แล้ว
          current: 400,
          predicted: 358,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-02-28', // 17 เดือนที่แล้ว
          current: 480,
          predicted: 477,
          average: 274,
          volume: 3200,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-03-31', // 16 เดือนที่แล้ว
          current: 380,
          predicted: 403,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-04-30', // 15 เดือนที่แล้ว
          current: 260,
          predicted: 214,
          average: 274,
          volume: 8900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-05-31', // 14 เดือนที่แล้ว
          current: 220,
          predicted: 142,
          average: 274,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-06-30', // 13 เดือนที่แล้ว
          current: 200,
          predicted: 126,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-07-31', // 12 เดือนที่แล้ว
          current: 210,
          predicted: 149,
          average: 274,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-08-31', // 11 เดือนที่แล้ว
          current: 230,
          predicted: 191,
          average: 274,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-09-30', // 10 เดือนที่แล้ว
          current: 260,
          predicted: 224,
          average: 274,
          volume: 2900,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-10-31', // 9 เดือนที่แล้ว
          current: 300,
          predicted: 276,
          average: 274,
          volume: 2900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-11-30', // 8 เดือนที่แล้ว
          current: 350,
          predicted: 313,
          average: 274,
          volume: 2900,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-12-31', // 7 เดือนที่แล้ว
          current: 380,
          predicted: 356,
          average: 274,
          volume: 2900,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 380,
          predicted: 355,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 450,
          predicted: 470,
          average: 274,
          volume: 3300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 360,
          predicted: 398,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 8659,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 8700,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 8950,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 311,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 354,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 371,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-02-28', // 7 เดือนข้างหน้า
          current: undefined,
          predicted: 488,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-03-31', // 8 เดือนข้างหน้า
          current: undefined,
          predicted: 413,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-04-30', // 9 เดือนข้างหน้า
          current: undefined,
          predicted: 218,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-05-31', // 10 เดือนข้างหน้า
          current: undefined,
          predicted: 145,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-06-30', // 11 เดือนข้างหน้า
          current: undefined,
          predicted: 128,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-07-31', // 12 เดือนข้างหน้า
          current: undefined,
          predicted: 152,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-08-31', // 13 เดือนข้างหน้า
          current: undefined,
          predicted: 196,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-09-30', // 14 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-10-31', // 15 เดือนข้างหน้า
          current: undefined,
          predicted: 284,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-11-30', // 16 เดือนข้างหน้า
          current: undefined,
          predicted: 323,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-12-31', // 17 เดือนข้างหน้า
          current: undefined,
          predicted: 368,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-01-31', // 18 เดือนข้างหน้า
          current: undefined,
          predicted: 386,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2027-02-28', // 19 เดือนข้างหน้า
          current: undefined,
          predicted: 508,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2027-03-31', // 20 เดือนข้างหน้า
          current: undefined,
          predicted: 432,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2027-04-30', // 21 เดือนข้างหน้า
          current: undefined,
          predicted: 225,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2027-05-31', // 22 เดือนข้างหน้า
          current: undefined,
          predicted: 148,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2027-06-30', // 23 เดือนข้างหน้า
          current: undefined,
          predicted: 131,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-07-31', // 24 เดือนข้างหน้า
          current: undefined,
          predicted: 156,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2027-08-31', // 25 เดือนข้างหน้า
          current: undefined,
          predicted: 202,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2027-09-30', // 26 เดือนข้างหน้า
          current: undefined,
          predicted: 237,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2027-10-31', // 27 เดือนข้างหน้า
          current: undefined,
          predicted: 292,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2027-11-30', // 28 เดือนข้างหน้า
          current: undefined,
          predicted: 332,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2027-12-31', // 29 เดือนข้างหน้า
          current: undefined,
          predicted: 379,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2028-01-31', // 30 เดือนข้างหน้า
          current: undefined,
          predicted: 410,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2028-02-29', // 31 เดือนข้างหน้า
          current: undefined,
          predicted: 540,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2028-03-31', // 32 เดือนข้างหน้า
          current: undefined,
          predicted: 458,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2028-04-30', // 33 เดือนข้างหน้า
          current: undefined,
          predicted: 240,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2028-05-31', // 34 เดือนข้างหน้า
          current: undefined,
          predicted: 158,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2028-06-30', // 35 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2028-07-31', // 36 เดือนข้างหน้า
          current: undefined,
          predicted: 167,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
    },
    Longan: {
      '3m': [
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 3200,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 4300,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 12300,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
      ],
      '6m': [
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 380,
          predicted: 355,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 450,
          predicted: 470,
          average: 274,
          volume: 3300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 360,
          predicted: 398,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 3200,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 4300,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 12300,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 311,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 354,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 371,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
      '1y': [
        {
          date: '2024-07-31', // 12 เดือนที่แล้ว
          current: 210,
          predicted: 149,
          average: 274,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-08-31', // 11 เดือนที่แล้ว
          current: 230,
          predicted: 191,
          average: 274,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-09-30', // 10 เดือนที่แล้ว
          current: 260,
          predicted: 224,
          average: 274,
          volume: 7000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-10-31', // 9 เดือนที่แล้ว
          current: 300,
          predicted: 276,
          average: 274,
          volume: 2900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-11-30', // 8 เดือนที่แล้ว
          current: 350,
          predicted: 313,
          average: 274,
          volume: 2900,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-12-31', // 7 เดือนที่แล้ว
          current: 380,
          predicted: 356,
          average: 274,
          volume: 2900,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 380,
          predicted: 355,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 450,
          predicted: 470,
          average: 274,
          volume: 3300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 360,
          predicted: 398,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 3200,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 4300,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 12300,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 311,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 354,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 371,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-02-28', // 7 เดือนข้างหน้า
          current: undefined,
          predicted: 488,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-03-31', // 8 เดือนข้างหน้า
          current: undefined,
          predicted: 413,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-04-30', // 9 เดือนข้างหน้า
          current: undefined,
          predicted: 218,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-05-31', // 10 เดือนข้างหน้า
          current: undefined,
          predicted: 145,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-06-30', // 11 เดือนข้างหน้า
          current: undefined,
          predicted: 128,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-07-31', // 12 เดือนข้างหน้า
          current: undefined,
          predicted: 152,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
      '2y': [
        {
          date: '2023-07-31', // 24 เดือนที่แล้ว
          current: 180,
          predicted: 143.04,
          average: 274,
          volume: 11400,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2023-08-31', // 23 เดือนที่แล้ว
          current: 190,
          predicted: 183.87,
          average: 274,
          volume: 12000,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2023-09-30', // 22 เดือนที่แล้ว
          current: 210,
          predicted: 214.52,
          average: 274,
          volume: 10000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2023-10-31', // 21 เดือนที่แล้ว
          current: 280,
          predicted: 265.67,
          average: 274,
          volume: 4000,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2023-11-30', // 20 เดือนที่แล้ว
          current: 330,
          predicted: 301.14,
          average: 274,
          volume: 2300,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2023-12-31', // 19 เดือนที่แล้ว
          current: 360,
          predicted: 341.2,
          average: 274,
          volume: 2000,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-01-31', // 18 เดือนที่แล้ว
          current: 400,
          predicted: 358,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-02-28', // 17 เดือนที่แล้ว
          current: 480,
          predicted: 477,
          average: 274,
          volume: 3200,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-03-31', // 16 เดือนที่แล้ว
          current: 380,
          predicted: 403,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-04-30', // 15 เดือนที่แล้ว
          current: 260,
          predicted: 214,
          average: 274,
          volume: 2300,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-05-31', // 14 เดือนที่แล้ว
          current: 220,
          predicted: 142,
          average: 274,
          volume: 3200,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-06-30', // 13 เดือนที่แล้ว
          current: 200,
          predicted: 126,
          average: 274,
          volume: 4300,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-07-31', // 12 เดือนที่แล้ว
          current: 210,
          predicted: 149,
          average: 274,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-08-31', // 11 เดือนที่แล้ว
          current: 230,
          predicted: 191,
          average: 274,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-09-30', // 10 เดือนที่แล้ว
          current: 260,
          predicted: 224,
          average: 274,
          volume: 7000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-10-31', // 9 เดือนที่แล้ว
          current: 300,
          predicted: 276,
          average: 274,
          volume: 2900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-11-30', // 8 เดือนที่แล้ว
          current: 350,
          predicted: 313,
          average: 274,
          volume: 2900,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-12-31', // 7 เดือนที่แล้ว
          current: 380,
          predicted: 356,
          average: 274,
          volume: 2900,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 380,
          predicted: 355,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 450,
          predicted: 470,
          average: 274,
          volume: 3300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 360,
          predicted: 398,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 3200,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 4300,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 12300,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 311,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 354,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 371,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-02-28', // 7 เดือนข้างหน้า
          current: undefined,
          predicted: 488,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-03-31', // 8 เดือนข้างหน้า
          current: undefined,
          predicted: 413,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-04-30', // 9 เดือนข้างหน้า
          current: undefined,
          predicted: 218,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-05-31', // 10 เดือนข้างหน้า
          current: undefined,
          predicted: 145,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-06-30', // 11 เดือนข้างหน้า
          current: undefined,
          predicted: 128,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-07-31', // 12 เดือนข้างหน้า
          current: undefined,
          predicted: 152,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-08-31', // 13 เดือนข้างหน้า
          current: undefined,
          predicted: 196,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-09-30', // 14 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-10-31', // 15 เดือนข้างหน้า
          current: undefined,
          predicted: 284,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-11-30', // 16 เดือนข้างหน้า
          current: undefined,
          predicted: 323,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-12-31', // 17 เดือนข้างหน้า
          current: undefined,
          predicted: 368,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-01-31', // 18 เดือนข้างหน้า
          current: undefined,
          predicted: 386,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2027-02-28', // 19 เดือนข้างหน้า
          current: undefined,
          predicted: 508,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2027-03-31', // 20 เดือนข้างหน้า
          current: undefined,
          predicted: 432,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2027-04-30', // 21 เดือนข้างหน้า
          current: undefined,
          predicted: 225,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2027-05-31', // 22 เดือนข้างหน้า
          current: undefined,
          predicted: 148,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2027-06-30', // 23 เดือนข้างหน้า
          current: undefined,
          predicted: 131,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-07-31', // 24 เดือนข้างหน้า
          current: undefined,
          predicted: 156,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
      '3y': [
        {
          date: '2022-07-31', // 36 เดือนที่แล้ว
          current: 170,
          predicted: 137.18,
          average: 274,
          volume: 15920,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2022-08-31', // 35 เดือนที่แล้ว
          current: 190,
          predicted: 175.91,
          average: 274,
          volume: 12300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2022-09-30', // 34 เดือนที่แล้ว
          current: 220,
          predicted: 204.31,
          average: 274,
          volume: 9000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2022-10-31', // 33 เดือนที่แล้ว
          current: 260,
          predicted: 253.31,
          average: 274,
          volume: 4300,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2022-11-30', // 32 เดือนที่แล้ว
          current: 310,
          predicted: 287.75,
          average: 274,
          volume: 3400,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2022-12-31', // 31 เดือนที่แล้ว
          current: 340,
          predicted: 326.09,
          average: 274,
          volume: 2500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2023-01-31', // 30 เดือนที่แล้ว
          current: 380,
          predicted: 356.96,
          average: 274,
          volume: 2100,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2023-02-28', // 29 เดือนที่แล้ว
          current: 450,
          predicted: 453.86,
          average: 274,
          volume: 2000,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2023-03-31', // 28 เดือนที่แล้ว
          current: 360,
          predicted: 376.56,
          average: 274,
          volume: 1200,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2023-04-30', // 27 เดือนที่แล้ว
          current: 240,
          predicted: 211.9,
          average: 274,
          volume: 1500,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2023-05-31', // 26 เดือนที่แล้ว
          current: 200,
          predicted: 138.62,
          average: 274,
          volume: 2000,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2023-06-30', // 25 เดือนที่แล้ว
          current: 180,
          predicted: 121.24,
          average: 274,
          volume: 3000,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2023-07-31', // 24 เดือนที่แล้ว
          current: 180,
          predicted: 143.04,
          average: 274,
          volume: 11400,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2023-08-31', // 23 เดือนที่แล้ว
          current: 190,
          predicted: 183.87,
          average: 274,
          volume: 12000,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2023-09-30', // 22 เดือนที่แล้ว
          current: 210,
          predicted: 214.52,
          average: 274,
          volume: 10000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2023-10-31', // 21 เดือนที่แล้ว
          current: 280,
          predicted: 265.67,
          average: 274,
          volume: 4000,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2023-11-30', // 20 เดือนที่แล้ว
          current: 330,
          predicted: 301.14,
          average: 274,
          volume: 2300,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2023-12-31', // 19 เดือนที่แล้ว
          current: 360,
          predicted: 341.2,
          average: 274,
          volume: 2000,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-01-31', // 18 เดือนที่แล้ว
          current: 400,
          predicted: 358,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-02-28', // 17 เดือนที่แล้ว
          current: 480,
          predicted: 477,
          average: 274,
          volume: 3200,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-03-31', // 16 เดือนที่แล้ว
          current: 380,
          predicted: 403,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-04-30', // 15 เดือนที่แล้ว
          current: 260,
          predicted: 214,
          average: 274,
          volume: 2300,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-05-31', // 14 เดือนที่แล้ว
          current: 220,
          predicted: 142,
          average: 274,
          volume: 3200,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-06-30', // 13 เดือนที่แล้ว
          current: 200,
          predicted: 126,
          average: 274,
          volume: 4300,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2024-07-31', // 12 เดือนที่แล้ว
          current: 210,
          predicted: 149,
          average: 274,
          volume: 9500,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2024-08-31', // 11 เดือนที่แล้ว
          current: 230,
          predicted: 191,
          average: 274,
          volume: 9300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2024-09-30', // 10 เดือนที่แล้ว
          current: 260,
          predicted: 224,
          average: 274,
          volume: 7000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2024-10-31', // 9 เดือนที่แล้ว
          current: 300,
          predicted: 276,
          average: 274,
          volume: 2900,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2024-11-30', // 8 เดือนที่แล้ว
          current: 350,
          predicted: 313,
          average: 274,
          volume: 2900,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2024-12-31', // 7 เดือนที่แล้ว
          current: 380,
          predicted: 356,
          average: 274,
          volume: 2900,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        {
          date: '2025-01-31', // 6 เดือนที่แล้ว
          current: 380,
          predicted: 355,
          average: 274,
          volume: 2900,
          confidence: 70,
          estimatedSupply: 10600,
          supplyImpact: 6.0,
        },
        {
          date: '2025-02-28', // 5 เดือนที่แล้ว
          current: 450,
          predicted: 470,
          average: 274,
          volume: 3300,
          confidence: 68,
          estimatedSupply: 10700,
          supplyImpact: 6.2,
        },
        {
          date: '2025-03-31', // 4 เดือนที่แล้ว
          current: 360,
          predicted: 398,
          average: 274,
          volume: 4000,
          confidence: 65,
          estimatedSupply: 10800,
          supplyImpact: 6.5,
        },
        {
          date: '2025-04-30', // 3 เดือนที่แล้ว
          current: 240,
          predicted: 210,
          average: 274,
          volume: 3200,
          confidence: 62,
          estimatedSupply: 10900,
          supplyImpact: 6.8,
        },
        {
          date: '2025-05-31', // 2 เดือนที่แล้ว
          current: 200,
          predicted: 140,
          average: 274,
          volume: 4300,
          confidence: 60,
          estimatedSupply: 11000,
          supplyImpact: 7.0,
        },
        {
          date: '2025-06-30', // 1 เดือนที่แล้ว
          current: 180,
          predicted: 124,
          average: 274,
          volume: 8500,
          confidence: 58,
          estimatedSupply: 11100,
          supplyImpact: 7.2,
        },
        // ปัจจุบัน
        {
          date: '2025-07-31', // เดือนปัจจุบัน
          current: 190,
          predicted: 147,
          average: 274,
          volume: 12300,
          confidence: 88,
          estimatedSupply: 9800,
          supplyImpact: 4.8,
        },
        // อนาคต 36 เดือน
        {
          date: '2025-08-31', // 1 เดือนข้างหน้า
          current: undefined,
          predicted: 189,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2025-09-30', // 2 เดือนข้างหน้า
          current: undefined,
          predicted: 222,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2025-10-31', // 3 เดือนข้างหน้า
          current: undefined,
          predicted: 274,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2025-11-30', // 4 เดือนข้างหน้า
          current: undefined,
          predicted: 311,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2025-12-31', // 5 เดือนข้างหน้า
          current: undefined,
          predicted: 354,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-01-31', // 6 เดือนข้างหน้า
          current: undefined,
          predicted: 371,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-02-28', // 7 เดือนข้างหน้า
          current: undefined,
          predicted: 488,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-03-31', // 8 เดือนข้างหน้า
          current: undefined,
          predicted: 413,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-04-30', // 9 เดือนข้างหน้า
          current: undefined,
          predicted: 218,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-05-31', // 10 เดือนข้างหน้า
          current: undefined,
          predicted: 145,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-06-30', // 11 เดือนข้างหน้า
          current: undefined,
          predicted: 128,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2026-07-31', // 12 เดือนข้างหน้า
          current: undefined,
          predicted: 152,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2026-08-31', // 13 เดือนข้างหน้า
          current: undefined,
          predicted: 196,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2026-09-30', // 14 เดือนข้างหน้า
          current: undefined,
          predicted: 230,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2026-10-31', // 15 เดือนข้างหน้า
          current: undefined,
          predicted: 284,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2026-11-30', // 16 เดือนข้างหน้า
          current: undefined,
          predicted: 323,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2026-12-31', // 17 เดือนข้างหน้า
          current: undefined,
          predicted: 368,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-01-31', // 18 เดือนข้างหน้า
          current: undefined,
          predicted: 386,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2027-02-28', // 19 เดือนข้างหน้า
          current: undefined,
          predicted: 508,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2027-03-31', // 20 เดือนข้างหน้า
          current: undefined,
          predicted: 432,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2027-04-30', // 21 เดือนข้างหน้า
          current: undefined,
          predicted: 225,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2027-05-31', // 22 เดือนข้างหน้า
          current: undefined,
          predicted: 148,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2027-06-30', // 23 เดือนข้างหน้า
          current: undefined,
          predicted: 131,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2027-07-31', // 24 เดือนข้างหน้า
          current: undefined,
          predicted: 156,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2027-08-31', // 25 เดือนข้างหน้า
          current: undefined,
          predicted: 202,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2027-09-30', // 26 เดือนข้างหน้า
          current: undefined,
          predicted: 237,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2027-10-31', // 27 เดือนข้างหน้า
          current: undefined,
          predicted: 292,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2027-11-30', // 28 เดือนข้างหน้า
          current: undefined,
          predicted: 332,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2027-12-31', // 29 เดือนข้างหน้า
          current: undefined,
          predicted: 379,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2028-01-31', // 30 เดือนข้างหน้า
          current: undefined,
          predicted: 410,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
        {
          date: '2028-02-29', // 31 เดือนข้างหน้า
          current: undefined,
          predicted: 540,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9500,
          supplyImpact: 4.0,
        },
        {
          date: '2028-03-31', // 32 เดือนข้างหน้า
          current: undefined,
          predicted: 458,
          average: 274,
          volume: 0,
          confidence: 93,
          estimatedSupply: 9450,
          supplyImpact: 3.9,
        },
        {
          date: '2028-04-30', // 33 เดือนข้างหน้า
          current: undefined,
          predicted: 240,
          average: 274,
          volume: 0,
          confidence: 94,
          estimatedSupply: 9400,
          supplyImpact: 3.8,
        },
        {
          date: '2028-05-31', // 34 เดือนข้างหน้า
          current: undefined,
          predicted: 158,
          average: 274,
          volume: 0,
          confidence: 95,
          estimatedSupply: 9300,
          supplyImpact: 3.6,
        },
        {
          date: '2028-06-30', // 35 เดือนข้างหน้า
          current: undefined,
          predicted: 140,
          average: 274,
          volume: 0,
          confidence: 96,
          estimatedSupply: 9200,
          supplyImpact: 3.4,
        },
        {
          date: '2028-07-31', // 36 เดือนข้างหน้า
          current: undefined,
          predicted: 167,
          average: 274,
          volume: 0,
          confidence: 97,
          estimatedSupply: 9100,
          supplyImpact: 3.2,
        },
      ],
    },
  };

  // ใช้ map เพื่อหาค่าที่ตรงกันตามเงื่อนไข
  return dataMapping[name]?.[time] || [];
}
