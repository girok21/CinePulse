import { useEffect } from 'react';

const useScrollLock = (isLocked) => {
  useEffect(() => {
    const body = document.body;
    const originalStyle = window.getComputedStyle(body).overflow;

    if (isLocked) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = originalStyle;
    }

    return () => {
      // Cleanup on unmount or when the dependency changes
      body.style.overflow = originalStyle;
    };
  }, [isLocked]);
};

export default useScrollLock;