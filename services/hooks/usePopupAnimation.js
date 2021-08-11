import { useEffect, useState } from 'react';
import { config, useSpring } from 'react-spring';

export function usePopupAnimation(isOpened) {
  const userHeight = document.documentElement.clientHeight;
  const [topOffset, setTopOffset] = useState(userHeight);

  useEffect(() => {
    const height = document.documentElement.clientHeight;
    if (isOpened) {
      setTopOffset(0);
    }
    if (!isOpened) {
      setTopOffset(height);
    }
  }, [isOpened]);

  const popUpAnimationConfig = {
    ...config.default,
    tension: 220,
    friction: 28,
  };

  const style = useSpring({
    top: `${topOffset}px`,
    config: popUpAnimationConfig,
  });
  return { topOffset, setTopOffset, style };
}
