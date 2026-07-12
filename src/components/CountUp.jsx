import React, { useState, useEffect, useRef } from 'react';

export default function CountUp({ target }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        let start = 0;
        const duration = 2000;
        const stepTime = 30;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        const isDecimal = target % 1 !== 0;

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            clearInterval(timer);
            setCount(target);
          } else {
            setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
          }
        }, stepTime);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  return <span ref={elementRef}>{count}</span>;
}
