import { CropInfo, PriceData, PredictionData, MarketStats, FarmerAssistance } from '@/types';
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

// Generate prediction data with overlapping timeline and supply factors
const generatePredictionData = (historical: PriceData[], daysHistorical: number = 30, daysAhead: number = 30, seed: number = 5555, cropType: string = 'rice'): PredictionData[] => {
  const data: PredictionData[] = [];
  
  // Get the specified number of days of historical data
  const recentHistorical = historical.slice(-daysHistorical);
  const basePrice = recentHistorical[recentHistorical.length - 1].price;
  
  // Supply factors based on crop type (simulating market conditions)
  const supplyFactors = {
    rice: { baseSupply: 15000, seasonality: 0.2, volatility: 0.15 },
    durian: { baseSupply: 8000, seasonality: 0.4, volatility: 0.25 },
    mango: { baseSupply: 12000, seasonality: 0.3, volatility: 0.20 }
  };
  
  const cropSupply = supplyFactors[cropType as keyof typeof supplyFactors] || supplyFactors.rice;
  
  // Add historical data with both current and predicted values for overlap
  recentHistorical.forEach((item, index) => {
    // Generate supply data for historical period
    const daysSinceStart = index - recentHistorical.length + 1;
    const seasonalSupply = cropSupply.baseSupply * (1 + Math.sin(daysSinceStart / 30) * cropSupply.seasonality);
    const supplyNoise = (seededRandom(seed + index + 100) - 0.5) * cropSupply.volatility;
    const estimatedSupply = seasonalSupply * (1 + supplyNoise);
    
    // Supply impact on price (more supply = lower price)
    const supplyImpact = -((estimatedSupply - cropSupply.baseSupply) / cropSupply.baseSupply) * 0.5;
    
    // Generate "what AI would have predicted" for this historical point
    const trendFactor = (seededRandom(seed + index) - 0.4) * 0.02;
    const supplyAdjustedPrice = basePrice * (1 + (trendFactor * Math.abs(daysSinceStart)) + supplyImpact);
    
    data.push({
      date: item.date,
      historical: item.price,
      current: item.price,
      predicted: Number(supplyAdjustedPrice.toFixed(2)),
      confidence: 0.9,
      estimatedSupply: Number(estimatedSupply.toFixed(0)),
      supplyImpact: Number(supplyImpact.toFixed(3)),
      demandTrend: 1 + (seededRandom(seed + index + 200) - 0.5) * 0.1
    });
  });
  
  // Add future predictions starting from the day after last historical
  for (let i = 1; i <= daysAhead; i++) {
    const futureDate = new Date('2025-01-01');
    futureDate.setDate(futureDate.getDate() + i - 1);
    const date = format(futureDate, 'yyyy-MM-dd');
    
    // Predict future supply (seasonal patterns + random factors)
    const seasonalSupply = cropSupply.baseSupply * (1 + Math.sin(i / 30) * cropSupply.seasonality);
    const supplyTrend = 1 + (seededRandom(seed + i + 300) - 0.3) * 0.2; // Slight oversupply trend
    const futureSupply = seasonalSupply * supplyTrend;
    
    // Calculate supply impact on future prices
    const supplyImpact = -((futureSupply - cropSupply.baseSupply) / cropSupply.baseSupply) * 0.6;
    
    // Create realistic future predictions with supply factors
    const trendFactor = (seededRandom(seed + i + 1000) - 0.4) * 0.03;
    const volatilityFactor = (seededRandom(seed + i + 2000) - 0.5) * 0.05;
    const demandFactor = 1 + (seededRandom(seed + i + 400) - 0.5) * 0.15;
    
    const predicted = basePrice * (1 + (trendFactor * i) + volatilityFactor + supplyImpact) * demandFactor;
    const confidence = Math.max(0.5, 1 - (i / daysAhead) * 0.5);
    
    data.push({
      date,
      historical: null,
      current: null,
      predicted: Number(predicted.toFixed(2)),
      confidence: Number(confidence.toFixed(2)),
      estimatedSupply: Number(futureSupply.toFixed(0)),
      supplyImpact: Number(supplyImpact.toFixed(3)),
      demandTrend: Number(demandFactor.toFixed(3))
    });
  }
  
  return data;
};

