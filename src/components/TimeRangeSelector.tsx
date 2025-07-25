'use client';

import { cn } from '@/lib/utils';

export type TimeRange = '3m' | '6m' | '1y' | '2y' | '3y' | 'all';
interface TimeRangeSelectorProps {
  selectedRange: TimeRange;
  onRangeChange: (range: TimeRange) => void;
}

const timeRanges: { value: TimeRange; label: string }[] = [
  { value: '3m', label: '3M' },
  { value: '6m', label: '6M' },
  { value: '1y', label: '1Y' },
  { value: '2y', label: '2Y' },
  { value: '3y', label: '3Y' },
];

export default function TimeRangeSelector({
  selectedRange,
  onRangeChange,
}: TimeRangeSelectorProps) {
  return (
    <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
      {timeRanges.map((range) => (
        <button
          key={range.value}
          onClick={() => onRangeChange(range.value)}
          className={cn(
            'px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
            selectedRange === range.value
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
          )}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}
