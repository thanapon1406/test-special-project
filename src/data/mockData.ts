// Define CropInfo type locally (customize fields as needed)
export type CropInfo = {
  id: string;
  name: string;
  icon: string;
  unit: string;
  color: string;
  description: string;
};

// Define PriceData type here if not exported from '@/types'
export type PriceData = {
  date: string;
  price: number;
  volume?: number;
};

// Define MarketStats type here if not exported from '@/types'
export type MarketStats = {
  currentPrice: number;
  change24h: number;
  change7d: number;
  change30d: number;
  volume: number;
  marketCap: number;
  aiAccuracy: number;
  currentSupply: number;
  supplyStatus: string;
  priceOutlook: string;
};

// Define PredictionData type here if not exported from '@/types'
export type PredictionData = {
  date: string;
  historical: number | null;
  current: number | null;
  predicted: number | null;
  confidence: number;
  estimatedSupply?: number;
  supplyImpact?: number;
  demandTrend?: number;
  average?: number;
  volume?: number;
};
// If FarmerAssistance type is needed, define it here or import from the correct location
// Example definition (customize as needed):
export type FarmerAssistance = {
  alertType: string;
  title: string;
  message: string;
  recommendations: string[];
  timeframe: string;
  severity: string;
};
import { subDays, format, addDays } from 'date-fns';

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

// Seeded random number generator for consistent data
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// Generate mock historical data
// const generatePriceData = (
//   basePrice: number,
//   days: number,
//   volatility: number = 0.1,
//   seed: number = 12345,
// ): PriceData[] => {
//   const data: PriceData[] = [];
//   let currentPrice = basePrice;

//   for (let i = days; i >= 0; i--) {
//     //ออมสินเปลี่ยน เป็นค่าของวันปัจจุบัน
//     const date = format(subDays(new Date(), i), 'yyyy-MM-dd');
//     const change =
//       (seededRandom(seed + i) - 0.5) * 2 * volatility * currentPrice;
//     currentPrice = Math.max(currentPrice + change, basePrice * 0.5);

//     data.push({
//       date,
//       price: Number(currentPrice.toFixed(2)),
//       volume: Math.floor(seededRandom(seed + i + 1000) * 1000) + 500,
//     });
//   }

//   return data;
// };

import { realPriceData } from './realPriceData';
import { demoDataChart } from './demoData';

// Historical price data from real data
export const historicalData: Record<string, PriceData[]> = {
  mangosteen: realPriceData.mangosteen.map((item) => ({
    date: item.date + '-01', // Add day to make it full date
    price: item.price,
    volume: Math.floor(Math.random() * 1000) + 500, // Random volume for visualization
  })),
  durian: realPriceData.durian.map((item) => ({
    date: item.date + '-01',
    price: item.price,
    volume: Math.floor(Math.random() * 1000) + 500,
  })),
  longan: realPriceData.longan.map((item) => ({
    date: item.date + '-01',
    price: item.price,
    volume: Math.floor(Math.random() * 1000) + 500,
  })),
};

