import { useEffect, useRef, useState } from 'react';

/**
 * Reveal-on-scroll hook based on IntersectionObserver.
 * The hidden state is applied imperatively after mount, so if JS or the
 * observer never runs the element simply stays visible.
 * Fires once per element and never re-hides.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; rootMargin?: string }
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.remove('reveal-hidden');
      setVisible(true);
    };

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    if (typeof IntersectionObserver === 'undefined' || reduced) {
      reveal();
      return;
    }

    el.classList.add('reveal', 'reveal-hidden');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal();
            observer.unobserve(entry.target);
            observer.disconnect();
          }
        });
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? '0px 0px -80px 0px',
      }
    );

    observer.observe(el);

    // Safety net: if the observer never fires, make sure content is readable.
    const fallback = window.setTimeout(() => {
      if (el.classList.contains('reveal-hidden')) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) reveal();
      }
    }, 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [options?.threshold, options?.rootMargin]);

  return { ref, visible };
}
