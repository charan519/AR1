import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ARPostcardButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  // Handle scroll events to hide button when near other floating elements
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      
      // Hide button when near the bottom of the page (where other UI elements might be)
      if (scrollPosition + viewportHeight > pageHeight - 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    // Navigate to the AR experience page
    navigate('/future-postcards');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-24 right-8 z-[900]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative"
            onHoverStart={() => setShowTooltip(true)}
            onHoverEnd={() => setShowTooltip(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Tooltip */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md rounded-xl px-4 py-2 text-white text-sm whitespace-nowrap"
                >
                  Explore how this place might look in the future!
                </motion.div>
              )}
            </AnimatePresence>

            {/* Button */}
            <motion.button
              onClick={handleClick}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white shadow-lg"
              animate={{
                boxShadow: ['0 0 0px rgba(168, 85, 247, 0.4)', '0 0 20px rgba(168, 85, 247, 0.7)', '0 0 0px rgba(168, 85, 247, 0.4)']
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }
              }}
              aria-label="Discover Future Postcards"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">See the Future</span>
              <Send className="w-4 h-4 ml-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}