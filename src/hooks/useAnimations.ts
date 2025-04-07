import { useEffect } from 'react';
import { initFadeInAnimations } from '../lib/animations';

export const useAnimations = () => {
  useEffect(() => {
    initFadeInAnimations();
  }, []);
}; 