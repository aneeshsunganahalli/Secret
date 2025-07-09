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

  const [[page, direction], setPage] = useState([activeSection, 0]);

  const handleSectionChange = (newSection: 'info' | 'contact') => {
    if (isAnimating || newSection === activeSection) return;
    
    const newDirection = newSection === 'contact' ? 1 : -1;
    setPage([newSection, newDirection]);
    setActiveSection(newSection);
  };

  const slideVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
        scale: 0.95
      };
    }
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="lg:flex lg:h-screen bg-black">
      {/* Left 2/5 - Navbar and Profile/Contact */}
      <div className="w-full lg:w-[30.5vw] lg:min-w-[30.5vw] lg:max-w-[30.5vw] lg:flex-shrink-0 lg:overflow-y-auto bg-black">
        <div className="space-y-1 lg:p-4 lg:pt-6 lg:pr-3">
          <Navbar activeSection={activeSection} setActiveSection={handleSectionChange} />
          
          {/* Animated Content Container */}
          <div className="relative overflow-hidden rounded-xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                  duration: 0.6
                }}
                style={{ 
                  position: 'relative',
                  willChange: 'transform, opacity'
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    // Swiping left: go to contact
                    handleSectionChange('contact');
                  } else if (swipe > swipeConfidenceThreshold) {
                    // Swiping right: go to info
                    handleSectionChange('info');
                  }
                }}
              >
                {page === 'info' ? <ProfileArticle /> : <Contact />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Right 3/5 - Fixed Panel (hidden on mobile) */}
      <div className="hidden lg:block lg:w-[69.5vw] lg:min-w-[69.5vw] lg:max-w-[69.5vw] lg:flex-shrink-0 lg:relative lg:pt-6 lg:pr-6 lg:overflow-y-auto bg-black">
        <FixedPanel />
      </div>
    </div>
  );
}
