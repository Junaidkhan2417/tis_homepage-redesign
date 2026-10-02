import { useState, useEffect } from 'react';

export interface MouseState {
  x: number;
  y: number;
  isHovering: boolean;
  hoverType: 'default' | 'button' | 'link' | 'card' | 'view';
  isTouchDevice: boolean;
}

export function useMousePosition(): MouseState {
  const [mouseState, setMouseState] = useState<MouseState>({
    x: -100,
    y: -100,
    isHovering: false,
    hoverType: 'default',
    isTouchDevice: false,
  });

  useEffect(() => {
    // Detect touch / coarse pointer
    const isTouch = 
      typeof window !== 'undefined' &&
      (window.matchMedia('(pointer: coarse)').matches || 
       'ontouchstart' in window || 
       navigator.maxTouchPoints > 0);

    if (isTouch) {
      setMouseState(prev => ({ ...prev, isTouchDevice: true }));
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      let isHovering = false;
      let hoverType: MouseState['hoverType'] = 'default';

      if (target) {
        const interactiveParent = target.closest('button, a, input, select, textarea, [role="button"], [data-cursor]');
        if (interactiveParent) {
          isHovering = true;
          const customType = interactiveParent.getAttribute('data-cursor');
          if (customType === 'view') {
            hoverType = 'view';
          } else if (interactiveParent.tagName.toLowerCase() === 'button' || interactiveParent.getAttribute('role') === 'button') {
            hoverType = 'button';
          } else if (interactiveParent.tagName.toLowerCase() === 'a') {
            hoverType = 'link';
          } else {
            hoverType = 'card';
          }
        }
      }

      setMouseState({
        x: e.clientX,
        y: e.clientY,
        isHovering,
        hoverType,
        isTouchDevice: false,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mouseState;
}
