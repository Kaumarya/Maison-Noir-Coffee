import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const { y = 40, x = 0, duration = 1, delay = 0, stagger = 0.1 } = options;
    const children = options.staggerChildren ? el.children : [el];

    gsap.fromTo(children,
      { opacity: 0, y, x, scale: options.scale || 1 },
      {
        opacity: 1, y: 0, x: 0, scale: 1,
        duration, delay,
        stagger: options.staggerChildren ? stagger : 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: options.start || 'top 85%',
          end: options.end || 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => ScrollTrigger.getAll().forEach(t => {
      if (t.trigger === el) t.kill();
    });
  }, []);

  return ref;
}

export function useMagneticEffect() {
  const ref = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.4, ease: 'power2.out' });
  }, []);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)' });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}

export function useTiltEffect(intensity = 10) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(el, {
        rotateY: x * intensity,
        rotateX: -y * intensity,
        transformPerspective: 1000,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleLeave = () => {
      gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [intensity]);

  return ref;
}

export function useCounter(end, duration = 2000) {
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      onEnter: () => {
        if (counted.current) return;
        counted.current = true;
        gsap.fromTo(el, { innerText: 0 }, {
          innerText: end,
          duration: duration / 1000,
          ease: 'power2.out',
          snap: { innerText: 1 },
          onUpdate: function () {
            el.innerText = Math.round(gsap.getProperty(el, 'innerText'));
          },
        });
      },
    });
  }, [end, duration]);

  return ref;
}
