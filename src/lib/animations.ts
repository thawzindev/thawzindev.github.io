
import { useEffect, useState } from 'react';

/**
 * Hook that delays the mounting of components for staggered animations
 */
export function useDelayedMount(delay: number = 0): boolean {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsMounted(true);
    }, delay);

    return () => clearTimeout(timerId);
  }, [delay]);

  return isMounted;
}

/**
 * Hook to observe elements entering viewport for triggering animations
 */
export function useIntersectionObserver(threshold: number = 0.1): [
  boolean, 
  (node: Element | null) => void
] {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return [isVisible, setRef];
}
