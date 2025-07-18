export interface PriceData {
  date: string;
  price: number;
  volume?: number;
}

export interface CropInfo {
  id: string;
  name: string;
  icon: string;
  unit: string;
  color: string;
  description: string;
}

export interface PredictionData {
  date: string;
  historical: number | null;
  current: number | null;
  predicted: number | null;
  confidence: number;
  // New parameters for supply-demand prediction
  estimatedSupply?: number; // Amount of product in market (kg)
  supplyImpact?: number; // How supply affects price (-1 to 1)
  demandTrend?: number; // Demand trend factor
  average?: number;
  volume?: number;
}

export interface MarketStats {
  currentPrice: number;
  change24h: number;
  change7d: number;
  change30d: number;
  volume: number;
  marketCap: number;
  aiAccuracy?: number;
  // New fields for inventory impact
  currentSupply?: number;
  supplyStatus?: 'low' | 'normal' | 'high';
  priceOutlook?: 'bullish' | 'neutral' | 'bearish';
}

// New interface for farmer assistance
export interface FarmerAssistance {
  alertType: 'warning' | 'info' | 'success';
  title: string;
  message: string;
  recommendations: string[];
  timeframe: string;
  severity: 'low' | 'medium' | 'high';
}

export type TimeRange = '7d' | '1m' | '3m' | '6m' | '1y' | 'all';

export type CropType = 'mangosteen' | 'durian' | 'longan';
