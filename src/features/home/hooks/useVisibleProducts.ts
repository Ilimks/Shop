import { useEffect, useState } from 'react';

export const useVisibleProducts = (allProducts: any[]) => {
  const getInitialCount = () => (window.innerWidth <= 500 ? 2 : 5);
  const getAdditionalCount = () => (window.innerWidth <= 500 ? 4 : 5);

  const [initialCount, setInitialCount] = useState(getInitialCount());
  const [visibleCount, setVisibleCount] = useState(getInitialCount());
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newInitial = getInitialCount();
      setInitialCount(newInitial);

      if (!isExpanded) {
        setVisibleCount(newInitial);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const handleToggle = () => {
    const additionalCount = getAdditionalCount();

    if (!isExpanded) {
      setVisibleCount((prev) => Math.min(prev + additionalCount, allProducts.length));
      setIsExpanded(true);
    } else {
      setVisibleCount(initialCount);
      setIsExpanded(false);
    }
  };

  return {
    visibleCount,
    isExpanded,
    handleToggle,
  };
};
