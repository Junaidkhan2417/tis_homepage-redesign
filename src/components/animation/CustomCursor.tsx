import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

export const CustomCursor: React.FC = () => {
  const { x, y, isHovering, hoverType, isTouchDevice } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for cursor followers to guarantee 60 FPS without layout shifts
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (x > 0 && y > 0) {
      mouseX.set(x);
      mouseY.set(y);
      setIsVisible(true);
    }
  }, [x, y, mouseX, mouseY]);

  // Immediately hide on touch devices or if not initialized
  if (isTouchDevice || !isVisible) {
    return null;
  }

  // Determine size & styling based on hover state
  const isView = hoverType === 'view';
  const ringSize = isView ? 64 : isHovering ? 48 : 32;
  const dotSize = isHovering ? 0 : 6;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-[#c09d59] mix-blend-difference flex items-center justify-center transition-[width,height,background-color,border-color] duration-200"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          width: ringSize,
          height: ringSize,
          backgroundColor: isHovering ? 'rgba(192, 157, 89, 0.15)' : 'transparent',
          borderColor: isHovering ? '#b90124' : '#c09d59',
        }}
      >
        {isView && (
          <span className="text-[10px] font-bold text-white tracking-widest uppercase">
            View
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#b90124] transition-[width,height,opacity] duration-150"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: dotSize,
          height: dotSize,
          opacity: isHovering ? 0 : 0.9,
        }}
      />
    </>
  );
};