// Generate prediction data with overlapping timeline and supply factors
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
  // const basePrice = recentHistorical[recentHistorical.length - 1].price;

  // Calculate average cost based on historical prices (70% of average historical price)
  const averageCost =
    (recentHistorical.reduce((sum, item) => sum + item.price, 0) /
      recentHistorical.length +
      11) *
    0.7;

  // Supply factors based on crop type (simulating market conditions)
  const supplyFactors = {
    mangosteen: { baseSupply: 15000, seasonality: 0.2, volatility: 0.15 },
    durian: { baseSupply: 8000, seasonality: 0.4, volatility: 0.25 },
    longan: { baseSupply: 12000, seasonality: 0.3, volatility: 0.2 },
  };

  const cropSupply =
    supplyFactors[cropType as keyof typeof supplyFactors] ||
    supplyFactors.mangosteen;

  // Add historical data with both current and predicted values for overlap
  recentHistorical.forEach((item, index) => {
    // Generate supply data for historical period
    const daysSinceStart = index - recentHistorical.length + 1;
    const seasonalSupply =
      cropSupply.baseSupply *
      (1 + Math.sin(daysSinceStart / 30) * cropSupply.seasonality);
    const supplyNoise =
      (seededRandom(seed + index + 100) - 0.5) * cropSupply.volatility;
    const estimatedSupply = seasonalSupply * (1 + supplyNoise);

    // Supply impact on price (more supply = lower price)
    const supplyImpact =
      -((estimatedSupply - cropSupply.baseSupply) / cropSupply.baseSupply) *
      0.5;

    // Generate prediction with natural movement but staying within ±20% of actual price
    const maxDeviation = 0.2; // 20% maximum deviation
    const trendFactor = (seededRandom(seed + index) - 0.5) * 0.03; // Increased trend variation
    const volatilityFactor = (seededRandom(seed + index + 100) - 0.5) * 0.06; // More volatility
    const randomOffset = (seededRandom(seed + index + 200) - 0.5) * 0.04; // Larger random offset

    // Calculate prediction with more variations from actual price
    let supplyAdjustedPrice =
      item.price * (1 + trendFactor + volatilityFactor + randomOffset);

    // Add larger oscillation based on day count
    const oscillation = Math.sin(daysSinceStart / 5) * 0.04;
    supplyAdjustedPrice *= 1 + oscillation;

    // Ensure prediction stays within ±20% of actual price
    const minPrice = item.price * (1 - maxDeviation);
    const maxPrice = item.price * (1 + maxDeviation);
    supplyAdjustedPrice = Math.min(
      Math.max(supplyAdjustedPrice, minPrice),
      maxPrice,
    );

    data.push({
      date: item.date,
      historical: item.price,
      current: item.price,
      predicted: Number(supplyAdjustedPrice.toFixed(2)),
      confidence: 0.9,
      estimatedSupply: Number(estimatedSupply.toFixed(0)),
      supplyImpact: Number(supplyImpact.toFixed(3)),
      demandTrend: 1 + (seededRandom(seed + index + 200) - 0.5) * 0.1,
      //ออมสินเพิ่มค่าของ ต้นทุน และ volume
      average: averageCost,
      volume: Number(estimatedSupply.toFixed(0)),
    });
  });

  // Add future predictions starting from the day after last historical
  for (let i = 1; i <= daysAhead; i++) {
    //ออมสินเปลี่ยน เป็นค่าของวันพรุี่งนี้
    const futureDate = addDays(new Date(), 1);
    futureDate.setDate(futureDate.getDate() + i - 1);
    const date = format(futureDate, 'yyyy-MM-dd');

    // Predict future supply (seasonal patterns + random factors)
    const seasonalSupply =
      cropSupply.baseSupply * (1 + Math.sin(i / 30) * cropSupply.seasonality);
    const supplyTrend = 1 + (seededRandom(seed + i + 300) - 0.3) * 0.2; // Slight oversupply trend
    const futureSupply = seasonalSupply * supplyTrend;

    // Calculate supply impact on future prices
    const supplyImpact =
      -((futureSupply - cropSupply.baseSupply) / cropSupply.baseSupply) * 0.6;

    // Use the last historical price as reference for future predictions
    const lastHistoricalPrice =
      recentHistorical[recentHistorical.length - 1].price;

    // Calculate prediction with similar pattern as historical
    const maxDeviation = 0.2; // 20% maximum deviation
    const trendFactor = (seededRandom(seed + i + 1000) - 0.5) * 0.03;
    const volatilityFactor = (seededRandom(seed + i + 2000) - 0.5) * 0.06;
    const randomOffset = (seededRandom(seed + i + 200) - 0.5) * 0.04;
    const demandFactor = 1 + (seededRandom(seed + i + 400) - 0.5) * 0.08;

    // Add oscillation for natural movement
    const oscillation = Math.sin(i / 5) * 0.04;

    // Calculate predicted price with demand factor
    let predicted =
      lastHistoricalPrice *
      (1 + trendFactor + volatilityFactor + randomOffset + oscillation) *
      demandFactor;

    // Ensure prediction stays within ±20% of last historical price
    const minPrice = lastHistoricalPrice * (1 - maxDeviation);
    const maxPrice = lastHistoricalPrice * (1 + maxDeviation);
    predicted = Math.min(Math.max(predicted, minPrice), maxPrice);
    const confidence = Math.max(0.5, 1 - (i / daysAhead) * 0.5);

    data.push({
      date,
      historical: null,
      current: null,
      predicted: Number(predicted.toFixed(2)),
      confidence: Number(confidence.toFixed(2)),
      estimatedSupply: Number(futureSupply.toFixed(0)),
      supplyImpact: Number(supplyImpact.toFixed(3)),
      demandTrend: Number(demandFactor.toFixed(3)),
      //ออมสินเพิ่่ม ค่าของ ต้นทุน
      average: averageCost,
    });
  }

  return data;
};

