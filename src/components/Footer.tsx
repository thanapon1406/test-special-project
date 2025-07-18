import { Calendar, TrendingUp } from "lucide-react";

interface FooterProps {
    cropData: { name: string };
    language?: 'en' | 'th';
}

interface ProcessingOption {
    name: string[];
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
                name: ['Canned Mangosteen', 'มังคุดกระป๋อง'],
                companies: ['CP Foods', 'CP ALL', 'CP Intertrade']
            },
            {

                name: ['Mangosteen Peel Extract', 'สารสกัดเปลือกมังคุด'],
                companies: ['CP Cosmetics', 'CP Pharma']
            },
            {
                name: ['Mangosteen Soap', 'สบู่มังคุด'],
                companies: ['CP Consumer Products', 'CP Beauty']
            },
            {
                name: ['Mangosteen Juice Concentrate', 'น้ำมังคุดเข้มข้น'],
                companies: ['CP Fresh Mart', 'CP Beverage']
            },
            {
                name: ['Mangosteen Skincare Cream', 'ครีมบำรุงผิวมังคุด'],
                companies: ['CP Beauty', 'CP Wellness']
            }
        ],
        'Durian': [
            {
                name: ['Frozen Durian', 'ทุเรียนแช่แข็ง'],
                companies: ['CP Foods', 'CP Fresh', 'CP Export']
            },
            {
                name: ['Dried Durian', 'ทุเรียนอบแห้ง'],
                companies: ['CP Snacks', 'CP Premium']
            },
            {
                name: ['Durian Ice Cream', 'ไอศกรีมทุเรียน'],
                companies: ['CP Dairy', 'CP Frozen']
            },
            {
                name: ['Durian Desserts', 'ขนมรสทุเรียน'],
                companies: ['CP Bakery', 'CP Confectionery']
            },
            {
                name: ['Durian Ready-to-Drink', 'เครื่องดื่มทุเรียนแบบพร้อมดื่ม'],
                companies: ['CP Beverage', 'CP Fresh Mart']
            }
        ],
        'Longan': [
            {
                name: ['Canned Longan', 'ลำไยกระป๋อง'],
                companies: ['CP Foods', 'CP Canning', 'CP Export']
            },
            {
                name: ['Dried Longan', 'ลำไยอบแห้ง'],
                companies: ['CP Premium', 'CP Traditional']
            },
            {
                name: ['Longan Juice Concentrate', 'น้ำลำไยเข้มข้น'],
                companies: ['CP Beverage', 'CP Fresh']
            },
            {
                name: ['Longan Tea', 'ชาลำไย'],
                companies: ['CP Tea', 'CP Herbal']
            },
            {
                name: ['Longan Health Products', 'ผลิตภัณฑ์สุขภาพจากลำไย'],
                companies: ['CP Pharma', 'CP Wellness']
            }
        ]
    };

    return processingData[cropName] || [];
};

export default function Footer({ cropData, language = 'en' }: FooterProps) {
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Market Insights */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('Product Processing Options', 'ตัวเลือกการแปรรูปผลิตภัณฑ์')}
                </h3>
                <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-start space-x-3">
                            <div className="bg-blue-100 p-1 rounded-full">
                                <TrendingUp className="w-4 h-4 text-blue-600" />
                            </div>
                            <div className="w-full">
                                <h4 className="font-medium text-blue-900 mb-3">
                                    {t(`${getCropNameTranslation(cropData.name)} Processing Products`, `ผลิตภัณฑ์แปรรูป${getCropNameTranslation(cropData.name)}`)}
                                </h4>
                                {getProcessingOptions(cropData.name).map((category, index) => (
                                    <div key={index} className="mb-3">
                                        <div className="font-medium text-blue-800 mb-2">• {t(category?.name[0], category?.name[1])}</div>
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
                                <h4 className="font-medium text-green-900">
                                    {t('Market Trends', 'แนวโน้มตลาด')}
                                </h4>
                                <p className="text-sm text-green-700 mt-1">
                                    {t(
                                        `The processed ${getCropNameTranslation(cropData.name).toLowerCase()} market is showing growth trends, particularly in health and wellness product segments.`,
                                        `ตลาด${getCropNameTranslation(cropData.name).toLowerCase()}แปรรูปกำลังแสดงแนวโน้มการเติบโต โดยเฉพาะในส่วนผลิตภัณฑ์สุขภาพและความงาม`
                                    )}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Farm Directory */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('Partner Farms', 'ฟาร์มพันธมิตร')}
                </h3>
                <div className="space-y-4">
                    {getFarmInfo(cropData.name).map((farm, index) => (
                        <div key={index} className="p-4 bg-yellow-50 rounded-lg">
                            <h4 className="font-medium text-yellow-900 mb-2">
                                {farm.name}
                            </h4>
                            <div className="space-y-1">
                                <p className="text-sm text-yellow-700">
                                    📍 {t('Location', 'ที่ตั้ง')}: {farm.location}
                                </p>
                                <p className="text-sm text-yellow-700">
                                    🌟 {t('Specialty', 'ความเชี่ยวชาญ')}: {farm.specialty}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-2">
                            {t('Farm Partnership Program', 'โปรแกรมพันธมิตรฟาร์ม')}
                        </h4>
                        <p className="text-sm text-purple-700">
                            {t(
                                `Join our network of premium ${getCropNameTranslation(cropData.name).toLowerCase()} farms. We provide market access, price prediction tools, and direct buyer connections.`,
                                `เข้าร่วมเครือข่ายฟาร์ม${getCropNameTranslation(cropData.name).toLowerCase()}คุณภาพสูงของเรา เราให้บริการการเข้าถึงตลาด เครื่องมือทำนายราคา และการเชื่อมต่อผู้ซื้อโดยตรง`
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}