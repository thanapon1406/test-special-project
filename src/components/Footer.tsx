import { Calendar, TrendingUp } from "lucide-react";

interface FooterProps {
    cropData: { name: string };
    getPredictionInsight: (cropName: string) => { trend: string; confidence: number };
}

export default function Footer({ cropData, getPredictionInsight }: FooterProps) {
    return (
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
    );
}