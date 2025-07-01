'use client';

import { MarketStats } from '@/types';
import { formatCurrency, formatNumber, formatPercentage, getChangeBgColor } from '@/lib/utils';
import { TrendingUp, TrendingDown, DollarSign, BarChart3, Brain } from 'lucide-react';

interface MarketStatsCardProps {
  stats: MarketStats;
  cropName: string;
  cropIcon: string;
}

export default function MarketStatsCard({ stats, cropName, cropIcon }: MarketStatsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{cropIcon}</span>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{cropName}</h3>
            <p className="text-sm text-gray-500">AI-Powered Price Analysis</p>
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
                <h4 className="text-sm font-semibold text-purple-900">AI Prediction Accuracy</h4>
                <p className="text-xs text-purple-700">How close our AI predictions are to actual prices</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-900">{stats.aiAccuracy}%</div>
              <div className="text-xs text-purple-600">Accuracy Rate</div>
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
              <span className="text-sm text-gray-600">Volume</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {formatNumber(stats.volume)} kg
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
              <DollarSign className="w-3 h-3 text-gray-400" />
              <span className="text-sm text-gray-600">Market Cap</span>
            </div>
            <span className="text-sm font-medium text-gray-900">
              {formatCurrency(stats.marketCap)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
