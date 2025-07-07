'use client';

import FixedPanel from "@/components/FixedPanel";
import Navbar from "@/components/Navbar";
import ProfileArticle from "@/components/Profile";
import Contact from "@/components/Contact";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<'info' | 'contact'>('info');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSectionChange = (newSection: 'info' | 'contact') => {
    if (isAnimating || newSection === activeSection) return;
    
    setActiveSection(newSection);
  };

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="lg:flex lg:h-screen">
      {/* Left 2/5 - Navbar and Profile/Contact */}
      <div className="w-full lg:w-[30.5vw] lg:min-w-[30.5vw] lg:max-w-[30.5vw] lg:flex-shrink-0 lg:overflow-y-auto">
        <div className="space-y-1 lg:p-4 lg:pt-6 lg:pr-3">
          <Navbar activeSection={activeSection} setActiveSection={handleSectionChange} />
          
          {/* Animated Content Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={activeSection === 'contact' ? 1 : -1}>
              <motion.div
                key={activeSection}
                custom={activeSection === 'contact' ? 1 : -1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
                transition={{
                  x: { 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 40,
                    delay: 0.05,
                    restSpeed: 0.01,
                    restDelta: 0.01,
                    duration: 0.4
                  },
                  opacity: { 
                    duration: 0.4,
                    delay: 0.05 
                  }
                }}
                style={{ 
                  position: 'relative',
                  willChange: 'transform, opacity'
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    setActiveSection(activeSection === 'info' ? 'contact' : 'info');
                  } else if (swipe > swipeConfidenceThreshold) {
                    setActiveSection(activeSection === 'contact' ? 'info' : 'contact');
                  }
                }}
              >
                {activeSection === 'info' ? <ProfileArticle /> : <Contact />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Right 3/5 - Fixed Panel (hidden on mobile) */}
      <div className="hidden lg:block lg:w-[69.5vw] lg:min-w-[69.5vw] lg:max-w-[69.5vw] lg:flex-shrink-0 lg:relative lg:pt-6 lg:pr-6 lg:overflow-y-auto">
        <FixedPanel />
      </div>
    </div>
  );
}
