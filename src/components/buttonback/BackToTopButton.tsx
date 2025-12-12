'use client';
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          // Positioning:
          // Mobile: Chat is bottom-24, so we put this at bottom-40
          // Desktop: Chat is bottom-6, so we put this at bottom-24 (stacked above)
          className="fixed right-7 cursor-pointer z-40 p-3 rounded-full shadow-lg shadow-[#f97316]/30 bg-[#171717]/80 backdrop-blur-sm border border-white/10 text-[#f97316] hover:bg-[#f97316] hover:text-white transition-colors bottom-40 lg:bottom-24"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} strokeWidth={3} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
