'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ContactSection from './ContactBar';
import { motion } from 'framer-motion';

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
    <span className={`font-medium bg-gradient-to-r from-[#F77FBE] to-[#F77FBE]/80 bg-clip-text text-transparent ${className}`}>
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Longer delay between animations
        delayChildren: 0.2    // Initial delay before starting
      }
    }
  };

  const contactBarVariants = {
    hidden: { 
      x: 400, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,  // Lower stiffness for smoother movement
        damping: 35,     // Higher damping for more fluid motion
        duration: 1.4    // Longer duration
      }
    }
  };

  const infoVariants = {
    hidden: { 
      x: 400, 
      opacity: 0 
    },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 150,  // Lower stiffness for smoother movement
        damping: 35,     // Higher damping for more fluid motion
        duration: 1.4    // Longer duration
      }
    }
  };

  return (
    <motion.div 
      className={`flex flex-col gap-y-1 ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Profile Article - Animates Second */}
      <motion.article 
        className="rounded-xl p-[16px] bg-gradient-to-br from-white via-pink-50/50 to-pink-100/30 w-full flex flex-col gap-y-[44px] lg:gap-y-[88px] shadow-lg border border-pink-200/50"
        variants={infoVariants}
      >
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
          <p className="text-gray-700">
            {description}
          </p>
        </div>
      </motion.article>

      {/* Contact Section - Animates First but positioned below */}
      <motion.div variants={contactBarVariants}>
        <ContactSection />
      </motion.div>
    </motion.div>
  );
};

export default ProfileArticle;