'use client';

import Image from 'next/image';

interface FruitIconProps {
    iconName: string;
    className?: string;
    size?: number;
}

export default function FruitIcon({ iconName, className = '', size = 24 }: FruitIconProps) {
    // If iconName is empty or undefined, return a fallback
    if (!iconName) {
        return <div className={`w-6 h-6 bg-gray-200 rounded ${className}`} />;
    }

    // If it's an SVG file, use Image component
    if (iconName.endsWith('.svg')) {
        return (
            <Image
                src={`/icons/${iconName}`}
                alt="Fruit icon"
                width={size}
                height={size}
                className={className}
                priority
            />
        );
    }

    // If it's an emoji or other text, display directly
    return (
        <span
            className={`inline-block text-${size === 24 ? '2xl' : size === 32 ? '3xl' : 'xl'} ${className}`}
            style={{ fontSize: `${size}px` }}
        >
            {iconName}
        </span>
    );
}