// Prediction data for different time ranges
export const predictionData: Record<
  string,
  Record<string, PredictionData[]>
> = {
  mangosteen: {
    '7d': generatePredictionData(
      historicalData.mangosteen,
      7,
      7,
      4004,
      'mangosteen',
    ),
    '1m': generatePredictionData(
      historicalData.mangosteen,
      30,
      30,
      4004,
      'mangosteen',
    ),
    '3m': generatePredictionData(
      historicalData.mangosteen,
      90,
      90,
      4004,
      'mangosteen',
    ),
    '6m': generatePredictionData(
      historicalData.mangosteen,
      180,
      180,
      4004,
      'mangosteen',
    ),
    '1y': generatePredictionData(
      historicalData.mangosteen,
      365,
      365,
      4004,
      'mangosteen',
    ),
    all: generatePredictionData(
      historicalData.mangosteen,
      365,
      365,
      4004,
      'mangosteen',
    ),
  },
  durian: {
    '7d': generatePredictionData(historicalData.durian, 7, 7, 5005, 'durian'),
    '1m': generatePredictionData(historicalData.durian, 30, 30, 5005, 'durian'),
    '3m': generatePredictionData(historicalData.durian, 90, 90, 5005, 'durian'),
    '6m': generatePredictionData(
      historicalData.durian,
      180,
      180,
      5005,
      'durian',
    ),
    '1y': generatePredictionData(
      historicalData.durian,
      365,
      365,
      5005,
      'durian',
    ),
    all: generatePredictionData(
      historicalData.durian,
      365,
      365,
      5005,
      'durian',
    ),
  },
  longan: {
    '7d': generatePredictionData(historicalData.longan, 7, 7, 6006, 'longan'),
    '1m': generatePredictionData(historicalData.longan, 30, 30, 6006, 'longan'),
    '3m': generatePredictionData(historicalData.longan, 90, 90, 6006, 'longan'),
    '6m': generatePredictionData(
      historicalData.longan,
      180,
      180,
      6006,
      'longan',
    ),
    '1y': generatePredictionData(
      historicalData.longan,
      365,
      365,
      6006,
      'longan',
    ),
    all: generatePredictionData(
      historicalData.longan,
      365,
      365,
      6006,
      'longan',
    ),
  },
};

// Calculate AI prediction accuracy
export const calculatePredictionAccuracy = (crop: string): number => {
  const cropPredictions = predictionData[crop]['1m'] || [];
  if (!cropPredictions.length) return 0;

  // Calculate accuracy based on how close AI predictions were to actual historical prices
  const historicalData = cropPredictions.filter(
    (item) => item.historical !== null && item.predicted !== null,
  );
  if (!historicalData.length) return 0;

  let totalAccuracy = 0;
  historicalData.forEach((item) => {
    if (item.historical && item.predicted) {
      const difference = Math.abs(item.historical - item.predicted);
      const accuracy = Math.max(0, 1 - difference / item.historical);
      totalAccuracy += accuracy;
    }
  });

  return Math.round((totalAccuracy / historicalData.length) * 100);
};

// Market statistics with supply information
export const marketStats: Record<string, MarketStats> = {
  mangosteen: {
    currentPrice:
      historicalData.mangosteen[historicalData.mangosteen.length - 1].price,
    change24h: 2.4,
    change7d: -1.2,
    change30d: 5.8,
    volume: 15420,
    marketCap: 2340000,
    aiAccuracy: 87,
    currentSupply: 18500, // High supply causing price pressure
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
    aiAccuracy: 82,
    currentSupply: 7200, // Normal supply
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
    aiAccuracy: 91,
    currentSupply: 10800, // Low supply relative to demand
    supplyStatus: 'low',
    priceOutlook: 'bullish',
  },
};

