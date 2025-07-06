'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const ProfileImage: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-200 rounded-[11px] overflow-hidden">
      <Image
        src="/Profile1.jpeg"
        alt="Profile"
        width={152}
        height={152}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

interface ClockProps {
  className?: string;
}

const Clock: React.FC<ClockProps> = ({ className = '' }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-GB', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`font-normal text-gray-900 ${className}`}>
      {time}
    </span>
  );
};

interface ProfileArticleProps {
  title?: string;
  description?: string;
  className?: string;
}

const ProfileArticle: React.FC<ProfileArticleProps> = ({ 
  title = "Portfolio",
  description = "Lorem est studio creativum Aethel Jenkins, designatoris Cambrici cum experientia ultra 15 annos, inter officia Praefecti et Directoris. Proditiones et societates excultae per explorationem consiliorum et artis directionem, novas technologias amplectens ad fines creativos promovendum.",
  className = ""
}) => {

  return (
    <article className={`rounded-xl p-[16px] bg-gray-50 w-full flex flex-col gap-y-[44px] lg:gap-y-[88px] ${className}`}>
      {/* Header Section */}
      <div className="flex justify-between items-start">
        <div className="flex gap-x-[16px] items-start lg:text-sm lg:leading-[18.4px]">
          {/* Profile Image Container */}
          <div className="w-[120px] h-[120px] rounded-[11px] overflow-hidden lg:w-[152px] lg:h-[152px]">
            <div className="!h-full !w-full rounded-[11px]">
              <ProfileImage />
            </div>
          </div>
        </div>
        
        {/* Clock */}
        <Clock />
      </div>

      {/* Description Section */}
      <div className="text-[16px] leading-[18px] max-w-[500px] lg:text-lg lg:leading-[23px]">
        <p className="text-gray-900">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProfileArticle;