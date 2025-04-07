import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export const scrollToSection = (targetId: string) => {
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  gsap.to(window, {
    duration: 1,
    scrollTo: {
      y: targetId,
      offsetY: 80, // Adjust this value based on your header height
    },
    ease: 'power2.inOut',
  });
}; 