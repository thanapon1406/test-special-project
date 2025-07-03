'use client';

import { FarmerAssistance } from '@/types';
import { AlertTriangle, Info, CheckCircle, Clock, TrendingDown, Users } from 'lucide-react';

interface FarmerAlertsProps {
  assistance: FarmerAssistance[];
  cropName: string;
}

export default function FarmerAlerts({ assistance, cropName }: FarmerAlertsProps) {
  if (!assistance.length) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <div>
            <h4 className="font-medium text-green-900">Market Conditions Stable</h4>
            <p className="text-sm text-green-700">No significant price alerts for {cropName} at this time.</p>
          </div>
        </div>
      </div>
    );
  }

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      default:
        return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getAlertColors = (type: string) => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          titleColor: 'text-red-900',
          textColor: 'text-red-700',
          badgeColor: 'bg-red-100 text-red-800'
        };
      case 'success':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          titleColor: 'text-green-900',
          textColor: 'text-green-700',
          badgeColor: 'bg-green-100 text-green-800'
        };
      default:
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          titleColor: 'text-blue-900',
          textColor: 'text-blue-700',
          badgeColor: 'bg-blue-100 text-blue-800'
        };
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-4">
        <Users className="w-5 h-5 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">Farmer Assistance Center</h3>
      </div>

      {assistance.map((alert, index) => {
        const colors = getAlertColors(alert.alertType);
        
        return (
          <div
            key={index}
            className={`${colors.bg} ${colors.border} border rounded-lg p-5`}
          >
            <div className="flex items-start space-x-3 mb-3">
              {getAlertIcon(alert.alertType)}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`font-semibold ${colors.titleColor}`}>
                    {alert.title}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${colors.badgeColor}`}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{alert.timeframe}</span>
                    </div>
                  </div>
                </div>
                <p className={`text-sm ${colors.textColor} mb-3`}>
                  {alert.message}
                </p>
              </div>
            </div>

            {alert.recommendations.length > 0 && (
              <div className="ml-8">
                <h5 className={`text-sm font-medium ${colors.titleColor} mb-2`}>
                  💡 Recommended Actions:
                </h5>
                <ul className="space-y-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <li
                      key={recIndex}
                      className={`text-sm ${colors.textColor} flex items-start space-x-2`}
                    >
                      <span className="text-xs mt-1">•</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {alert.alertType === 'warning' && (
              <div className="mt-4 ml-8 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <div className="flex items-start space-x-2">
                  <TrendingDown className="w-4 h-4 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-yellow-800">
                      💪 Don&apos;t worry - we&apos;re here to help!
                    </p>
                    <p className="text-xs text-yellow-700 mt-1">
                      These price challenges are temporary. Follow our AI recommendations to minimize impact and explore new opportunities.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
