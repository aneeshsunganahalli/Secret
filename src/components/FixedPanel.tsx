import React from 'react';
import ImageGallery from './ImageGallery';

interface FixedPanelProps {
  className?: string;
}

const PlaygroundButton: React.FC = () => {
  return (
    <button className="flex items-center bg-gray-700 rounded-full pl-[10px] pr-[6px] pt-[4px] pb-[5px] gap-x-[6px] duration-200 relative overflow-hidden lg:py-[6px] lg:pl-[12px] lg:pr-[8px] hover:bg-gray-200 transition-colors">
      <div className="text-[14px] leading-[16.8px] lg:text-base lg:leading-[20px] relative z-[2]">
        Playground
      </div>
      <span className="w-[14px] h-[14px] border-[1px] border-white relative rounded-full flex items-center justify-center z-[2] transition-transform duration-500 ease-[cubic-bezier(0.34,0,0.36,1)] lg:w-[20px] lg:h-[20px]">
        <span className="w-[6px] h-[1px] bg-white lg:w-[12px]"></span>
        <span className="w-[6px] h-[1px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rotate-90 transition-transform duration-200 ease-in-out lg:w-[12px]"></span>
      </span>
    </button>
  );
};

const FixedPanel: React.FC<FixedPanelProps> = ({ className = '' }) => {
  return (
    <div 
      className={`
        bg-gray-50 
        rounded-3xl 
        py-[6px] 
        px-[16px]
        w-full 
        min-h-fit
        flex
        flex-col
        gap-y-[16px]
        relative 
        z-[2]
        ${className}
      `}
    >
      {/* Playground Button */}
      <div className="flex justify-start">
        <PlaygroundButton />
      </div>
      
      {/* Images Section */}
      <div className="pb-[10px]">
        <ImageGallery />
      </div>
    </div>
  );
};

export default FixedPanel;