import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function ScrollManager() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Small delay to wait for route rendering
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
