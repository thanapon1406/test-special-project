'use client';

import { useState, useEffect } from 'react';
// Import TimeRange type from TimeRangeSelector component
import TimeRangeSelector, { TimeRange } from '@/components/TimeRangeSelector';
// If CropType is missing, define it here or import the correct type
type CropType = 'mangosteen' | 'durian' | 'longan';
import {
  crops,
  marketStats,
  getPredictionDataByTimeRange,
} from '@/data/mockData';
import PriceChart from '@/components/PriceChart';
import MarketStatsCard, { MarketStats } from '@/components/MarketStatsCard';
// import FarmerAlerts from '@/components/FarmerAlerts';
import FruitIcon from '@/components/FruitIcon';
import { TrendingUp, Calendar } from 'lucide-react';
import Footer from './Footer';

export default function Dashboard() {
  const [selectedCrop, setSelectedCrop] = useState<CropType>('mangosteen');
  const [timeRange, setTimeRange] = useState<TimeRange>('1y');
  const [isClient, setIsClient] = useState(false);
  const [language, setLanguage] = useState<'en' | 'th'>('en');

  // Translation function
  const t = (en: string, th: string) => (language === 'en' ? en : th);

  // Crop name translation
  const getCropNameTranslation = (name: string) => {
    const translations: Record<string, string> = {
      Mangosteen: 'มังคุด',
      Durian: 'ทุเรียน',
      Longan: 'ลำไย',
    };
    return language === 'th' ? translations[name] || name : name;
  };

  const getCropDesTranslation = (name: string) => {
    const translations: Record<string, string> = {
      'Queen of Fruits': 'ราชินีแห่งผลไม้',
      'King of fruits': 'ราชาแห่งผลไม้',
      'Dragon Eye Fruit': 'ตามังกรแห่งผลไม้',
    };
    return language === 'th' ? translations[name] || name : name;
  };

  const date = new Date().toLocaleDateString(
    language === 'en' ? 'en-US' : 'th-TH',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Bangkok', // UTC+7
    },
  );
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

  const cropData = crops[selectedCrop];
  // Always show merged historical + prediction data
  const chartData = getPredictionDataByTimeRange(selectedCrop, timeRange).map(
    (item) => ({
      ...item,
      current: item.current ?? undefined,
      historical: item.historical ?? undefined,
      predicted: item.predicted ?? undefined,
    }),
  );
  const rawStats = marketStats[selectedCrop];

  // Ensure supplyStatus and priceOutlook match the expected types
  const stats: MarketStats = {
    ...rawStats,
    supplyStatus: rawStats.supplyStatus as
      | 'high'
      | 'normal'
      | 'low'
      | undefined,
    priceOutlook: rawStats.priceOutlook as
      | 'bullish'
      | 'bearish'
      | 'neutral'
      | undefined,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
          <div className="flex  flex-col items-start lg:flex-row lg:justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 p-2 rounded-xl">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Farm Link</h1>
                <p className="text-sm text-gray-600">
                  {t(
                    'AI-powered platform that helps farmers sell their products by predicting market prices',
                    'แพลตฟอร์ม AI ที่ช่วยเกษตรกรขายผลผลิตโดยการทำนายราคาตลาด',
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {t('Current Market Data', 'ข้อมูลตลาดปัจจุบัน')} – {date}
              </div>

              {/* Language Toggle Button */}
              <div className="flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    language === 'en'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  ENG
                </button>
                <button
                  onClick={() => setLanguage('th')}
                  className={`px-3 py-1 text-sm font-medium transition-colors ${
                    language === 'th'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-600 hover:text-blue-500'
                  }`}
                >
                  TH
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Crop Selection */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {t('Select Crop', 'เลือกพืชผล')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(crops).map(([key, crop]) => (
              <button
                key={key}
                onClick={() => setSelectedCrop(key as CropType)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedCrop === key
                    ? 'border-green-500 bg-green-50 shadow-md'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FruitIcon iconName={crop.icon} size={32} />
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900">
                      {getCropNameTranslation(crop.name)}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {getCropDesTranslation(crop.description)}
                    </p>
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
            language={language}
          />
        </div>

        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center flex-col md:flex-row md:justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900">
                {t(
                  `AI Price Analysis & Prediction (${timeRange.toUpperCase()} Historical + Forecast)`,
                  `การวิเคราะห์และทำนายราคา AI (ข้อมูลย้อนหลัง ${timeRange.toUpperCase()} + การพยากรณ์)`,
                )}
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
            selectedCrop={cropData.name}
          />
        </div>

        {/* Farmer Assistance Section */}
        {/* <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <FarmerAlerts
            assistance={getFarmerAssistance(selectedCrop, timeRange)}
            cropName={cropData.name}
          />
        </div> */}

        <Footer cropData={cropData} language={language} />
      </main>
    </div>
  );
}
