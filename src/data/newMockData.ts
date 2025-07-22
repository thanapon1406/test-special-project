import {
  CropInfo,
  PriceData,
  PredictionData,
  MarketStats,
} from '@/types';
import { subDays, format } from 'date-fns';
import { realPriceData } from './realPriceData';

// Seeded random number generator for consistent data
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Crop information
export const crops: Record<string, CropInfo> = {
  mangosteen: {
    id: 'mangosteen',
    name: 'Mangosteen',
    icon: 'mangosteen-svgrepo-com.svg',
    unit: 'per kg',
    color: '#10b981',
    description: 'Queen of Fruits',
  },
  durian: {
    id: 'durian',
    name: 'Durian',
    icon: 'durian-svgrepo-com.svg',
    unit: 'per kg',
    color: '#f59e0b',
    description: 'King of fruits',
  },
  longan: {
    id: 'longan',
    name: 'Longan',
    icon: 'longan-svgrepo-com.svg',
    unit: 'per kg',
    color: '#ef4444',
    description: 'Dragon Eye Fruit',
  },
};

// Historical price data from real data
export const historicalData: Record<string, PriceData[]> = {
  mangosteen: realPriceData.mangosteen.map(item => ({
    date: item.date + "-01", // Add day to make it full date
    price: item.price,
    volume: Math.floor(Math.random() * 1000) + 500 // Random volume for visualization
  })),
  durian: realPriceData.durian.map(item => ({
    date: item.date + "-01",
    price: item.price,
    volume: Math.floor(Math.random() * 1000) + 500
  })),
  longan: realPriceData.longan.map(item => ({
    date: item.date + "-01",
    price: item.price,
    volume: Math.floor(Math.random() * 1000) + 500
  }))
};

// Generate prediction data with overlapping timeline
const generatePredictionData = (
  historical: PriceData[],
  daysHistorical: number = 30,
  daysAhead: number = 30,
  seed: number = 5555,
  cropType: string = 'mangosteen',
): PredictionData[] => {
  const data: PredictionData[] = [];

  // Get the specified number of days of historical data
  const recentHistorical = historical.slice(-daysHistorical);
  const lastPrice = recentHistorical[recentHistorical.length - 1].price;

  // Calculate average cost based on crop type and historical prices
  const costFactors = {
    mangosteen: 0.65, // มังคุด - ต้นทุนประมาณ 65% ของราคาขาย
    durian: 0.60,    // ทุเรียน - ต้นทุนประมาณ 60% ของราคาขาย
    longan: 0.70     // ลำไย - ต้นทุนประมาณ 70% ของราคาขาย
  };
  const costFactor = costFactors[cropType as keyof typeof costFactors] || 0.65;
  const averageCost = (recentHistorical.reduce((sum, item) => sum + item.price, 0) / recentHistorical.length) * costFactor;

  // Add historical data with both current and predicted values for overlap
  recentHistorical.forEach((item, index) => {
    // Generate prediction with natural movement but staying within ±20% of actual price
    const maxDeviation = 0.20; // 20% maximum deviation
    const trendFactor = (seededRandom(seed + index) - 0.5) * 0.03;
    const volatilityFactor = (seededRandom(seed + index + 100) - 0.5) * 0.06;
    const randomOffset = (seededRandom(seed + index + 200) - 0.5) * 0.04;
    const daysSinceStart = index - recentHistorical.length + 1;
    
    // Calculate prediction with variations from actual price
    let predictedPrice = item.price * (1 + trendFactor + volatilityFactor + randomOffset);
    
    // Add oscillation based on day count
    const oscillation = Math.sin(daysSinceStart / 5) * 0.04;
    predictedPrice *= (1 + oscillation);
    
    // Ensure prediction stays within ±20% of actual price
    const minPrice = item.price * (1 - maxDeviation);
    const maxPrice = item.price * (1 + maxDeviation);
    predictedPrice = Math.min(Math.max(predictedPrice, minPrice), maxPrice);

    data.push({
      date: item.date,
      historical: item.price,
      current: item.price,
      predicted: Number(predictedPrice.toFixed(2)),
      confidence: Number((marketStats[cropType]?.aiAccuracy || 85) / 100),
      estimatedSupply: Math.floor(Math.random() * 1000) + 500,
      supplyImpact: Number((Math.random() * 0.2 - 0.1).toFixed(3)),
      demandTrend: 1 + (seededRandom(seed + index + 200) - 0.5) * 0.1,
      average: averageCost,
      volume: item.volume
    });
  });

  // Add future predictions
  for (let i = 1; i <= daysAhead; i++) {
    const futureDate = new Date(recentHistorical[recentHistorical.length - 1].date);
    futureDate.setMonth(futureDate.getMonth() + 1);
    const date = format(futureDate, 'yyyy-MM-dd');

    // Calculate prediction with similar pattern as historical
    const maxDeviation = 0.20; // 20% maximum deviation
    const trendFactor = (seededRandom(seed + i + 1000) - 0.5) * 0.03;
    const volatilityFactor = (seededRandom(seed + i + 2000) - 0.5) * 0.06;
    const randomOffset = (seededRandom(seed + i + 200) - 0.5) * 0.04;
    const demandFactor = 1 + (seededRandom(seed + i + 400) - 0.5) * 0.08;
    
    // Add oscillation for natural movement
    const oscillation = Math.sin(i / 5) * 0.04;
    
    // Calculate predicted price with demand factor
    let predicted = lastPrice * (1 + trendFactor + volatilityFactor + randomOffset + oscillation) * demandFactor;
    
    // Ensure prediction stays within ±20% of last price
    const minPrice = lastPrice * (1 - maxDeviation);
    const maxPrice = lastPrice * (1 + maxDeviation);
    predicted = Math.min(Math.max(predicted, minPrice), maxPrice);

    data.push({
      date,
      historical: null,
      current: null,
      predicted: Number(predicted.toFixed(2)),
      confidence: Number(((marketStats[cropType]?.aiAccuracy || 85) / 100 * (1 - (i / daysAhead) * 0.4)).toFixed(2)),
      estimatedSupply: Math.floor(Math.random() * 1000) + 500,
      supplyImpact: Number((Math.random() * 0.2 - 0.1).toFixed(3)),
      demandTrend: Number(demandFactor.toFixed(3)),
      average: averageCost
    });
  }

  return data;
};