// Prediction data for different time ranges
export const predictionData: Record<string, Record<string, PredictionData[]>> = {
  rice: {
    '7d': generatePredictionData(historicalData.rice, 7, 7, 4004, 'rice'),
    '1m': generatePredictionData(historicalData.rice, 30, 30, 4004, 'rice'),
    '3m': generatePredictionData(historicalData.rice, 90, 90, 4004, 'rice'),
  },
  durian: {
    '7d': generatePredictionData(historicalData.durian, 7, 7, 5005, 'durian'),
    '1m': generatePredictionData(historicalData.durian, 30, 30, 5005, 'durian'),
    '3m': generatePredictionData(historicalData.durian, 90, 90, 5005, 'durian'),
  },
  mango: {
    '7d': generatePredictionData(historicalData.mango, 7, 7, 6006, 'mango'),
    '1m': generatePredictionData(historicalData.mango, 30, 30, 6006, 'mango'),
    '3m': generatePredictionData(historicalData.mango, 90, 90, 6006, 'mango'),
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

// Market statistics with supply information
export const marketStats: Record<string, MarketStats> = {
  rice: {
    currentPrice: historicalData.rice[historicalData.rice.length - 1].price,
    change24h: 2.4,
    change7d: -1.2,
    change30d: 5.8,
    volume: 15420,
    marketCap: 2340000,
    aiAccuracy: 87,
    currentSupply: 18500, // High supply causing price pressure
    supplyStatus: 'high',
    priceOutlook: 'bearish'
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
    priceOutlook: 'neutral'
  },
  mango: {
    currentPrice: historicalData.mango[historicalData.mango.length - 1].price,
    change24h: 1.8,
    change7d: 2.1,
    change30d: -3.2,
    volume: 12300,
    marketCap: 1920000,
    aiAccuracy: 91,
    currentSupply: 10800, // Low supply relative to demand
    supplyStatus: 'low',
    priceOutlook: 'bullish'
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

// Farmer assistance system - analyzes price trends and provides recommendations
export const getFarmerAssistance = (crop: string, timeRange: string = '3m'): FarmerAssistance[] => {
  const stats = marketStats[crop];
  const predictions = getPredictionDataByTimeRange(crop, timeRange);
  const assistance: FarmerAssistance[] = [];
  
  if (!stats || !predictions.length) return assistance;
  
  // Calculate average predicted price for next 3 months
  const futurePredictions = predictions.filter(p => p.predicted !== null && p.historical === null);
  const avgFuturePrice = futurePredictions.reduce((sum, p) => sum + (p.predicted || 0), 0) / futurePredictions.length;
  const currentPrice = stats.currentPrice;
  const priceChange = ((avgFuturePrice - currentPrice) / currentPrice) * 100;
  
  // Check for oversupply situation
  if (stats.supplyStatus === 'high' && priceChange < -10) {
    assistance.push({
      alertType: 'warning',
      title: '⚠️ Oversupply Alert: Low Prices Expected',
      message: `Our AI predicts ${crop} prices will drop by ${Math.abs(priceChange).toFixed(1)}% over the next 3 months due to high supply in the market.`,
      recommendations: [
        '🏪 Consider alternative marketing channels (direct sales, farmers markets)',
        '🔄 Explore value-added processing options (dried, canned, preserved)',
        '📦 Investigate storage options to sell when prices recover',
        '🤝 Form cooperatives with other farmers to negotiate better bulk prices',
        '🌱 Consider diversifying crops for next season',
        '💰 Look into government agricultural support programs'
      ],
      timeframe: 'Next 3 months',
      severity: 'high'
    });
  }
  
  // Check for supply shortage (good for farmers)
  if (stats.supplyStatus === 'low' && priceChange > 5) {
    assistance.push({
      alertType: 'success',
      title: '📈 Market Opportunity: Strong Prices Ahead',
      message: `Great news! ${crop} supply is low and our AI predicts prices will increase by ${priceChange.toFixed(1)}% over the next 3 months.`,
      recommendations: [
        '⏰ Hold your inventory if possible - prices are trending upward',
        '🎯 Plan to sell during peak demand periods',
        '📈 Consider premium pricing for high-quality produce',
        '🌟 Market directly to restaurants and premium buyers',
        '📱 Use digital platforms to reach wider customer base'
      ],
      timeframe: 'Next 3 months',
      severity: 'low'
    });
  }
  
  // General supply-demand insights
  const supplyImpact = futurePredictions.reduce((sum, p) => sum + (p.supplyImpact || 0), 0) / futurePredictions.length;
  
  if (Math.abs(supplyImpact) > 0.1) {
    assistance.push({
      alertType: 'info',
      title: '📊 Supply-Demand Analysis',
      message: `Market supply levels are ${supplyImpact < 0 ? 'above' : 'below'} normal, creating ${supplyImpact < 0 ? 'downward' : 'upward'} pressure on ${crop} prices.`,
      recommendations: [
        `📊 Current market supply: ${stats.currentSupply?.toLocaleString() || 'N/A'} kg`,
        `📈 Supply status: ${stats.supplyStatus?.toUpperCase()}`,
        `🔮 Price outlook: ${stats.priceOutlook?.toUpperCase()}`,
        '📱 Use our AI predictions to time your sales optimally',
        '🎯 Focus on quality to command premium prices'
      ],
      timeframe: 'Ongoing',
      severity: 'medium'
    });
  }
  
  return assistance;
};

// Get current market conditions summary
export const getMarketConditions = (crop: string) => {
  const stats = marketStats[crop];
  const predictions = getPredictionDataByTimeRange(crop, '3m');
  
  if (!stats || !predictions.length) return null;
  
  const futurePredictions = predictions.filter(p => p.predicted !== null && p.historical === null);
  const avgSupplyImpact = futurePredictions.reduce((sum, p) => sum + (p.supplyImpact || 0), 0) / futurePredictions.length;
  
  return {
    supplyLevel: stats.currentSupply,
    supplyStatus: stats.supplyStatus,
    supplyImpact: avgSupplyImpact,
    priceOutlook: stats.priceOutlook,
    avgFuturePrice: futurePredictions.reduce((sum, p) => sum + (p.predicted || 0), 0) / futurePredictions.length
  };
};
