import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface FixedPanelProps {
  className?: string;
}

interface PlaygroundButtonProps {
  isPlayground: boolean;
  onClick: () => void;
}

const PlaygroundButton: React.FC<PlaygroundButtonProps> = ({ isPlayground, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center bg-[#F0EAD6] rounded-full pl-[10px] pr-[6px] pt-[4px] pb-[5px] gap-x-[6px] duration-200 relative overflow-hidden lg:py-[6px] lg:pl-[12px] lg:pr-[8px] transition-all hover:bg-pink-500"
    >
      <div className="text-[14px] leading-[16.8px] lg:text-base lg:leading-[20px] relative z-[2] text-gray-800 font-medium">
        {isPlayground ? 'Gallery' : 'Playground'}
      </div>
      <motion.span 
        className="w-[14px] h-[14px] border-[1px] border-gray-800 relative rounded-full flex items-center justify-center z-[2] transition-transform duration-500 ease-[cubic-bezier(0.34,0,0.36,1)] lg:w-[20px] lg:h-[20px]"
        animate={{ rotate: isPlayground ? 180 : 0 }}
      >
        <span className="w-[6px] h-[1px] bg-gray-800 lg:w-[12px]"></span>
        <span className="w-[6px] h-[1px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-800 rotate-90 transition-transform duration-200 ease-in-out lg:w-[12px]"></span>
      </motion.span>
    </button>
  );
};

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
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
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      {/* Swiper Carousel */}
      <div className="w-full flex-1 flex items-center justify-center">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.2}
          spaceBetween={-300}
          speed={600}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 400,
            modifier: 1.8,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full h-full swiper-container"
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          loop={true}
          loopAdditionalSlides={2}
          style={{
            '--swiper-navigation-color': '#ec4899',
            '--swiper-pagination-color': '#ec4899',
            '--swiper-navigation-size': '28px',
          } as React.CSSProperties}
        >
          {images.map((image, index) => (
            <SwiperSlide key={`${image.src}-${index}`}>
              <div className="swiper-slide-content">
                <div className="image-container">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="carousel-image"
                    draggable={false}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Clean Counter */}
      <div className="flex items-center justify-center mt-6 mb-2">
        <div className="bg-black/10 rounded-full px-4 py-2 backdrop-blur-sm">
          <span className="text-gray-700 text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
};

const FixedPanel: React.FC<FixedPanelProps> = ({ className = '' }) => {
  const [isPlayground, setIsPlayground] = useState(false);

  const toggleMode = () => {
    setIsPlayground(!isPlayground);
  };

  return (
    <div 
      className={`
        bg-[#F0EAD6]
        rounded-xl 
        py-[6px] 
        px-[16px]
        w-full 
        h-full
        flex
        flex-col
        z-[2]
        ${className}
      `}
    >
      {/* Playground Button */}
      <div className="flex justify-start flex-shrink-0">
        <PlaygroundButton isPlayground={isPlayground} onClick={toggleMode} />
      </div>
      
      {/* Content Section */}
      <div className="flex-1 overflow-y-auto pb-[10px] mt-[6.5px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={isPlayground ? 'carousel' : 'gallery'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            {isPlayground ? <ImageCarousel /> : <ImageGallery />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FixedPanel;