// Prediction data for different time ranges
export const predictionData: Record<string, Record<string, PredictionData[]>> = {
  mangosteen: {
    '7d': generatePredictionData(historicalData.mangosteen, 7, 7, 4004, 'mangosteen'),
    '1m': generatePredictionData(historicalData.mangosteen, 30, 30, 4004, 'mangosteen'),
    '3m': generatePredictionData(historicalData.mangosteen, 90, 90, 4004, 'mangosteen'),
    '6m': generatePredictionData(historicalData.mangosteen, 180, 180, 4004, 'mangosteen'),
    '1y': generatePredictionData(historicalData.mangosteen, 365, 365, 4004, 'mangosteen'),
    'all': generatePredictionData(historicalData.mangosteen, 365, 365, 4004, 'mangosteen'),
  },
  durian: {
    '7d': generatePredictionData(historicalData.durian, 7, 7, 5005, 'durian'),
    '1m': generatePredictionData(historicalData.durian, 30, 30, 5005, 'durian'),
    '3m': generatePredictionData(historicalData.durian, 90, 90, 5005, 'durian'),
    '6m': generatePredictionData(historicalData.durian, 180, 180, 5005, 'durian'),
    '1y': generatePredictionData(historicalData.durian, 365, 365, 5005, 'durian'),
    'all': generatePredictionData(historicalData.durian, 365, 365, 5005, 'durian'),
  },
  longan: {
    '7d': generatePredictionData(historicalData.longan, 7, 7, 6006, 'longan'),
    '1m': generatePredictionData(historicalData.longan, 30, 30, 6006, 'longan'),
    '3m': generatePredictionData(historicalData.longan, 90, 90, 6006, 'longan'),
    '6m': generatePredictionData(historicalData.longan, 180, 180, 6006, 'longan'),
    '1y': generatePredictionData(historicalData.longan, 365, 365, 6006, 'longan'),
    'all': generatePredictionData(historicalData.longan, 365, 365, 6006, 'longan'),
  },
};

