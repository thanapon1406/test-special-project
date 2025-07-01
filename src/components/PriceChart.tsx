'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PriceData, PredictionData } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { format } from 'date-fns';

interface PriceChartProps {
  data: PriceData[] | PredictionData[];
  color?: string;
  height?: number;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    color: string;
    name: string;
    value: number;
    dataKey: string;
    payload: { confidence?: number };
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length && label) {
    const date = new Date(label);
    const isValidDate = !isNaN(date.getTime());
    
    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-sm text-gray-600 mb-2">
          {isValidDate ? format(date, 'MMM dd, yyyy') : label}
        </p>
        {payload.filter(entry => entry.value !== null).map((entry, index: number) => (
          <p key={index} className="text-sm font-medium" style={{ color: entry.color }}>
            {entry.name}: {formatCurrency(entry.value)}
            {entry.dataKey === 'predicted' && entry.payload.confidence && (
              <span className="text-xs text-gray-500 ml-2">
                ({Math.round(entry.payload.confidence * 100)}% confidence)
              </span>
            )}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function PriceChart({ data, color = '#10b981', height = 300 }: PriceChartProps) {
  const formatXAxisLabel = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        return dateStr;
      }
      return format(date, 'MMM dd');
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            tickFormatter={formatXAxisLabel}
            stroke="#6b7280"
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `฿${value}`}
            stroke="#6b7280"
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          
          {/* Always show both historical and prediction lines for merged view */}
          <Line
            type="monotone"
            dataKey="current"
            stroke={color}
            strokeWidth={2}
            dot={false}
            name="Historical Price"
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#ff6b6b"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="AI Prediction"
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
