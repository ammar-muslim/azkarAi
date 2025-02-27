import { useCallback } from 'react';

export function useScrollToNext() {
  return useCallback((index: number) => {
    const nextCard = document.getElementById(`dhikr-${index + 1}`);
    if (nextCard) {
      nextCard.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, []);
}