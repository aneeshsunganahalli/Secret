'use client'

import React from 'react';
import Image from 'next/image';

interface ImageData {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images?: ImageData[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  images = [
    { src: '/1.JPG', alt: 'Portfolio Image 1' },
    { src: '/2.JPG', alt: 'Portfolio Image 2' },
    { src: '/3.JPG', alt: 'Portfolio Image 3' },
    { src: '/4.JPG', alt: 'Portfolio Image 4' },
    { src: '/5.JPG', alt: 'Portfolio Image 5' },
    { src: '/6.JPG', alt: 'Portfolio Image 6' },
    { src: '/7.JPG', alt: 'Portfolio Image 7' },
    { src: '/8.JPG', alt: 'Portfolio Image 8' },
    { src: '/9.JPG', alt: 'Portfolio Image 9' },
    { src: '/10.JPG', alt: 'Portfolio Image 10' },
    { src: '/11.JPG', alt: 'Portfolio Image 11' },
    { src: '/12.JPG', alt: 'Portfolio Image 12' },
    { src: '/13.jpeg', alt: 'Portfolio Image 13' },
    { src: '/14.jpeg', alt: 'Portfolio Image 14' },
  ],
  className = "bg-white rounded-xl p-4"
}) => {
  return (
    <div className={className}>
      <div 
        className="columns-2 gap-2"
        style={{ columnFill: 'balance' }}
      >        
        {images.map((image, index) => {
          // Create varying aspect ratios for natural masonry effect while preserving image ratios
          const aspectVariants = [
            'aspect-[3/4]',   // Portrait
            'aspect-[4/3]',   // Landscape
            'aspect-square',  // Square
            'aspect-[2/3]',   // Tall portrait
            'aspect-[5/4]',   // Wide landscape
            'aspect-[3/5]',   // Very tall portrait
          ];
          
          // Make the first image (index 0) full width for hero effect
          const isHeroImage = index === 0;
          const aspectClass = isHeroImage 
            ? 'aspect-[16/9]' 
            : aspectVariants[index % aspectVariants.length];
          
          return (
            <div
              key={`${image.src}-${index}`}
              className={`w-full mb-2 ${isHeroImage ? 'break-before-column break-after-column' : 'break-inside-avoid'}`}
            >
              <div className={`w-full ${aspectClass} bg-gray-200 rounded-xl overflow-hidden shadow-sm relative`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index < 6}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
