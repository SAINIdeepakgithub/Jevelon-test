import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToTop() {
  const { pathname, hash } = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Only scroll to top when pathname changes, not when hash changes
    // This prevents interference with hash-based navigation on the home page
    if (!hash) {
      // Use a small delay to ensure the route transition is complete
      timeoutRef.current = setTimeout(() => {
        try {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        } catch (error) {
          // Fallback for browsers that don't support smooth scrolling
          console.warn('Smooth scrolling not supported, using instant scroll');
          window.scrollTo(0, 0);
        }
      }, 100);
    }

    // Cleanup function to clear timeout
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [pathname, hash]);
} 