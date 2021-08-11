import { useEffect, useRef, useState } from 'react';

export function useTooltipVisible(tableWrapperRef, minOffset = -60, maxOffset = 30) {
  const tooltipRef = useRef(null);
  const [isHovered, setHovered] = useState(false);
  const [offset, setOffset] = useState(maxOffset);

  const observerCallback = entries => {
    if (entries[0].isIntersecting && entries[0].intersectionRatio < 1) {
      if (offset === maxOffset) {
        setOffset(minOffset);
      }
      if (offset === minOffset) {
        setOffset(maxOffset);
      }
    }
  };

  const observerOptions = {
    root: tableWrapperRef.current,
    threshold: 0.0,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    observer.observe(tooltipRef.current.lastChild);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-param-reassign
    tooltipRef.current.lastChild.style.bottom = `${offset}px`;
  }, [isHovered, offset]);
  return { tooltipRef, setHovered };
}
