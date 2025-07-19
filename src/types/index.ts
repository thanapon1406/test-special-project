export interface RealPriceData {
  date: string;
  realPrice: number;
}

export interface PriceChartProps {
  data: RealPriceData[];
  color?: string;
  height?: number;
  selectedCrop: string;
  timeRange: string;
}