// Helper function to get prediction data by time range
export const getPredictionDataByTimeRange = (
  crop: string,
  range: string,
): PredictionData[] => {
  const cropPredictions = predictionData[crop];
  if (!cropPredictions) return [];
  return cropPredictions[range] || [];
};

// Helper function to get data by time range
export const getDataByTimeRange = (
  data: PriceData[],
  range: string,
): PriceData[] => {
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
  return data.filter((d) => d.date >= startDateStr);
};

// Calculate AI prediction accuracy based on historical predictions vs actual prices
const calculatePredictionAccuracy = (crop: string): number => {
  // Get 3-month prediction data for accuracy calculation
  const predictions = predictionData[crop]['3m'] || [];
  if (!predictions.length) return 0;

  // Filter only historical data where we have both predicted and actual prices
  const historicalPredictions = predictions.filter(
    (item) => item.historical !== null && item.predicted !== null
  );
  if (!historicalPredictions.length) return 0;

  let totalAccuracy = 0;
  let count = 0;

  historicalPredictions.forEach((item) => {
    if (item.historical && item.predicted) {
      // Calculate percentage difference between predicted and actual
      const difference = Math.abs(item.historical - item.predicted);
      const percentageDiff = (difference / item.historical) * 100;
      
      // Convert difference to accuracy score (0-100%)
      // If difference is more than 20%, accuracy is 0
      // If difference is 0%, accuracy is 100%
      const accuracy = Math.max(0, 100 - (percentageDiff * 5));
      
      totalAccuracy += accuracy;
      count++;
    }
  });

  // Return average accuracy rounded to nearest integer
  return Math.round(totalAccuracy / count);
};

// Market statistics with supply information and calculated AI accuracy
export const marketStats: Record<string, MarketStats> = {
  mangosteen: {
    currentPrice: historicalData.mangosteen[historicalData.mangosteen.length - 1].price,
    change24h: 2.4,
    change7d: -1.2,
    change30d: 5.8,
    volume: 15420,
    marketCap: 2340000,
    aiAccuracy: calculatePredictionAccuracy('mangosteen'),
    currentSupply: 18500,
    supplyStatus: 'high',
    priceOutlook: 'bearish',
  },
  durian: {
    currentPrice: historicalData.durian[historicalData.durian.length - 1].price,
    change24h: -0.8,
    change7d: 4.2,
    change30d: 12.5,
    volume: 8950,
    marketCap: 1850000,
    aiAccuracy: calculatePredictionAccuracy('durian'),
    currentSupply: 7200,
    supplyStatus: 'normal',
    priceOutlook: 'neutral',
  },
  longan: {
    currentPrice: historicalData.longan[historicalData.longan.length - 1].price,
    change24h: 1.8,
    change7d: 2.1,
    change30d: -3.2,
    volume: 12300,
    marketCap: 1920000,
    aiAccuracy: calculatePredictionAccuracy('longan'),
    currentSupply: 10800,
    supplyStatus: 'low',
    priceOutlook: 'bullish',
  },
};

// Get current market conditions summary
export const getMarketConditions = (crop: string) => {
  const stats = marketStats[crop];
  const predictions = getPredictionDataByTimeRange(crop, '3m');

  if (!stats || !predictions.length) return null;

  const futurePredictions = predictions.filter(
    (p) => p.predicted !== null && p.historical === null,
  );
  const avgSupplyImpact =
    futurePredictions.reduce((sum, p) => sum + (p.supplyImpact || 0), 0) /
    futurePredictions.length;

  return {
    supplyLevel: stats.currentSupply,
    supplyStatus: stats.supplyStatus,
    supplyImpact: avgSupplyImpact,
    priceOutlook: stats.priceOutlook,
    avgFuturePrice:
      futurePredictions.reduce((sum, p) => sum + (p.predicted || 0), 0) /
      futurePredictions.length,
  };
};
