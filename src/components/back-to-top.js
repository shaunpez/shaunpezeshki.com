import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to detect scroll and update state
  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to handle the scroll to top action
  const scrollToTop = () => {
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      // Fallback for browsers that don't support smooth scrolling
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    // Check if window is available (for SSR compatibility)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      
      // Initial check
      toggleVisibility();

      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
  }, []);

  // Don't render on server side
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    isVisible && (
      <span className="back-to-top" role="button" tabIndex={0} onClick={scrollToTop} onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}>
        <button onClick={scrollToTop} aria-label="Back to top">
            ⌃
        </button>
      </span>
    )
  );
};


export default BackToTopButton;
