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

interface ProductSuggestion {
    emoji: string;
    title: {
        en: string;
        th: string;
    };
    description: {
        en: string;
        th: string;
    };
    benefits?: {
        en: string;
        th: string;
    };
}

interface SalesLocation {
    name: string;
    location: string;
    type: string;
    specialty: string;
}

interface OtherFarmInfo {
    name: string;
    location: string;
    crops: string[];
    contact: string;
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

// ข้อมูลคำแนะนำการใช้งานผลิตภัณฑ์สำหรับผลไม้แต่ละชนิด
const getProductSuggestions = (cropName: string): ProductSuggestion[] => {
    const suggestionData: Record<string, ProductSuggestion[]> = {
        'Mangosteen': [
            {
                emoji: '🍽️',
                title: {
                    en: 'Fresh Consumption',
                    th: 'รับประทานสด'
                },
                description: {
                    en: 'Best eaten fresh as a healthy snack or dessert',
                    th: 'รับประทานสดเป็นของว่างหรือของหวานที่ดีต่อสุขภาพ'
                },
                benefits: {
                    en: 'Rich in antioxidants and vitamin C',
                    th: 'อุดมไปด้วยสารต้านอนุมูลอิสระและวิตามินซี'
                }
            },
            {
                emoji: '🧴',
                title: {
                    en: 'Cosmetic Products',
                    th: 'ผลิตภัณฑ์เสริมความงาม'
                },
                description: {
                    en: 'Mangosteen peel extract for skincare and anti-aging products',
                    th: 'สารสกัดจากเปลือกมังคุดสำหรับผลิตภัณฑ์บำรุงผิวและต้านวัย'
                },
                benefits: {
                    en: 'Natural anti-inflammatory properties',
                    th: 'มีสรรพคุณต้านการอักเสบตามธรรมชาติ'
                }
            },
            {
                emoji: '💊',
                title: {
                    en: 'Health Supplements',
                    th: 'อาหารเสริมสุขภาพ'
                },
                description: {
                    en: 'Extract supplements for immune system support',
                    th: 'ผลิตภัณฑ์เสริมอาหารสำหรับเสริมสร้างภูมิคุ้นกัน'
                },
                benefits: {
                    en: 'Boosts immunity and overall health',
                    th: 'เสริมสร้างภูมิคุ้นกันและสุขภาพโดยรวม'
                }
            },
            {
                emoji: '🥤',
                title: {
                    en: 'Beverages',
                    th: 'เครื่องดื่ม'
                },
                description: {
                    en: 'Juice, smoothies, and health drinks',
                    th: 'น้ำผลไม้ สมูทตี้ และเครื่องดื่มเพื่อสุขภาพ'
                },
                benefits: {
                    en: 'Refreshing and nutritious drink option',
                    th: 'เครื่องดื่มที่สดชื่นและมีคุณค่าทางโภชนาการ'
                }
            }
        ],
        'Durian': [
            {
                emoji: '🍽️',
                title: {
                    en: 'Fresh Consumption',
                    th: 'รับประทานสด'
                },
                description: {
                    en: 'Enjoy fresh as the "King of Fruits" with unique flavor',
                    th: 'รับประทานสดในฐานะ "ราชาแห่งผลไม้" ที่มีรสชาติเป็นเอกลักษณ์'
                },
                benefits: {
                    en: 'High in energy, fiber, and potassium',
                    th: 'ให้พลังงานสูง มีใยอาหาร และโพแทสเซียม'
                }
            },
            {
                emoji: '🍨',
                title: {
                    en: 'Frozen Desserts',
                    th: 'ของหวานแช่แข็ง'
                },
                description: {
                    en: 'Ice cream, frozen durian, and dessert products',
                    th: 'ไอศกรีม ทุเรียนแช่แข็ง และผลิตภัณฑ์ขนม'
                },
                benefits: {
                    en: 'Popular export product with high demand',
                    th: 'ผลิตภัณฑ์ส่งออกยอดนิยมที่มีความต้องการสูง'
                }
            },
            {
                emoji: '🥧',
                title: {
                    en: 'Baked Goods',
                    th: 'ขนมอบ'
                },
                description: {
                    en: 'Durian cakes, pastries, and traditional Thai desserts',
                    th: 'เค้กทุเรียน ขนมปัง และขนมไทยแบบดั้งเดิม'
                },
                benefits: {
                    en: 'Premium pricing for specialty products',
                    th: 'ราคาพรีเมียมสำหรับผลิตภัณฑ์พิเศษ'
                }
            },
            {
                emoji: '📦',
                title: {
                    en: 'Processed Products',
                    th: 'ผลิตภัณฑ์แปรรูป'
                },
                description: {
                    en: 'Dried durian, durian chips, and snack products',
                    th: 'ทุเรียนอบแห้ง ทุเรียนทอด และผลิตภัณฑ์ขนม'
                },
                benefits: {
                    en: 'Longer shelf life and export potential',
                    th: 'อายุการเก็บรักษานานและศักยภาพในการส่งออก'
                }
            }
        ],
        'Longan': [
            {
                emoji: '🍽️',
                title: {
                    en: 'Fresh Consumption',
                    th: 'รับประทานสด'
                },
                description: {
                    en: 'Sweet and refreshing fruit perfect for snacking',
                    th: 'ผลไม้หวานสดชื่นเหมาะสำหรับรับประทานเป็นของว่าง'
                },
                benefits: {
                    en: 'Good source of vitamin C and iron',
                    th: 'แหล่งวิตามินซีและธาตุเหล็กที่ดี'
                }
            },
            {
                emoji: '🫖',
                title: {
                    en: 'Traditional Medicine',
                    th: 'การแพทย์แผนโบราณ'
                },
                description: {
                    en: 'Dried longan for herbal teas and health remedies',
                    th: 'ลำไยอบแห้งสำหรับชาสมุนไพรและยาบำรุงสุขภาพ'
                },
                benefits: {
                    en: 'Believed to improve sleep and reduce stress',
                    th: 'เชื่อกันว่าช่วยให้นอนหลับและลดความเครียด'
                }
            },
            {
                emoji: '🥫',
                title: {
                    en: 'Canned Products',
                    th: 'ผลิตภัณฑ์กระป๋อง'
                },
                description: {
                    en: 'Canned longan in syrup for year-round availability',
                    th: 'ลำไยกระป๋องในน้ำเชื่อมสำหรับบริโภคตลอดปี'
                },
                benefits: {
                    en: 'Major export product to international markets',
                    th: 'ผลิตภัณฑ์ส่งออกหลักสู่ตลาดต่างประเทศ'
                }
            },
            {
                emoji: '🍯',
                title: {
                    en: 'Health Products',
                    th: 'ผลิตภัณฑ์เพื่อสุขภาพ'
                },
                description: {
                    en: 'Longan honey, health drinks, and wellness products',
                    th: 'น้ำผึ้งลำไย เครื่องดื่มสุขภาพ และผลิตภัณฑ์เวลเนส'
                },
                benefits: {
                    en: 'Natural energy booster and health supplement',
                    th: 'ให้พลังงานธรรมชาติและเสริมสุขภาพ'
                }
            }
        ]
    };

    return suggestionData[cropName] || [];
};

// ข้อมูลสถานที่ขายสินค้าสำหรับผลไม้แต่ละชนิด
const getSalesLocations = (cropName: string): SalesLocation[] => {
    const salesData: Record<string, SalesLocation[]> = {
        'Mangosteen': [
            {
                name: 'Central FreshMart',
                location: 'Bangkok',
                type: 'Supermarket Chain',
                specialty: 'Premium imported and local fruits'
            },
            {
                name: 'Lotus Fresh Market',
                location: 'Nationwide',
                type: 'Retail Store',
                specialty: 'Fresh tropical fruits section'
            },
            {
                name: 'Villa Market',
                location: 'Bangkok & Pattaya',
                type: 'Gourmet Store',
                specialty: 'High-end exotic fruits'
            }
        ],
        'Durian': [
            {
                name: 'Durian Empire',
                location: 'Chanthaburi',
                type: 'Specialty Store',
                specialty: 'Fresh and frozen durian products'
            },
            {
                name: 'Big C Supercenter',
                location: 'Nationwide',
                type: 'Hypermarket',
                specialty: 'Seasonal durian section'
            },
            {
                name: 'Makro Cash & Carry',
                location: 'Major Cities',
                type: 'Wholesale Store',
                specialty: 'Bulk durian for restaurants'
            }
        ],
        'Longan': [
            {
                name: 'Tops Supermarket',
                location: 'Bangkok & Suburbs',
                type: 'Supermarket',
                specialty: 'Fresh and canned longan'
            },
            {
                name: 'Max Valu',
                location: 'Northern Thailand',
                type: 'Local Supermarket',
                specialty: 'Local longan varieties'
            },
            {
                name: 'Gourmet Market',
                location: 'Premium Locations',
                type: 'Premium Store',
                specialty: 'Organic and premium longan'
            }
        ]
    };

    return salesData[cropName] || [];
};

// ข้อมูลฟาร์มอื่น ๆ ในพื้นที่
const getOtherFarms = (cropName: string): OtherFarmInfo[] => {
    const otherFarmData: Record<string, OtherFarmInfo[]> = {
        'Mangosteen': [
            {
                name: 'Tropical Fruit Cooperative',
                location: 'Nakhon Si Thammarat',
                crops: ['Mangosteen', 'Rambutan', 'Lychee'],
                contact: '081-234-5678'
            },
            {
                name: 'Southern Orchard Network',
                location: 'Surat Thani',
                crops: ['Mangosteen', 'Coconut', 'Palm Oil'],
                contact: '082-345-6789'
            },
            {
                name: 'Green Valley Farm Group',
                location: 'Phatthalung',
                crops: ['Mangosteen', 'Dragon Fruit', 'Jackfruit'],
                contact: '083-456-7890'
            }
        ],
        'Durian': [
            {
                name: 'Eastern Fruit Alliance',
                location: 'Chanthaburi',
                crops: ['Durian', 'Mangosteen', 'Rambutan'],
                contact: '084-567-8901'
            },
            {
                name: 'Coastal Farm Collective',
                location: 'Rayong',
                crops: ['Durian', 'Coconut', 'Pineapple'],
                contact: '085-678-9012'
            },
            {
                name: 'Border Fruit Farmers',
                location: 'Trat',
                crops: ['Durian', 'Cashew', 'Pepper'],
                contact: '086-789-0123'
            }
        ],
        'Longan': [
            {
                name: 'Northern Fruit Growers',
                location: 'Chiang Mai',
                crops: ['Longan', 'Lychee', 'Coffee'],
                contact: '087-890-1234'
            },
            {
                name: 'Highland Agriculture Group',
                location: 'Lamphun',
                crops: ['Longan', 'Tea', 'Herbs'],
                contact: '088-901-2345'
            },
            {
                name: 'Mountain Valley Farms',
                location: 'Chiang Rai',
                crops: ['Longan', 'Avocado', 'Macadamia'],
                contact: '089-012-3456'
            }
        ]
    };

    return otherFarmData[cropName] || [];
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
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Market Insights */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {t('Product Processing Options', 'ตัวเลือกการแปรรูปผลิตภัณฑ์')}
                    </h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-purple-50 rounded-lg">
                            <div className="flex items-start space-x-3">
                                <div className="bg-blue-100 p-1 rounded-full">
                                    <TrendingUp className="w-4 h-4 text-purple-700" />
                                </div>
                                <div className="w-full">
                                    <h4 className="font-medium text-purple-900 mb-3">
                                        {t(`${getCropNameTranslation(cropData.name)} Processing Products`, `ผลิตภัณฑ์แปรรูป${getCropNameTranslation(cropData.name)}`)}
                                    </h4>
                                    {getProcessingOptions(cropData.name).map((category, index) => (
                                        <div key={index} className="mb-3">
                                            <div className="font-medium text-purple-700 mb-2">• {t(category?.name[0], category?.name[1])}</div>
                                            {category.companies && category.companies.length > 0 && (
                                                <div className="ml-4 space-y-1">
                                                    {category.companies.map((company, compIndex) => (
                                                        <div key={compIndex} className="text-sm text-purple-700">
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
                    </div>
                </div>



                {/* Sales Locations */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {t('Sales Locations', 'ร้านค้าปลีก')}
                    </h3>
                    <div className="space-y-4">
                        {getSalesLocations(cropData.name).map((location: SalesLocation, index: number) => (
                            <div key={index} className="p-4 bg-purple-50 rounded-lg">
                                <h4 className="font-medium text-purple-900 mb-2">
                                    {location.name}
                                </h4>
                                <div className="space-y-1">
                                    <p className="text-sm text-purple-700">
                                        📍 {t('Location', 'ที่ตั้ง')}: {location.location}
                                    </p>
                                    <p className="text-sm text-purple-700">
                                        🏪 {t('Type', 'ประเภท')}: {location.type}
                                    </p>
                                    <p className="text-sm text-purple-700">
                                        🎯 {t('Specialty', 'ความเชี่ยวชาญ')}: {location.specialty}
                                    </p>
                                </div>
                            </div>
                        ))}
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
                                    <p className="text-sm text-yellow-700">
                                        📞 {t('Contact', 'ติดต่อ')}: {'082-345-6789'}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Farm */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        {t('Other Local Farms', 'ฟาร์มอื่น ๆ')}
                    </h3>
                    <div className="space-y-4">
                        {getOtherFarms(cropData.name).map((farm, index) => (
                            <div key={index} className="p-4 bg-yellow-50 rounded-lg">
                                <h4 className="font-medium text-yellow-900 mb-2">
                                    {farm.name}
                                </h4>
                                <div className="space-y-1">
                                    <p className="text-sm text-yellow-700">
                                        📍 {t('Location', 'ที่ตั้ง')}: {farm.location}
                                    </p>
                                    <p className="text-sm text-yellow-700">
                                        🌾 {t('Crops', 'พืชผล')}: {farm.crops.join(', ')}
                                    </p>
                                    <p className="text-sm text-yellow-700">
                                        📞 {t('Contact', 'ติดต่อ')}: {farm.contact}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Suggestion */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('Product Suggestions', 'ข้อมูลที่เกี่ยวข้อง')}
                </h3>
                <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex items-start space-x-3">
                            <div className="bg-green-100 p-1 rounded-full">
                                <Calendar className="w-4 h-4 text-green-600" />
                            </div>
                            <div className="w-full">
                                <h4 className="font-medium text-green-900 mb-3">
                                    {t(`What can you do with ${getCropNameTranslation(cropData.name)}?`, `${getCropNameTranslation(cropData.name)} สามารถนำไปใช้ทำอะไรได้บ้าง?`)}
                                </h4>
                                {getProductSuggestions(cropData.name).map((suggestion: ProductSuggestion, index: number) => (
                                    <div key={index} className="mb-4">
                                        <div className="font-medium text-green-800 mb-2">
                                            {suggestion.emoji} {t(suggestion.title.en, suggestion.title.th)}
                                        </div>
                                        <div className="text-sm text-green-700 ml-6 mb-2">
                                            {t(suggestion.description.en, suggestion.description.th)}
                                        </div>
                                        {suggestion.benefits && (
                                            <div className="text-xs text-green-600 ml-6 mt-1">
                                                💡 {t(suggestion.benefits.en, suggestion.benefits.th)}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}