/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import { useEffect, useState } from 'react';

export function useScroll() {
  // storing this to get the scroll direction
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // the offset of the document.body
  const [bodyOffset, setBodyOffset] = useState<DOMRect>();
  // the vertical direction
  const [scrollY, setScrollY] = useState(bodyOffset?.top);
  // the horizontal direction
  const [scrollX, setScrollX] = useState(bodyOffset?.left);
  // scroll direction would be either up or down
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>();

  useEffect(() => {
    const listener = (e: any) => {
      setBodyOffset(document.body.getBoundingClientRect());
      setScrollY(bodyOffset?.top ? -bodyOffset?.top : 0);
      setScrollX(bodyOffset?.left);
      setScrollDirection(lastScrollTop > (bodyOffset?.top ? -bodyOffset?.top : 0) ? 'down' : 'up');
      setLastScrollTop(bodyOffset?.top ? -bodyOffset?.top : 0);
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return {
    scrollY,
    scrollX,
    scrollDirection
  };
}
