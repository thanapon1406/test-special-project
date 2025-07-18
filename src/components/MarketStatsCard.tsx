'use client';

import { MarketStats } from '@/types';
import { formatCurrency, formatNumber, formatPercentage, getChangeBgColor } from '@/lib/utils';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Brain } from 'lucide-react';
import FruitIcon from '@/components/FruitIcon';

interface MarketStatsCardProps {
  stats: MarketStats;
  cropName: string;
  cropIcon: string;
  language?: 'en' | 'th';
}

export default function MarketStatsCard({ stats, cropName, cropIcon, language = 'en' }: MarketStatsCardProps) {
  // Translation function
  const t = (en: string, th: string) => language === 'en' ? en : th;

  // Crop name translation
  const getCropNameTranslation = (name: string) => {
    const translations: Record<string, string> = {
      'Mangosteen': 'มังคุด',
      'Durian': 'ทุเรียน',
      'Longan': 'ลำไย'
    };
    return language === 'th' ? translations[name] || name : name;
  };
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <FruitIcon iconName={cropIcon} size={36} />
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{getCropNameTranslation(cropName)}</h3>
            <p className="text-sm text-gray-500">
              {t('AI-Powered Price Analysis', 'การวิเคราะห์ราคาโดย AI')}
            </p>
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">
            {formatCurrency(stats.currentPrice)}
          </div>
          <div className="flex items-center space-x-2 mt-1">
            <div className={`text-sm font-medium ${getChangeBgColor(stats.change24h)} px-2 py-1 rounded-md inline-flex items-center`}>
              {stats.change24h > 0 ? (
                <TrendingUp className="w-3 h-3 mr-1" />
              ) : (
                <TrendingDown className="w-3 h-3 mr-1" />
              )}
              {formatPercentage(stats.change24h)}
            </div>
          </div>
        </div>
      </div>

      {/* AI Accuracy Highlight - Made more prominent */}
      {stats.aiAccuracy && (
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Brain className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-purple-900">
                  {t('AI Prediction Accuracy', 'ความแม่นยำการทำนาย AI')}
                </h4>
                <p className="text-xs text-purple-700">
                  {t('How close our AI predictions are to actual prices', 'ความใกล้เคียงของการทำนาย AI กับราคาจริง')}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-900">{stats.aiAccuracy}%</div>
              <div className="text-xs text-purple-600">
                {t('Accuracy Rate', 'อัตราความแม่นยำ')}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">7 Days</span>
            <span className={`text-sm font-medium ${stats.change7d >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatPercentage(stats.change7d)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">30 Days</span>
            <span className={`text-sm font-medium ${stats.change30d >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatPercentage(stats.change30d)}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <BarChart3 className="w-3 h-3 text-gray-400" />
              <span className="text-sm text-gray-600">{t('Volume', 'ปริมาณ')}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {formatNumber(stats.volume)} kg
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <DollarSign className="w-3 h-3 text-gray-400" />
              <span className="text-sm text-gray-600">{t('Market Cap', 'มูลค่าตลาด')}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {formatCurrency(stats.marketCap)}
            </span>
          </div>
        </div>
      </div>

      {/* Supply-Demand Information */}
      {stats.currentSupply && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">
            {t('Market Supply Analysis', 'การวิเคราะห์อุปทานตลาด')}
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('Current Supply', 'อุปทานปัจจุบัน')}</span>
                <span className="text-sm font-medium text-gray-900">
                  {stats.currentSupply.toLocaleString()} kg
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('Supply Status', 'สถานะอุปทาน')}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${stats.supplyStatus === 'high' ? 'bg-red-100 text-red-800' :
                  stats.supplyStatus === 'low' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                  {stats.supplyStatus?.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('Price Outlook', 'แนวโน้มราคา')}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${stats.priceOutlook === 'bearish' ? 'bg-red-100 text-red-800' :
                  stats.priceOutlook === 'bullish' ? 'bg-green-100 text-green-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                  {stats.priceOutlook?.toUpperCase()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('AI Impact', 'ผลกระทบ AI')}</span>
                <span className="text-sm font-medium text-gray-900">
                  {t('Supply-driven', 'ขับเคลื่อนโดยอุปทาน')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
