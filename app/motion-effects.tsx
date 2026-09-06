'use client';

import { useEffect } from 'react';

export function MotionEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const parallaxElements = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    document.documentElement.classList.add('motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -7% 0px' },
    );

    elements.forEach((element) => observer.observe(element));

    let frameId = 0;
    const updateParallax = () => {
      const viewportCenter = window.innerHeight / 2;
      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        const progress = Math.max(-1, Math.min(1, (viewportCenter - elementCenter) / window.innerHeight));
        element.style.setProperty('--parallax-y', `${progress * 24}px`);
      });
      frameId = 0;
    };
    const requestParallaxUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
    window.addEventListener('resize', requestParallaxUpdate);

    return () => {
      observer.disconnect();
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', requestParallaxUpdate);
      window.removeEventListener('resize', requestParallaxUpdate);
      document.documentElement.classList.remove('motion-ready');
    };
  }, []);

  return null;
}
