import { Calendar, TrendingUp } from "lucide-react";

interface FooterProps {
    cropData: { name: string };
}

interface ProcessingOption {
    name: string;
    companies?: string[];
}

interface FarmInfo {
    name: string;
    location: string;
    specialty: string;
}

// ข้อมูลฟาร์มที่ทำการเกษตรเกี่ยวกับผลไม้แต่ละชนิด
const getFarmInfo = (cropName: string): FarmInfo[] => {
    const farmData: Record<string, FarmInfo[]> = {
        'Mangosteen': [
            {
                name: 'Royal Mangosteen Farm',
                location: 'Nakhon Si Thammarat',
                specialty: 'Premium Grade A Mangosteen'
            },
            {
                name: 'Golden Valley Orchard',
                location: 'Surat Thani',
                specialty: 'Organic Mangosteen Cultivation'
            },
            {
                name: 'Thai Southern Fruit Farm',
                location: 'Phatthalung',
                specialty: 'Export Quality Mangosteen'
            }
        ],
        'Durian': [
            {
                name: 'Monthong Paradise Farm',
                location: 'Chanthaburi',
                specialty: 'Monthong & Chanee Varieties'
            },
            {
                name: 'King of Fruits Plantation',
                location: 'Rayong',
                specialty: 'Premium Durian Export'
            },
            {
                name: 'Eastern Durian Estate',
                location: 'Trat',
                specialty: 'Sustainable Durian Farming'
            }
        ],
        'Longan': [
            {
                name: 'Northern Longan Grove',
                location: 'Chiang Mai',
                specialty: 'Sweet Diamond Longan'
            },
            {
                name: 'Highland Fruit Farm',
                location: 'Lamphun',
                specialty: 'Dried Longan Production'
            },
            {
                name: 'Mountain View Orchard',
                location: 'Chiang Rai',
                specialty: 'Fresh & Processed Longan'
            }
        ]
    };

    return farmData[cropName] || [];
};

// ข้อมูลการแปรรูปผลิตภัณฑ์สำหรับผลไม้แต่ละชนิด
const getProcessingOptions = (cropName: string): ProcessingOption[] => {
    const processingData: Record<string, ProcessingOption[]> = {
        'Mangosteen': [
            {
                name: 'Canned Mangosteen',
                companies: ['CP Foods', 'CP ALL', 'CP Intertrade']
            },
            {
                name: 'Mangosteen Peel Balm',
                companies: ['CP Cosmetics', 'CP Pharma']
            },
            {
                name: 'Mangosteen Soap',
                companies: ['CP Consumer Products', 'CP Beauty']
            },
            {
                name: 'Mangosteen Juice Concentrate',
                companies: ['CP Fresh Mart', 'CP Beverage']
            },
            {
                name: 'Mangosteen Skincare Cream',
                companies: ['CP Beauty', 'CP Wellness']
            }
        ],
        'Durian': [
            {
                name: 'Frozen Durian',
                companies: ['CP Foods', 'CP Fresh', 'CP Export']
            },
            {
                name: 'Dried Durian',
                companies: ['CP Snacks', 'CP Premium']
            },
            {
                name: 'Durian Ice Cream',
                companies: ['CP Dairy', 'CP Frozen']
            },
            {
                name: 'Durian Desserts',
                companies: ['CP Bakery', 'CP Confectionery']
            },
            {
                name: 'Durian Ready-to-Drink',
                companies: ['CP Beverage', 'CP Fresh Mart']
            }
        ],
        'Longan': [
            {
                name: 'Canned Longan',
                companies: ['CP Foods', 'CP Canning', 'CP Export']
            },
            {
                name: 'Dried Longan',
                companies: ['CP Premium', 'CP Traditional']
            },
            {
                name: 'Longan Juice Concentrate',
                companies: ['CP Beverage', 'CP Fresh']
            },
            {
                name: 'Longan Tea',
                companies: ['CP Tea', 'CP Herbal']
            },
            {
                name: 'Longan Health Products',
                companies: ['CP Pharma', 'CP Wellness']
            }
        ]
    };

    return processingData[cropName] || [];
};

export default function Footer({ cropData }: FooterProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Market Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Processing Options</h3>
                <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start space-x-3">
                            <div className="bg-blue-100 p-1 rounded-full">
                                <TrendingUp className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="w-full">
                                <h4 className="font-medium text-blue-900 mb-3">
                                    {cropData.name} Processing Products
                                </h4>
                                {getProcessingOptions(cropData.name).map((category, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="font-medium text-blue-800 mb-2">• {category.name}</div>
                                        {category.companies && category.companies.length > 0 && (
                                            <div className="ml-4 space-y-1">
                                                {category.companies.map((company, compIndex) => (
                                                    <div key={compIndex} className="text-sm text-blue-700">
                                                        - {company}
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-start space-x-3">
                            <div className="bg-green-100 p-1 rounded-full">
                                <Calendar className="w-4 h-4 text-green-600" />
                            </div>
                            <div>
                                <h4 className="font-medium text-green-900">Market Trends</h4>
                                <p className="text-sm text-green-700 mt-1">
                                    The processed {cropData.name.toLowerCase()} market is showing growth trends,
                                    particularly in health and wellness product segments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Farm Directory */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Partner Farms</h3>
                <div className="space-y-4">
                    {getFarmInfo(cropData.name).map((farm, index) => (
                        <div key={index} className="p-4 bg-yellow-50 rounded-lg">
                            <h4 className="font-medium text-yellow-900 mb-2">
                                {farm.name}
                            </h4>
                            <div className="space-y-1">
                                <p className="text-sm text-yellow-700">
                                    📍 Location: {farm.location}
                                </p>
                                <p className="text-sm text-yellow-700">
                                    🌟 Specialty: {farm.specialty}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-2">
                            Farm Partnership Program
                        </h4>
                        <p className="text-sm text-purple-700">
                            Join our network of premium {cropData.name.toLowerCase()} farms.
                            We provide market access, price prediction tools, and direct buyer connections.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}