// Mock volume data matching the realPriceData timeline
// Volume is represented in metric tons (1000 kg)

export interface VolumeData {
  date: string;
  volume: number;
}

export interface FruitVolumeData {
  durian: VolumeData[];
  mangosteen: VolumeData[];
  longan: VolumeData[];
}

// Mock volume data for Durian
const durianVolumes: VolumeData[] = [
  { date: "2024-07", volume: 1250 },
  { date: "2024-06", volume: 1480 },
  { date: "2024-05", volume: 2100 },
  { date: "2024-04", volume: 2350 },
  { date: "2024-03", volume: 1850 },
  { date: "2024-02", volume: 1650 },
  { date: "2024-01", volume: 1200 },
  { date: "2023-12", volume: 850 },
  { date: "2023-11", volume: 650 },
  { date: "2023-10", volume: 450 },
  { date: "2023-09", volume: 320 },
  { date: "2023-08", volume: 280 }
];

// Mock volume data for Mangosteen
const mangosteenVolumes: VolumeData[] = [
  { date: "2024-07", volume: 850 },
  { date: "2024-06", volume: 1200 },
  { date: "2024-05", volume: 1850 },
  { date: "2024-04", volume: 1650 },
  { date: "2024-03", volume: 1250 },
  { date: "2024-02", volume: 980 },
  { date: "2024-01", volume: 720 },
  { date: "2023-12", volume: 480 },
  { date: "2023-11", volume: 350 },
  { date: "2023-10", volume: 280 },
  { date: "2023-09", volume: 220 },
  { date: "2023-08", volume: 180 }
];

// Mock volume data for Longan
const longanVolumes: VolumeData[] = [
  { date: "2024-07", volume: 950 },
  { date: "2024-06", volume: 1150 },
  { date: "2024-05", volume: 1450 },
  { date: "2024-04", volume: 1680 },
  { date: "2024-03", volume: 1520 },
  { date: "2024-02", volume: 1280 },
  { date: "2024-01", volume: 980 },
  { date: "2023-12", volume: 750 },
  { date: "2023-11", volume: 580 },
  { date: "2023-10", volume: 420 },
  { date: "2023-09", volume: 320 },
  { date: "2023-08", volume: 250 }
];

export const volumeData: FruitVolumeData = {
  durian: durianVolumes,
  mangosteen: mangosteenVolumes,
  longan: longanVolumes
};
