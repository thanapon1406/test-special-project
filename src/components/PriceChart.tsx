'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
  ReferenceArea,
} from 'recharts';
import { PriceData, PredictionData } from '@/types';
import { formatCurrency } from '@/lib/utils';
import { format, isAfter, isBefore, parseISO } from 'date-fns';

interface PriceChartProps {
  data: PriceData[] | PredictionData[];
  color?: string;
  height?: number;
  selectedCrop: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    color: string;
    name: string;
    value: number;
    dataKey: string;
    payload: {
      confidence?: number;
      estimatedSupply?: number;
      supplyImpact?: number;
    };
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length && label) {
    const date = new Date(label);
    const isValidDate = !isNaN(date.getTime());
    const dataPoint = payload[0]?.payload;

    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg max-w-xs">
        <p className="text-sm text-gray-600 mb-2">
          {isValidDate ? format(date, 'MMM dd, yyyy') : label}
        </p>
        {payload
          .filter((entry) => entry.value !== null)
          .map((entry, index: number) => (
            <p
              key={index}
              className="text-sm font-medium"
              style={{ color: entry.color }}
            >
              {entry.name}: {formatCurrency(entry.value)}
              {entry.dataKey === 'predicted' && entry.payload.confidence && (
                <span className="text-xs text-gray-500 ml-2">
                  ({Math.round(entry.payload.confidence * 100)}% confidence)
                </span>
              )}
            </p>
          ))}

        {/* Supply information for prediction data */}
        {dataPoint?.estimatedSupply && (
          <div className="mt-2 pt-2 border-t border-gray-100">
            <p className="text-xs text-gray-500">Supply Analysis:</p>
            <p className="text-xs text-gray-600">
              Est. Supply: {dataPoint.estimatedSupply.toLocaleString()} kg
            </p>
            {dataPoint.supplyImpact && (
              <p className="text-xs text-gray-600">
                Price Impact: {dataPoint.supplyImpact > 0 ? '+' : ''}
                {(dataPoint.supplyImpact * 100).toFixed(1)}%
              </p>
            )}
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default function PriceChart({
  data,
  color = '#10b981',
  height = 300,
  selectedCrop,
}: PriceChartProps) {
  const highlightRange = [
    {
      key: 'Mangosteen',
      from: '2025-05-01', // พฤษภาคม - สิงหาคม (ฤดูกาลมังคุดภาคตะวันออก)
      to: '2025-08-31',
    },
    {
      key: 'Durian',
      from: '2025-04-01', // เมษายน - กรกฎาคม (ฤดูกาลทุเรียนภาคตะวันออก)
      to: '2025-07-31',
    },
    {
      key: 'Longan',
      from: '2025-07-01', // กรกฎาคม - กันยายน (ฤดูกาลลำไยภาคเหนือ)
      to: '2025-09-30',
    },
  ];

  // สร้างช่วงของกราฟตอนนี้ (จาก data ที่กราฟแสดงอยู่)
  const chartStart = parseISO(data[0].date);
  const chartEnd = parseISO(data[data.length - 1].date);

  const cropRange = highlightRange.find((range) => range.key === selectedCrop);

  const highlightStart = cropRange ? parseISO(cropRange.from) : null;
  const highlightEnd = cropRange ? parseISO(cropRange.to) : null;

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
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickFormatter={formatXAxisLabel}
            stroke="#6b7280"
          />

          <YAxis
            yAxisId="left"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `฿${value}`}
            stroke="#6b7280"
          />

          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 100000]} // 👈 บังคับแกน y ด้านขวา (bar chart)
            tickFormatter={(value) => `${value.toLocaleString()} kg`}
            tick={{ fontSize: 12 }}
            stroke="#6366f1"
            hide={true} // 👈 ซ่อนไว้
          />

          <Tooltip content={<CustomTooltip />} />
          <Legend />

          {cropRange &&
            highlightStart &&
            highlightEnd &&
            (() => {
              const isOverlap =
                isBefore(highlightStart, chartEnd) &&
                isAfter(highlightEnd, chartStart);

              // ปรับ refArea ให้ "ตัดทอน" ตามกราฟ
              const refAreaX1 = isBefore(highlightStart, chartStart)
                ? data[0].date // ถ้าเริ่มก่อนกราฟ ให้ใช้จุดแรกของกราฟ
                : cropRange.from;

              const refAreaX2 = isAfter(highlightEnd, chartEnd)
                ? data[data.length - 1].date // ถ้าสิ้นสุดหลังกราฟ ให้ใช้จุดสุดท้ายของกราฟ
                : cropRange.to;

              const cropColorMap: Record<string, string> = {
                Mangosteen: '#ba68c8',
                Durian: '#fff176',
                Longan: '#ffd54f',
              };

              return isOverlap ? (
                <ReferenceArea
                  x1={refAreaX1}
                  x2={refAreaX2}
                  yAxisId="left"
                  fill={cropColorMap[selectedCrop] || '#e0e0e0'}
                  fillOpacity={0.2}
                />
              ) : null;
            })()}

          <Bar
            dataKey="volume"
            yAxisId="right" // 👈 แกนขวา
            barSize={50}
            fill="#6366f1"
            name="Volume"
          />
          {/* Always show both historical and prediction lines for merged view */}
          <Line
            type="monotone"
            dataKey="current"
            stroke={color}
            yAxisId="left"
            strokeWidth={2}
            dot={false}
            name="Historical Price"
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#ff6b6b"
            yAxisId="left"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
            name="AI Prediction"
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="average"
            yAxisId="left"
            stroke="#4fc3f7"
            strokeWidth={2}
            dot={false}
            name="Average Cost"
            connectNulls={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