// Helper function to get prediction data by time range
export const getPredictionDataByTimeRange = (
  crop: string,
  range: string,
): PredictionData[] => {
  const cropPredictions = predictionData[crop];

  if (!cropPredictions) return [];

  // Return the specific time range data if it exists
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

// Farmer assistance system - analyzes price trends and provides recommendations
export const getFarmerAssistance = (
  crop: string,
  timeRange: string = '3m',
): FarmerAssistance[] => {
  const stats = marketStats[crop];
  const predictions = getPredictionDataByTimeRange(crop, timeRange);
  const assistance: FarmerAssistance[] = [];

  if (!stats || !predictions.length) return assistance;

  // Calculate average predicted price for next 3 months
  const futurePredictions = predictions.filter(
    (p) => p.predicted !== null && p.historical === null,
  );
  const avgFuturePrice =
    futurePredictions.reduce((sum, p) => sum + (p.predicted || 0), 0) /
    futurePredictions.length;
  const currentPrice = stats.currentPrice;
  const priceChange = ((avgFuturePrice - currentPrice) / currentPrice) * 100;

  // Check for oversupply situation
  if (stats.supplyStatus === 'high' && priceChange < -10) {
    assistance.push({
      alertType: 'warning',
      title: '⚠️ Oversupply Alert: Low Prices Expected',
      message: `Our AI predicts ${crop} prices will drop by ${Math.abs(
        priceChange,
      ).toFixed(1)}% over the next 3 months due to high supply in the market.`,
      recommendations: [
        '🏪 Consider alternative marketing channels (direct sales, farmers markets)',
        '🔄 Explore value-added processing options (dried, canned, preserved)',
        '📦 Investigate storage options to sell when prices recover',
        '🤝 Form cooperatives with other farmers to negotiate better bulk prices',
        '🌱 Consider diversifying crops for next season',
        '💰 Look into government agricultural support programs',
      ],
      timeframe: 'Next 3 months',
      severity: 'high',
    });
  }

  // Check for supply shortage (good for farmers)
  if (stats.supplyStatus === 'low' && priceChange > 5) {
    assistance.push({
      alertType: 'success',
      title: '📈 Market Opportunity: Strong Prices Ahead',
      message: `Great news! ${crop} supply is low and our AI predicts prices will increase by ${priceChange.toFixed(
        1,
      )}% over the next 3 months.`,
      recommendations: [
        '⏰ Hold your inventory if possible - prices are trending upward',
        '🎯 Plan to sell during peak demand periods',
        '📈 Consider premium pricing for high-quality produce',
        '🌟 Market directly to restaurants and premium buyers',
        '📱 Use digital platforms to reach wider customer base',
      ],
      timeframe: 'Next 3 months',
      severity: 'low',
    });
  }

  // General supply-demand insights
  const supplyImpact =
    futurePredictions.reduce((sum, p) => sum + (p.supplyImpact || 0), 0) /
    futurePredictions.length;

  if (Math.abs(supplyImpact) > 0.1) {
    assistance.push({
      alertType: 'info',
      title: '📊 Supply-Demand Analysis',
      message: `Market supply levels are ${
        supplyImpact < 0 ? 'above' : 'below'
      } normal, creating ${
        supplyImpact < 0 ? 'downward' : 'upward'
      } pressure on ${crop} prices.`,
      recommendations: [
        `📊 Current market supply: ${
          stats.currentSupply?.toLocaleString() || 'N/A'
        } kg`,
        `📈 Supply status: ${stats.supplyStatus?.toUpperCase()}`,
        `🔮 Price outlook: ${stats.priceOutlook?.toUpperCase()}`,
        '📱 Use our AI predictions to time your sales optimally',
        '🎯 Focus on quality to command premium prices',
      ],
      timeframe: 'Ongoing',
      severity: 'medium',
    });
  }

  return assistance;
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
