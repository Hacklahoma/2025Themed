import React, { useEffect, useRef, useState } from 'react';
import './RatBreak.css';
import RunningRat from '../assets/RunningRat.gif';

const RatBreak = () => {
  const ratBreakRef = useRef(null);
  const [ratPosition, setRatPosition] = useState(150); // Start off-screen to the right

  useEffect(() => {
    const handleScroll = () => {
      if (ratBreakRef.current) {
        const rect = ratBreakRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Calculate progress (0 when the component is just entering the viewport,
        // and 1 when it's about to leave)
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const clampedProgress = Math.max(0, Math.min(1, progress));

        // Map progress to position (from 150% to -50%)
        const newPosition = (1 - clampedProgress) * 200 - 50;

        setRatPosition(newPosition);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize the position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="rat-break" ref={ratBreakRef}>

      {/* Desktop Layout */}
      <div className="rat-break-desktop">
        <img
          src={RunningRat}
          alt="Running Rat"
          className="rat-image"
          style={{ left: `${ratPosition}%` }}
        />
      </div>

      {/* Mobile Layout */}
      <div className="rat-break-mobile">
        <img
          src={RunningRat}
          alt="Running Rat"
          className="rat-image"
          style={{ left: `${ratPosition}%` }}
        />
      </div>

    </div>
  );
};

export default RatBreak;
