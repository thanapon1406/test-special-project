# Farm Link - AI-powered platform that helps farmers sell their products by predicting market prices

A modern Next.js application designed to help farmers make informed decisions about crop pricing for mangosteen, durian, and longan. The platform features interactive price charts, AI-powered predictions with supply-demand analysis, and comprehensive farmer assistance for challenging market conditions.

## 🌟 Key Features

### Core Functionality

- **Modern, Responsive UI**: Built with Tailwind CSS for a beautiful user experience across all devices
- **Interactive Price Charts**: Real-time visualization using Recharts with historical and prediction data merged in one view
- **AI-Powered Price Predictions**: Advanced forecasting models with confidence intervals and accuracy tracking
- **Supply-Demand Analysis**: Integration of inventory levels and market supply factors in price predictions
- **Multi-Crop Support**: Mangosteen, Durian, and Longan price tracking and predictions with crop-specific factors

### Farmer Support System

- **Early Warning Alerts**: 3-month advance notice when prices are predicted to drop significantly
- **Farmer Assistance Center**: Actionable recommendations for low-price situations including:
  - Alternative marketing channels
  - Value-added processing options
  - Storage and timing strategies
  - Cooperative formation guidance
  - Government support program information
- **Market Intelligence**: Real-time supply status, price outlook, and AI impact analysis
- **Emotional Support**: Encouraging messages and practical hope during challenging market periods

### Advanced Analytics

- **Supply Status Indicators**: Real-time classification of market supply (Low/Normal/High)
- **Price Outlook Predictions**: Bullish/Neutral/Bearish forecasts based on supply-demand dynamics
- **AI Accuracy Tracking**: Transparent display of prediction accuracy percentages
- **Interactive Tooltips**: Detailed supply information and price impact analysis on chart hover

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Date Handling**: date-fns
- **Utilities**: clsx for conditional styling

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Home page with Dashboard
├── components/          # Reusable React components
│   ├── Dashboard.tsx   # Main dashboard component
│   ├── PriceChart.tsx  # Interactive price chart
│   ├── MarketStatsCard.tsx  # Market statistics display
│   └── TimeRangeSelector.tsx # Time range filter
├── data/               # Mock data and utilities
│   └── mockData.ts     # Generated mock data for crops
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions and formatters
└── types/              # TypeScript type definitions
    └── index.ts        # Project type definitions
```

## 🎯 Features Overview

### Dashboard

- **Crop Selection**: Easy switching between Mangosteen, Durian, and Longan
- **Real-time Statistics**: Current prices, 24h/7d/30d changes, volume, and market cap
- **Interactive Charts**: Historical price data with multiple time range options
- **Price Predictions**: Future price forecasting with confidence intervals

### Price Analysis

- **Historical Data**: Up to 1 year of historical price data
- **Time Range Filters**: 7D, 1M, 3M, 6M, 1Y, and All time views
- **Trend Analysis**: Visual indicators for price movements and market sentiment
- **Volume Tracking**: Market volume data for supply-demand insights

### Farmer Tools

- **Market Insights**: AI-generated insights about price trends and market conditions
- **Selling Recommendations**: Optimal timing suggestions based on predictions
- **Market Strategy**: Strategic advice for inventory management

## 🎨 Design Principles

- **Mobile-First**: Responsive design optimized for mobile devices
- **Clean Interface**: Modern, intuitive UI suitable for farmers
- **Data Visualization**: Clear, easy-to-understand charts and graphs
- **Accessibility**: High contrast colors and readable typography
- **Performance**: Fast loading times with optimized components

## 📊 Mock Data

The application uses sophisticated mock data generation that includes:

- **Realistic Price Fluctuations**: Based on market volatility patterns
- **Seasonal Trends**: Crop-specific seasonal price variations
- **Volume Correlation**: Trading volume that correlates with price movements
- **Prediction Algorithms**: Confidence-based forecasting models

## 🛠 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [repository-url]
cd mockup-special-project
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Usage

1. **Select Crop**: Choose between Mangosteen, Durian, or Longan from the crop selection cards
2. **View Statistics**: Monitor current price, changes, volume, and market cap
3. **Analyze Trends**: Use the interactive chart to analyze historical price data
4. **Switch Time Ranges**: Filter data by 7D, 1M, 3M, 6M, 1Y, or All time
5. **View Predictions**: Toggle to prediction mode to see future price forecasts
6. **Read Insights**: Review market insights and farmer recommendations

## 🔮 Future Enhancements

- **Real API Integration**: Connect to live agricultural price APIs
- **User Accounts**: Personal dashboards and portfolio tracking
- **Mobile App**: React Native version for mobile users
- **Push Notifications**: Price alerts and market updates
- **Multiple Markets**: Support for different geographical markets
- **Advanced Analytics**: Machine learning-powered insights

## 📱 Responsive Design

The platform is fully responsive and optimized for:

- **Desktop**: Full-featured dashboard experience
- **Tablet**: Optimized layout for medium screens
- **Mobile**: Touch-friendly interface with essential features

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is created for demonstration purposes. All price data is simulated and should not be used for actual trading decisions.

## 🤝 Contributing

This is a mockup project created for demonstration. For real-world implementation, consider:

- Integrating with actual agricultural price APIs
- Adding user authentication and personalization
- Implementing real-time data updates
- Adding more sophisticated prediction models
