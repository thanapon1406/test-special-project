'use client';

import { useState, useEffect } from 'react';
import { CropType, TimeRange } from '@/types';
import { crops, marketStats, getPredictionDataByTimeRange, getFarmerAssistance } from '@/data/mockData';
import PriceChart from '@/components/PriceChart';
import MarketStatsCard from '@/components/MarketStatsCard';
import TimeRangeSelector from '@/components/TimeRangeSelector';
import FarmerAlerts from '@/components/FarmerAlerts';
import FruitIcon from '@/components/FruitIcon';
import { TrendingUp, Calendar } from 'lucide-react';

export default function Dashboard() {
  const [selectedCrop, setSelectedCrop] = useState<CropType>('mangosteen');
  const [timeRange, setTimeRange] = useState<TimeRange>('1m');
  const [isClient, setIsClient] = useState(false);
  const date = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok', // UTC+7
  });
  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading Farm Link...</p>
        </div>
      </div>
    );
  }

  // Deterministic prediction insights based on crop
  const getPredictionInsight = (cropName: string) => {
    const insights: Record<string, { trend: string; confidence: number }> = {
      'Mangosteen': { trend: 'increase', confidence: 78 },
      'Durian': { trend: 'stabilize', confidence: 72 },
      'Longan': { trend: 'increase', confidence: 85 }
    };
    return insights[cropName] || insights['Mangosteen'];
  };

  const cropData = crops[selectedCrop];
  // Always show merged historical + prediction data
  const chartData = getPredictionDataByTimeRange(selectedCrop, timeRange);
  const stats = marketStats[selectedCrop];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-xl">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Farm Link</h1>
                <p className="text-sm text-gray-600">AI-powered platform that helps farmers sell their products by predicting market prices</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Current Market Data – {date}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Crop Selection */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Crop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(crops).map(([key, crop]) => (
              <button
                key={key}
                onClick={() => setSelectedCrop(key as CropType)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${selectedCrop === key
                  ? 'border-green-500 bg-green-50 shadow-md'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }`}
              >
                <div className="flex items-center space-x-3">
                  <FruitIcon iconName={crop.icon} size={32} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">{crop.name}</h3>
                    <p className="text-sm text-gray-600">{crop.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Market Stats */}
        <div className="mb-8">
          <MarketStatsCard
            stats={stats}
            cropName={cropData.name}
            cropIcon={cropData.icon}
          />
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900">
                AI Price Analysis & Prediction ({timeRange.toUpperCase()} Historical + Forecast)
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              {/* Time Range Selector */}
              <TimeRangeSelector
                selectedRange={timeRange}
                onRangeChange={setTimeRange}
              />
            </div>
          </div>

          <PriceChart
            data={chartData}
            color={cropData.color}
            height={400}
          />
        </div>

        {/* Farmer Assistance Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <FarmerAlerts
            assistance={getFarmerAssistance(selectedCrop, timeRange)}
            cropName={cropData.name}
          />
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Market Insights */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Insights</h3>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-900">
                      AI Prediction Trend
                    </h4>
                    <p className="text-sm text-blue-700 mt-1">
                      AI model predicts {cropData.name.toLowerCase()} prices will {getPredictionInsight(cropData.name).trend} over the next 30 days with {getPredictionInsight(cropData.name).confidence}% confidence.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full">
                    <Calendar className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-green-900">Seasonal Outlook</h4>
                    <p className="text-sm text-green-700 mt-1">
                      Current season conditions are favorable for {cropData.name.toLowerCase()}
                      with stable supply and growing demand.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Farmer Recommendations</h3>
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h4 className="font-medium text-yellow-900 mb-2">
                  AI Selling Recommendation
                </h4>
                <p className="text-sm text-yellow-700">
                  Based on 30-day forecast, optimal selling window is in {getPredictionInsight(cropData.name).trend === 'increase' ? '3-4 weeks' : '1-2 weeks'} when prices reach predicted maximum.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-medium text-purple-900 mb-2">
                  AI Inventory Strategy
                </h4>
                <p className="text-sm text-purple-700">
                  AI recommends {getPredictionInsight(cropData.name).trend === 'increase' ? 'holding inventory for price appreciation' : 'gradual selling to avoid market saturation'} based on forecasted demand patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
