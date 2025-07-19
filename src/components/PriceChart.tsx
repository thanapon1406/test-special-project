'use client';

import { useMemo } from 'react';
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
  data: PriceData[];
  color?: string;
  height?: number;
  selectedCrop: string;
  timeRange: string; // เพิ่ม timeRange
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
      realPrice?: number;
    };
  }>;
  label?: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length && label) {
    const date = new Date(label);
    const isValidDate = !isNaN(date.getTime());
    const dataPoint = payload[0]?.payload;

    // แปลงวันที่เป็นภาษาอังกฤษ
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];

    const formatEnglishDate = (date: Date) => {
      return `${months[date.getMonth()]} ${date.getFullYear()}`;
    };

    return (
      <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg max-w-xs">
        <p className="text-sm text-gray-600 mb-2">
          {isValidDate ? formatEnglishDate(date) : label}
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

// ข้อมูลราคาจริงจาก table3.csv ปี 2568 (เรียงจากปัจจุบันย้อนหลัง)
const realPriceData = {
  mangosteen: [
    { date: '2025-07-01', price: 42.5 },
    { date: '2025-06-01', price: 47.5 },
    { date: '2025-05-01', price: 47.5 },
    { date: '2025-04-01', price: 42.5 },
    { date: '2025-03-01', price: 37.5 },
    { date: '2025-02-01', price: 37.5 },
    { date: '2025-01-01', price: 42.5 },
  ],
  durian: [
    { date: '2025-07-01', price: 115 },
    { date: '2025-06-01', price: 125 },
    { date: '2025-05-01', price: 135 },
    { date: '2025-04-01', price: 145 },
    { date: '2025-03-01', price: 135 },
    { date: '2025-02-01', price: 125 },
    { date: '2025-01-01', price: 115 },
  ],
  longan: [
    { date: '2025-07-01', price: 37.5 },
    { date: '2025-06-01', price: 42.5 },
    { date: '2025-05-01', price: 37.5 },
    { date: '2025-04-01', price: 32.5 },
    { date: '2025-03-01', price: 32.5 },
    { date: '2025-02-01', price: 27.5 },
    { date: '2025-01-01', price: 27.5 },
  ]
};

export default function PriceChart({
  data,
  color = '#10b981',
  height = 300,
  selectedCrop,
  timeRange,
}: PriceChartProps) {
  const highlightRange = [
    {
      key: 'Mangosteen',
      from: '2025-05-01', // พฤษภาคม - สิงหาคม (ช่วงที่ราคามังคุดสูงในปี 68)
      to: '2025-08-31',
    },
    {
      key: 'Durian',
      from: '2025-04-01', // เมษายน - กรกฎาคม (ช่วงที่ราคาทุเรียนสูงในปี 68)
      to: '2025-07-31',
    },
    {
      key: 'Longan',
      from: '2025-06-01', // มิถุนายน - กันยายน (ช่วงที่ราคาลำไยสูงในปี 68)
      to: '2025-09-30',
    },
  ];

  // ฟังก์ชันสำหรับดึงข้อมูลราคาจริง
  const getRealPrice = (date: string, crop: string) => {
    const cropData = realPriceData[crop.toLowerCase() as keyof typeof realPriceData];
    if (!cropData) return null;

    // หาข้อมูลที่ใกล้เคียงที่สุด
    const priceData = cropData.find(d => {
      const dataDate = parseISO(d.date);
      const targetDate = parseISO(date);
      return format(dataDate, 'yyyy-MM') === format(targetDate, 'yyyy-MM');
    });

    return priceData?.price || null;
  };

  // ฟังก์ชันสำหรับกรองข้อมูลตามจำนวนเดือนย้อนหลัง
  const filterDataByMonths = (data: PriceData[], months: number) => {
    const currentDate = new Date('2025-07-01'); // เดือนปัจจุบัน
    const startDate = new Date(currentDate);
    startDate.setMonth(startDate.getMonth() - (months - 1)); // ลบเดือนตามที่ต้องการย้อนหลัง

    return data.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= currentDate;
    });
  };

  // เพิ่มข้อมูลราคาจริงและกรองตาม timeRange
  const enrichedData = useMemo(() => {
    let filteredData = [...data];
    
    // กรองข้อมูลตาม timeRange
    if (timeRange === '1M') {
      filteredData = filterDataByMonths(data, 1);
    } else if (timeRange === '3M') {
      filteredData = filterDataByMonths(data, 3);
    } else if (timeRange === '6M') {
      filteredData = filterDataByMonths(data, 6);
    }

    // เพิ่มข้อมูลราคาจริง
    return filteredData.map(item => ({
      ...item,
      realPrice: getRealPrice(item.date, selectedCrop)
    }));
  }, [data, selectedCrop, timeRange]);

  // สร้างช่วงของกราฟ
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
      // แสดงชื่อเดือนภาษาอังกฤษแบบย่อ
      const months = [
        'Jan', 'Feb', 'Mar', 'Apr',
        'May', 'Jun', 'Jul', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
      ];
      return months[date.getMonth()];
    } catch {
      return dateStr;
    }
  };

  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={enrichedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickFormatter={formatXAxisLabel}
            stroke="#6b7280"
            interval={0}  // แสดงทุกเดือน
            padding={{ left: 20, right: 20 }}
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
            domain={[0, 100000]}
            tickFormatter={(value) => `${value.toLocaleString()} kg`}
            tick={{ fontSize: 12 }}
            stroke="#6366f1"
            hide={true}
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

              const refAreaX1 = isBefore(highlightStart, chartStart)
                ? enrichedData[0].date
                : cropRange.from;

              const refAreaX2 = isAfter(highlightEnd, chartEnd)
                ? enrichedData[enrichedData.length - 1].date
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
            yAxisId="right"
            barSize={10}
            fill="#6366f1"
            name="Volume"
          />
          
          {/* ซ่อนกราฟอื่นๆ ไว้ก่อน */}
          {/* <Line
            type="monotone"
            dataKey="current"
            stroke={color}
            yAxisId="left"
            strokeWidth={1}
            strokeOpacity={0.5}
            dot={false}
            name="Historical Price"
            connectNulls={false}
          />
          <Line
            type="monotone"
            dataKey="predicted"
            stroke="#ff6b6b"
            yAxisId="left"
            strokeWidth={1}
            strokeOpacity={0.5}
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
            strokeWidth={1}
            strokeOpacity={0.5}
            dot={false}
            name="Average Cost"
            connectNulls={false}
          /> */}
          
          {/* แสดงเฉพาะเส้นราคาจริง */}
          <Line
            type="monotone"
            dataKey="realPrice"
            stroke="#2196f3"
            yAxisId="left"
            strokeWidth={3}
            dot={{ 
              r: 6, 
              fill: '#2196f3',
              strokeWidth: 2,
              stroke: '#ffffff'
            }}
            activeDot={{ 
              r: 8,
              stroke: '#2196f3',
              strokeWidth: 2,
              fill: '#ffffff'
            }}
            name="Real Price"
            connectNulls={true}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
