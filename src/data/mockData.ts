import { CropInfo, PriceData, PredictionData, MarketStats } from '@/types';
import { subDays, format } from 'date-fns';

// Crop information
export const crops: Record<string, CropInfo> = {
  rice: {
    id: 'rice',
    name: 'Rice',
    icon: '🌾',
    unit: 'per kg',
    color: '#10b981',
    description: 'Premium jasmine rice'
  },
  durian: {
    id: 'durian',
    name: 'Durian',
    icon: '🏆',
    unit: 'per kg',
    color: '#f59e0b',
    description: 'King of fruits'
  },
  mango: {
    id: 'mango',
    name: 'Mango',
    icon: '🥭',
    unit: 'per kg',
    color: '#ef4444',
    description: 'Sweet tropical mango'
  }
};

// Seeded random number generator for consistent data
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generate mock historical data
const generatePriceData = (basePrice: number, days: number, volatility: number = 0.1, seed: number = 12345): PriceData[] => {
  const data: PriceData[] = [];
  let currentPrice = basePrice;
  
  for (let i = days; i >= 0; i--) {
    const date = format(subDays(new Date('2024-12-31'), i), 'yyyy-MM-dd');
    const change = (seededRandom(seed + i) - 0.5) * 2 * volatility * currentPrice;
    currentPrice = Math.max(currentPrice + change, basePrice * 0.5);
    
    data.push({
      date,
      price: Number(currentPrice.toFixed(2)),
      volume: Math.floor(seededRandom(seed + i + 1000) * 1000) + 500
    });
  }
  
  return data;
};

// Historical price data
export const historicalData: Record<string, PriceData[]> = {
  rice: generatePriceData(45, 365, 0.08, 1001),
  durian: generatePriceData(120, 365, 0.15, 2002),
  mango: generatePriceData(85, 365, 0.12, 3003)
};

// Generate prediction data with overlapping timeline
const generatePredictionData = (historical: PriceData[], daysHistorical: number = 30, daysAhead: number = 30, seed: number = 5555): PredictionData[] => {
  const data: PredictionData[] = [];
  
  // Get the specified number of days of historical data
  const recentHistorical = historical.slice(-daysHistorical);
  const basePrice = recentHistorical[recentHistorical.length - 1].price;
  
  // Add historical data with both current and predicted values for overlap
  recentHistorical.forEach((item, index) => {
    // Generate "what AI would have predicted" for this historical point
    const daysSinceStart = index - recentHistorical.length + 1;
    const trendFactor = (seededRandom(seed + index) - 0.4) * 0.02;
    const aiPrediction = basePrice * (1 + (trendFactor * Math.abs(daysSinceStart)));
    
    data.push({
      date: item.date,
      historical: item.price,
      current: item.price,
      predicted: Number(aiPrediction.toFixed(2)), // Show what AI predicted
      confidence: 0.9 // High confidence for recent predictions
    });
  });
  
  // Add future predictions starting from the day after last historical
  for (let i = 1; i <= daysAhead; i++) {
    const futureDate = new Date('2025-01-01');
    futureDate.setDate(futureDate.getDate() + i - 1);
    const date = format(futureDate, 'yyyy-MM-dd');
    
    // Create realistic future predictions
    const trendFactor = (seededRandom(seed + i + 1000) - 0.4) * 0.03;
    const volatilityFactor = (seededRandom(seed + i + 2000) - 0.5) * 0.05;
    const predicted = basePrice * (1 + (trendFactor * i) + volatilityFactor);
    const confidence = Math.max(0.5, 1 - (i / daysAhead) * 0.5);
    
    data.push({
      date,
      historical: null,
      current: null,
      predicted: Number(predicted.toFixed(2)),
      confidence: Number(confidence.toFixed(2))
    });
  }
  
  return data;
};

// Prediction data for different time ranges
export const predictionData: Record<string, Record<string, PredictionData[]>> = {
  rice: {
    '7d': generatePredictionData(historicalData.rice, 7, 7, 4004),
    '1m': generatePredictionData(historicalData.rice, 30, 30, 4004),
    '3m': generatePredictionData(historicalData.rice, 90, 90, 4004),
  },
  durian: {
    '7d': generatePredictionData(historicalData.durian, 7, 7, 5005),
    '1m': generatePredictionData(historicalData.durian, 30, 30, 5005),
    '3m': generatePredictionData(historicalData.durian, 90, 90, 5005),
  },
  mango: {
    '7d': generatePredictionData(historicalData.mango, 7, 7, 6006),
    '1m': generatePredictionData(historicalData.mango, 30, 30, 6006),
    '3m': generatePredictionData(historicalData.mango, 90, 90, 6006),
  }
};

// Calculate AI prediction accuracy
export const calculatePredictionAccuracy = (crop: string): number => {
  const cropPredictions = predictionData[crop]['1m'] || [];
  if (!cropPredictions.length) return 0;
  
  // Calculate accuracy based on how close AI predictions were to actual historical prices
  const historicalData = cropPredictions.filter(item => item.historical !== null && item.predicted !== null);
  if (!historicalData.length) return 0;
  
  let totalAccuracy = 0;
  historicalData.forEach(item => {
    if (item.historical && item.predicted) {
      const difference = Math.abs(item.historical - item.predicted);
      const accuracy = Math.max(0, 1 - (difference / item.historical));
      totalAccuracy += accuracy;
    }
  });
  
  return Math.round((totalAccuracy / historicalData.length) * 100);
};

// Market statistics
// Market statistics
export const marketStats: Record<string, MarketStats> = {
  rice: {
    currentPrice: historicalData.rice[historicalData.rice.length - 1].price,
    change24h: 2.4,
    change7d: -1.2,
    change30d: 5.8,
    volume: 15420,
    marketCap: 2340000,
    aiAccuracy: 87
  },
  durian: {
    currentPrice: historicalData.durian[historicalData.durian.length - 1].price,
    change24h: -0.8,
    change7d: 4.2,
    change30d: 12.5,
    volume: 8950,
    marketCap: 1850000,
    aiAccuracy: 82
  },
  mango: {
    currentPrice: historicalData.mango[historicalData.mango.length - 1].price,
    change24h: 1.8,
    change7d: 2.1,
    change30d: -3.2,
    volume: 12300,
    marketCap: 1920000,
    aiAccuracy: 91
  }
};

// Helper function to get prediction data by time range
export const getPredictionDataByTimeRange = (crop: string, range: string): PredictionData[] => {
  const cropPredictions = predictionData[crop];
  if (!cropPredictions) return [];
  
  // Map time ranges to available prediction data
  switch (range) {
    case '7d':
      return cropPredictions['7d'] || [];
    case '1m':
      return cropPredictions['1m'] || [];
    case '3m':
    case '6m':
    case '1y':
    case 'all':
      return cropPredictions['3m'] || [];
    default:
      return cropPredictions['1m'] || [];
  }
};

// Helper function to get data by time range
export const getDataByTimeRange = (data: PriceData[], range: string): PriceData[] => {
  const baseDate = new Date('2024-12-31'); // Use static reference date
  let startDate: Date;
  
  switch (range) {
    case '7d':
      startDate = subDays(baseDate, 7);
      break;
    case '1m':
      startDate = subDays(baseDate, 30);
      break;
    case '3m':
      startDate = subDays(baseDate, 90);
      break;
    case '6m':
      startDate = subDays(baseDate, 180);
      break;
    case '1y':
      startDate = subDays(baseDate, 365);
      break;
    default:
      return data;
  }
  
  const startDateStr = format(startDate, 'yyyy-MM-dd');
  return data.filter(d => d.date >= startDateStr);
};
