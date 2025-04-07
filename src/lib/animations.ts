import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initFadeInAnimations = () => {
  // Fade in sections from bottom
  gsap.utils.toArray('.fade-in-section').forEach((section) => {
    const target = section as HTMLElement;
    gsap.from(target, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Scale in cards/elements
  gsap.utils.toArray('.scale-in').forEach((element) => {
    const target = element as HTMLElement;
    gsap.from(target, {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: target,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // Slide in from sides
  gsap.utils.toArray('.slide-in-left').forEach((element) => {
    const target = element as HTMLElement;
    gsap.from(target, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  gsap.utils.toArray('.slide-in-right').forEach((element) => {
    const target = element as HTMLElement;
    gsap.from(target, {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: target,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });
}; 